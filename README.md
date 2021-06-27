# Vitamin

[![codecov](https://codecov.io/gh/wtchnm/Vitamin/branch/main/graph/badge.svg?token=H9BBAKGYI0)](https://codecov.io/gh/wtchnm/Vitamin) ![Test workflow](https://github.com/wtchnm/Vitamin/actions/workflows/test.yml/badge.svg) ![CodeQL workflow](https://github.com/wtchnm/Vitamin/actions/workflows/codeql-analysis.yml/badge.svg) [![Total alerts](https://img.shields.io/lgtm/alerts/g/wtchnm/Vitamin.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/wtchnm/Vitamin/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/wtchnm/Vitamin.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/wtchnm/Vitamin/context:javascript) ![Up to date dependencies](https://status.david-dm.org/gh/wtchnm/Vitamin.svg) ![Up to date dev dependencies](https://status.david-dm.org/gh/wtchnm/Vitamin.svg?type=dev) [![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/wtchnm/Vitamin/blob/main/LICENSE)

Opinionated Vite starter template.

## Features

- [Vite 2](https://vitejs.dev) with [React](https://reactjs.org) [Typescript](https://www.typescriptlang.org) and [absolute imports](https://github.com/aleclarson/vite-tsconfig-paths).
- [Tailwind CSS v2.1](https://tailwindcss.com) with the new JIT engine enabled, a [basic reset for form styles](https://github.com/tailwindlabs/tailwindcss-forms) and dark mode.
- Use [ESLint](https://eslint.org), [stylelint](https://stylelint.io) and [Prettier](https://prettier.io) on your IDE and before you commit with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).
- [PWA](https://github.com/antfu/vite-plugin-pwa) with [17/17 Lighthouse score](https://web.dev/pwa-checklist/).
- Write e2e tests with [Cypress](https://www.cypress.io).
- GitHub Actions for [dependency updates](https://dependabot.com), [CodeQL Analysis](https://securitylab.github.com/tools/codeql), running [Cypress](https://www.cypress.io) tests and code coverage with [Codecov](https://about.codecov.io/).
- Deploy to [Vercel](vercel.com) with pre-configured [SPA fallback](https://vercel.com/docs/configuration#routes/advanced/spa-fallback).

## Getting started

Use this repository as a [GitHub template](https://github.com/wtchnm/Vitamin/generate) or use [degit](https://github.com/Rich-Harris/degit) to clone to your machine with an empty git history:

```
npx degit wtchnm/Vitamin#main my-app
```

Then, install the dependencies:

```
yarn install
```

### Before you start coding

- [ ] If you don't plan to use GitHub Actions, delete the `.github` directory.
- [ ] Clean up the `cypress/integration/index.spec.ts` file.
- [ ] Change the `favicon.png`, `apple-touch-icon.png`, `android-chrome-192x192.png` and `android-chrome-512x512.png`. [favicon.io](https://favicon.io) is a cool tool for generating these assets.
- [ ] Remove the `fruits.json` in the public folder.
- [ ] In the `src` folder, remove the `api` and `components` folder and the `types.ts` file.
- [ ] If you don't plan to use `react-query`, remove the query client logic in the `main.tsx` file.
- [ ] Change the title, description and theme color in the `index.html` and `vite.config.ts`. [Inter font](https://rsms.me/inter/) is included, so remove it if you want.
- [ ] Modify or delete the `LICENSE` file.
- [ ] Change the `name` field in package.json.

### Development

Just run `yarn dev`.

### Production

Run `yarn build`. The generated files will be on the `dist` folder.

### Testing

Run `yarn test`. Tests are performed on production build, so be sure to build your app first.
