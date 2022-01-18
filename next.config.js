const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
	reactStrictMode: true,
	experimental: {
		// ssr and displayName are configured by default
		styledComponents: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	/**
	 * Custom Webpack Config
	 * https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
	 */
	webpack(config, options) {
		const { dev, isServer } = options

		// Do not run type checking twice:
		if (dev && isServer) {
			config.plugins.push(new ForkTsCheckerWebpackPlugin())
		}

		return config
	},
}
