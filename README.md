status-cod.es
=============
An HTTP status codes reference site.

Recommended IDE Setup
---------------------
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

Customize configuration
-----------------------
See [Vite Configuration Reference](https://vitejs.dev/config/).

Project Setup
-------------
```sh-session
yarn
```

### Compile and Hot-Reload for Development

```sh-session
yarn dev
```

### Compile and Minify for Production

```sh-session
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh-session
yarn test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh-session
yarn test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh-session
yarn build
yarn test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh-session
yarn lint
```

Reference
---------
- [HTML Standard § 4.5.6 The cite element](https://html.spec.whatwg.org/#the-cite-element)

License
-------
The MIT License (Expat). See the [license file](LICENSE) for details.
