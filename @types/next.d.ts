import { NextApiRequest, NextApiResponse } from 'next'
import { ThunkAction } from '@reduxjs/toolkit'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 * @description
 * 이 곳에서 작성된 타입들은 전역 타입 이므로 import 하여 사용하지 말고 전역 변수 처럼 사용하시면 됩니다.
 * `declare global` 내에 선언된 타입 또는 인터페이스는 `export` 할 필요가 없습니다.
 */
declare global {
	/**
	 *  @description nextjs api handler 함수 타입
	 * @example
	 * type NextApiRequestWithFoo = {
	 *      foo: (bar: string) => void
	 * }
	 *
	 * const handler: NextApiHandler<NextApiRequestWithFoo> = (req, res) => {
	 *      req.foo('bar') // we can now use `req.foo` without type errors
	 *      res.end('ok')
	 * }
	 */
	type NextApiHandler<Req = {}> = (
		req: Req & NextApiRequest,
		res: NextApiResponse,
	) => void
}

// jspdf-autotable
declare module 'jspdf-autotable' {
	const _default: any
	export default _default
}

declare module 'faker' {
	const _default: any
	export default _default
}
