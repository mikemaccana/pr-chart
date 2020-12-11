import { Request, Response } from "../../shared/architect-types";
import { STATUSES, CONTENT_TYPES, stringify, log } from "../../shared/utils";
import {
  convertPullRequestsToMonthlySums,
  GithubClient,
} from "./get-pull-requests";

export async function handler(request: Request): Promise<Response> {
  const githubClient = new GithubClient("downshift-js", "downshift");
  const response = await githubClient.getPullRequests();
  const monthlySum = convertPullRequestsToMonthlySums(response.data);
  return {
    statusCode: STATUSES.OK,
    headers: {
      "Content-Type": CONTENT_TYPES.json,
    },
    body: stringify(monthlySum),
  };
}
