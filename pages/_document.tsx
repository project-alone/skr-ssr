import Document, { Head, Html, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

/**
 * @description
 * _document.(ts|js|tsx|jsx) 파일의 코드는 함수형 컴포넌트로 작성할 수 없습니다.
 */
export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					{/* createPortal target element */}
					<div id="portal-container" />
					<NextScript />
				</body>
			</Html>
		)
	}
}
