import type { GetStaticProps, NextPage } from 'next'
import { Form, Input, Checkbox, Button, Layout } from 'antd'

interface PageProps {}

export const getStaticProps: GetStaticProps<PageProps> = (context) => {
	return {
		props: {
			a: 1,
		},
	}
}

const Login: NextPage<PageProps> = (props) => {
	const onFinish = (values: any) => {
		console.log('Success:', values)
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Layout.Content
			style={{
				padding: '50px',
				backgroundColor: '#fff',
				minHeight: '100%',
			}}>
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off">
				<Form.Item
					label="Username"
					name="username"
					rules={[
						{
							required: true,
							message: 'Please input your username!',
						},
					]}>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[
						{
							required: true,
							message: 'Please input your password!',
						},
					]}>
					<Input.Password />
				</Form.Item>

				<Form.Item
					name="remember"
					valuePropName="checked"
					wrapperCol={{ offset: 8, span: 16 }}>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Layout.Content>
	)
}

export default Login
