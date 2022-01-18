# This is a [Next.js] project bootstrapped with [`create-next-app`].

## Start

개발서버(local) 실행하기

```bash
yarn dev
```

Browser에서 <http://localhost:3000>확인 합니다.

`pages/index.tsx` 파일을 수정하면 자동으로 update 됩니다.

### [API routes]

**예제**: <http://localhost:3000/api/hello>.  
폴더트리 구조에 따른 파일명으로 `endpoint`가 만들어집니다. 이를 이용해서 Proxy API서버 또는 직접적인 API서버를 만들 수 있습니다.

> 이 기능으로 인하여 `pages` 하위 directory 에서 `api`라는 파일명 또는 폴더명은 만들 수 없습니다.

## Learn More

-   [Next.js Documentation]
-   [Learn Next.js] - an interactive Next.js tutorial.

자세한 사항은 [Next.js deployment documentation]를 참고하세요.

[localhost:3000]: http://localhost:3000
[next.js]: https://nextjs.org/
[`create-next-app`]: https://github.com/vercel/next.js/tree/canary/packages/create-next-app.
[api routes]: https://nextjs.org/docs/api-routes/introduction
[next.js documentation]: https://nextjs.org/docs
[learn next.js]: https://nextjs.org/learn
[next.js deployment documentation]: https://nextjs.org/docs/deployment

## Project guide

기본 적인 설정 에대하 서술 합니다.

### Typescript

type safe한 코드 생성을 지향합니다.

dependencies(typescript)

> -   "typescript": "^4.5.4"

### Lint

코드 에러와 문법에 대한 규칙을 정의하고 검사합니다. eslint, prettier를 사용합니다.

dependencies(eslint)

> -   "babel-eslint": "^10.1.0"
> -   "eslint": "^8.6.0"
> -   "eslint-config-airbnb": "^19.0.4"
> -   "eslint-config-next": "12.0.7"
> -   "eslint-config-prettier": "^8.3.0"
> -   "eslint-plugin-babel": "^5.3.1"
> -   "eslint-plugin-import": "^2.25.4"
> -   "eslint-plugin-jsx-a11y": "^6.5.1"
> -   "eslint-plugin-prettier": "^4.0.0"
> -   "eslint-plugin-react": "^7.28.0"
> -   "eslint-plugin-react-hooks": "^4.3.0"

dependencies(prettier)

> -   "prettier": "^2.5.1",

### prettier

> 파일별로 설정을 달리 하는 것이 가능.

```json
"overrides": [
    {
        "files": "*.json",
        "options": {
            "printWidth": 200
        }
    }
]
```
