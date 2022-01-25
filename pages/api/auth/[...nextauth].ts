import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

/**
 * @see https://next-auth.js.org/
 */

export default NextAuth({
	providers: [
		/** 예시) email과 password를 입력받는 인증을 구현 */
		CredentialsProvider({
			id: 'email-password-credential',
			name: 'Credentials',
			/**
			 * nextAuth에서는 자동으로 Form을 생성
			 */
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'test@test.com',
				},
				password: {
					label: 'Password',
					type: 'password',
				},
			},
			/**
			 * signUp 버튼을 클릭하면 호출되는 함수
			 * 해당 부분에서 들어온 데이터를 가지고 인증을 진행
			 */
			async authorize(credentials, req) {
				const email = credentials?.email
				const password = credentials?.password

				/**
				 * 이부분에서 실제 로그인 API를 호출하여 리턴하면 됩니다.
				 * `undefined`는 리턴할수 없습니다.
				 */
				if (email === 'test@test.com' && password === 'test1234') {
					return credentials || null
				}

				throw new Error('아이디 혹은 패스워드가 틀렸습니다.')
			},
		}),
	],
	secret: 'skr-auth',
	pages: {
		signIn: '/login',
	},
	callbacks: {
		async jwt({ token, user, account, profile, isNewUser }) {
			console.log('async jwt', token, user)
			return token
		},
		async session({ session, user, token }) {
			console.log('async session', session)
			return session
		},
	},
})
