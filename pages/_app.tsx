import { AppProps } from 'next/app'
import GlobalStyle from '@styles/global'
import AppLayout from '@components/layout/AppLayout'
import RouterGuard from '@components/layout/RouterGuard'
import wrapper from '@store/index'

function MyApp(props: AppProps) {
	const { Component, pageProps } = props
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
