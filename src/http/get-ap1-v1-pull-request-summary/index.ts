import { Request, Response } from "../../shared/architect-types";
import { STATUSES, CONTENT_TYPES, stringify, log } from "../../shared/utils";
import {
  convertPullRequestsToMonthlySums,
  GithubClient,
  padMissingMonths,
} from "./get-pull-requests";

import { config as dotEnvConfig } from "dotenv";

dotEnvConfig();

const auth = process.env.GITHUB_AUTH;

export async function handler(request: Request): Promise<Response> {
  const githubClient = new GithubClient("downshift-js", "downshift", auth);
  const response = await githubClient.getPullRequests();
  const monthlySums = convertPullRequestsToMonthlySums(response.data);
  monthlySums.created = padMissingMonths(monthlySums.created);
  monthlySums.closed = padMissingMonths(monthlySums.closed);
  return {
    statusCode: STATUSES.OK,
    headers: {
      "Content-Type": CONTENT_TYPES.json,
    },
    body: stringify(monthlySums),
  };
}
