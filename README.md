# Pull Request Charts

Using AWS Cloudformation and Lamba (via Arc serverless) and Svelte.

 - Lambdas are defined under `arc` in `package.json`
 - Backend code in under `src/http`
 - Frontend code in under `src/frontend`
 - `public` dir is mapped to`static` in each lambda.
 - Livereload is enabled during development

## TODO

 - Pad empty months
 - Pagination (though the repo has far less commits than a single page)

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
