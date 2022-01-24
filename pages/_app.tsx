import GlobalStyle from '@styles/global'
import AppLayout from '@components/layout/AppLayout'
import RouterGuard from '@components/layout/RouterGuard'
import wrapper from '@store/index'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	console.log('rendered _app.tsx')
	return (
		<AppLayout>
			<GlobalStyle />
			<RouterGuard>
				<Component {...pageProps} />
			</RouterGuard>
		</AppLayout>
	)
}

export default wrapper.withRedux(MyApp)
