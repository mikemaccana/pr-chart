# Pull Request Charts

Using AWS Serverless Application Model, Svelte and TypeScript.

Code uses Arc serverless conventions:

 - Lambdas are defined under `arc` in `package.json`
 - Lambda code is under `src/http`. Shared code is `src/shared` (all lamdas) and `/src/views` (`GET` requests only)
 - Frontend code is under `src/frontend`
 - Config is under `.env` (not commited). 
 - `public` dir is mapped to `static` in each lambda.
## TODO

 - Minor visual tweaks
 - Pagination (though the repo has far less commits than a single page)

## Test

```bash
npm test
```

## Run in local Sandbox

The app needs a GitHub auth token specific to your account.

 - Copy `.env.example` to `.env`
 - [Get your own GitHib auth token](https://github.com/settings/tokens/new) and add the token to `.env`.

```bash
npm start
```

## Deploy the code:

```bash
npm run deploy
```
