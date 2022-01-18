import type { FC } from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

interface Props {}

const AppFooter: FC<Props> = () => {
	return (
		<Footer style={{ backgroundColor: '#fff' }}>
			Copyright © SK렌터카. All Rights Reserved.
		</Footer>
	)
}

export default AppFooter
