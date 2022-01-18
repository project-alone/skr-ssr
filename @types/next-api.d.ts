import { NextApiRequest, NextApiResponse } from 'next'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

declare global {
	/**
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
