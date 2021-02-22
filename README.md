# Vitamin

Opinionated Vite starter template.

## Features

- [Vite 2](https://vitejs.dev) with [React](https://reactjs.org) [Typescript](https://www.typescriptlang.org) and [absolute imports](https://github.com/aleclarson/vite-tsconfig-paths).
- [Tailwind CSS v2.0](https://tailwindcss.com) with a [basic reset for form styles](https://github.com/tailwindlabs/tailwindcss-forms) and dark mode.
- [ESLint](https://eslint.org), [stylelint](https://stylelint.io) and [Prettier](https://prettier.io).
- [PWA](https://github.com/antfu/vite-plugin-pwa) with [17/17 Lighthouse score](https://web.dev/pwa-checklist/).
- Write e2e tests with [Cypress](https://www.cypress.io).
- Deploy to [Vercel](vercel.com) with pre-configured [SPA fallback](https://vercel.com/docs/configuration#routes/advanced/spa-fallback).

## Getting started

Use this repository as a [GitHub template](https://github.com/wtchnm/Vitamin/generate) or use [degit](https://github.com/Rich-Harris/degit) to clone to your machine with an empty git history:

```
npx degit wtchnm/Vitamin
```

Then, install the dependencies:

```
yarn install
```

### Before you start coding

- If you don't plan to use GitHub and [Dependabot](https://dependabot.com), delete the `.github` directory.
- Clean up the `cypress/integration/index.spec.ts` file.
- Change the `favicon.png`, `apple-touch-icon.png`, `android-chrome-192x192.png` and `android-chrome-512x512.png`. [favicon.io](https://favicon.io) is a cool tool for generating these assets.
- Remove the `fruits.json` in the public folder.
- In the `src` folder, remove the `api` and `components` folder and the `types.ts` file.
- If you don't plan to use `react-query`, remove the query client logic in the `main.tsx` file.
- Change the title, description and theme color in the `index.html` and `vite.config.ts`. [Inter font](https://rsms.me/inter/) is included, so remove it if you want.
- Modify or delete the `LICENSE` file.
- Change the `name` field in package.json.

### Development

Just run `yarn dev`.

### Production

Run `yarn build`. The generated files will be on the `dist` folder.

### Testing

Run `yarn test`. Tests are performed on production build, so be sure to build your app first.
