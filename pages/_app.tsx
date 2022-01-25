import type { AppProps } from 'next/app'
import { AppLayout, RouterGuard } from '@components/layout'
import wrapper, { persistor } from '@store/index'
import { PersistGateForSSR } from '@store/persist'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<AppLayout>
			<PersistGateForSSR persistor={persistor}>
				<RouterGuard>
					<Component {...pageProps} />
				</RouterGuard>
			</PersistGateForSSR>
		</AppLayout>
	)
}

export default wrapper.withRedux(MyApp)
