# Pull Request Charts

Using AWS Serverless Application Model, Svelte and TypeScript.

Code uses [Arc Serverless](https://arc.codes) conventions:

Layout:

 - Lambdas are defined under `arc` in `package.json`
 - Lambda code is under `src/http`. Shared code is `src/shared` (all lamdas) and `/src/views` (`GET` requests only)
 - Frontend code is under `src/frontend`. The UI is built using Svelte, a modern framework that avoids the size and slow performance of a virtual DOM. I have experience with React, Vue, Ractive, Backbone, Angular etc but have recently been working in Svelte and it seemed prudent to stick to a newer tech rather than re-learn React. 
 - Config is under `.env`, which is not committed for security reasons. 
 - `public` dir is mapped to `static` in each lambda.

## What's implemented

 - On page load, the user sees stacked bar chart with the bars representing the number of pull requests that were opened and closed
during that month (note this particular project has few PRs closed).
 - When hovering over one of the bars, the user sees a tooltip that contains the number of opened and closed pull requests for that month.
 - Pagination is implemented (the repo is question doesn't have enough PRs, so the tests use `nodejs` itself)
 - There's a full test suite and instructions for running the app below

## What's next:

I time-boxed my work on this, but I'd do these next:

 - Filtering for Last Month, Last 90 Days, All Time, etc.
 - The backend should cache GitHub responses, store them and deliver them offline.
 - Minor visual tweaks (consolidating labels in the charts, gradients on the bars, etc)

## Test

```bash
npm test
```

## Run locally

The app needs a GitHub auth token specific to your account.

 - Copy `.env.example` to `.env`
 - [Get your own GitHub auth token](https://github.com/settings/tokens/new) and add the token to `.env`.

```bash
npm start
```

## Deploy the code to AWS

Set up your `~/.aws/credentials` and run:

```bash
npm run deploy
```
