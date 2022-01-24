/**
 * @description
 * node 환경 변수 타입 정의
 */

namespace NodeJS {
	interface ProcessEnv {
		NEXTAUTH_URL: string
		/** app에서 사용되는 fetch url */
		NEXT_PUBLIC_API_URL: string
	}
}
