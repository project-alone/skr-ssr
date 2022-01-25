# This is a [Next.js] project bootstrapped with [`create-next-app`].

## Scripts

```bash
yarn dev                # 로컬서버 실행
yarn build              # next build 명령어를 실행(정적 리소스 반환은 아닙니다.)
yarn export             # 빌드된 결과물을 기준으로 정적리소스를 반환
yarn start              # 빌드된 결과물을 기준으로 서버를 실행
yarn build:static       # 빌드 후 정적 리소스 반환을 실행
yarn lint               # next 프레임웍 레벨에서 eslint검사를 수행
yarn storybook          # 스토리북을 로컬에서 실행
yarn build-storybook    # 스토리북을 빌드합니다.
yarn fakeapi            # json-server를 활용한 테스트용 api서버를 싱행
```

## Basics

-   [Next.js Documentation]
-   [Learn Next.js] - an interactive Next.js tutorial.

자세한 사항은 [Next.js deployment documentation]를 참고하세요.

[next.js]: https://nextjs.org/
[`create-next-app`]: https://github.com/vercel/next.js/tree/canary/packages/create-next-app.
[next.js documentation]: https://nextjs.org/docs
[learn next.js]: https://nextjs.org/learn
[next.js deployment documentation]: https://nextjs.org/docs/deployment

## Project guide

기본 적인 설정에 대해 서술 합니다.

### 기타 코드 도구

-   typescript: type safe한 코드 생성을 지향합니다.
-   ESLint: 코드 에러와 문법에 대한 규칙을 정의하고 검사합니다. eslint, prettier를 사용합니다.
-   prettier: 규칙에 맞는 코드 작성을 유도 합니다.

### _prettier_

> 파일 extension flag 마다 설정을 달리 하는 것이 가능.

```json
"overrides": [
    {
        "files": "*.js",
        "options": {
            "printWidth": 200
        }
    }
]
```
