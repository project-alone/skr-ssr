const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		// ssr and displayName are configured by default
		styledComponents: true,
	},

	/**
	 * @description build 시 발생하는 lint 에러로 빌드가 중단되는 문제로 true 설정
	 */
	eslint: {
		ignoreDuringBuilds: true,
	},

	/**
	 * @default '.next'
	 */
	distDir: 'build',

	/**
	 * Custom Webpack Config
	 * https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
	 */
	webpack(config, options) {
		const { dev, isServer } = options

		// type checking이 2번 실행 되지 않도록 체크
		if (dev && isServer) {
			config.plugins.push(new ForkTsCheckerWebpackPlugin())
		}

		return config
	},

	async rewrites() {
		if (process.env.NODE_ENV === 'development') {
			/**
			 * for development
			 * proxy for fetch api(cors 우회)
			 */
			return [
				{
					// 요청 한 uri
					source: '/beapi/:path*',
					// 변경 되서 요청되는 uri
					destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
				},
			]
		} else {
			/**
			 * for production
			 */
			return []
		}
	},
}

module.exports = nextConfig
