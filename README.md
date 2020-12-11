# TypeScript with Architect

 - `src`contains HTML versions of each lambda
 - Types are provided for `Request` and `Response` objects
 - The app will watch and compile TypeScript to `dist` as it's saved
 - Arc uses the `dist` directory
 - This app uses `arc` key in `package.json` to configure Architect
 - Tests use `ts-jest` 

## Build

```bash
npm run build
```

## Test

```bash
npm test
```

## Run locally:

```bash
npm start
```

## Deploy the code:

```bash
npm run deploy
```
