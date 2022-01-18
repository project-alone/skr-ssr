import type { FC } from 'react'
import { Layout } from 'antd'
import Sidebar from '@components/layout/Sidebar'
import AppHeader from '@components/layout/AppHeader'
import AppFooter from '@components/layout/AppFooter'

const { Sider, Content, Footer } = Layout

interface Props {}

const AppLayout: FC<Props> = (props) => {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<AppHeader />
			<Layout>
				<Sider width="auto" style={{ backgroundColor: '#fff' }}>
					<Sidebar />
				</Sider>
				<Layout>
					<Content style={{ padding: '50px' }}>
						{props.children}
					</Content>
					<AppFooter />
				</Layout>
			</Layout>
		</Layout>
	)
}

export default AppLayout
