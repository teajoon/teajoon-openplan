# Openplan work by teajoon

### Utilities

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Tanstack/react-query](https://tanstack.com/query/latest) for asynchronous state
- [Axios](https://github.com/axios/axios) for api request
- [Zustand](https://zustand-demo.pmnd.rs/) for state management
- [React-loader-spinner](https://mhnpd.github.io/react-loader-spinner/) for loader

### Apps and Packages

- `storybook`: storybook@latest from turborepo
- `web`: [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/)
- `utils`: common utils library
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Env
#### web
- NEXT_PUBLIC_API_URL: Server api url

### Commend
#### - Building packages/ui
```
pnpm run build:ui
```

#### - Building packages/utils
```
pnpm run build:utils
```

#### - Building packages/utils
```
pnpm run build:utils
```

#### - Development apps/web
```
pnpm run dev
```

#### - Development apps/storybook
```
pnpm run storybook
```

#### - Check lint
```
pnpm run lint
```

#### - Build
```
pnpm run build
```
