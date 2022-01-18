import * as NextImage from 'next/image'
import GlobalStyle from '@styles/global'

// Next.js Image 컴포넌트 대체
const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
	layout: 'centered',
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}

export const decorators = [
	(Story) => (
		<>
			<GlobalStyle />
			<Story />
		</>
	),
]
