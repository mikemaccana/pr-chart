const REPO = "https://github.com//downshift";

import { Octokit } from "@octokit/rest";
import { log, ObjectLiteral } from "../../shared/utils";
import { addOrIncrement, dateStringToMonth } from "./utils";

const MAX_RESULTS_PER_PAGE = 100;
export class GithubClient {
  owner: string;
  repo: string;
  octokit: Octokit;
  constructor(owner: string, repo: string) {
    this.owner = owner;
    this.repo = repo;
    this.octokit = new Octokit({
      userAgent: "Contact mike.maccana@gmail.com v1.0.0",
    });
  }

  public getPullRequests() {
    // https://octokit.github.io/rest.js/v18#pulls-list
    return this.octokit.pulls.list({
      owner: this.owner,
      repo: this.repo,
      per_page: MAX_RESULTS_PER_PAGE,
    });
  }
}

// Convery PRs from GitHub API to a map od dates
export function convertPullRequestsToMonthlySums(
  rawPullRequests: ObjectLiteral[]
) {
  // month as key, sum as data
  const CREATED_PR_SUMS = {};
  const UPDATED_PR_SUMS = {};
  rawPullRequests.forEach((rawPullRequest) => {
    const createdAtRaw = rawPullRequest.created_at;
    if (createdAtRaw) {
      const monthAndYear = dateStringToMonth(createdAtRaw);
      addOrIncrement(CREATED_PR_SUMS, monthAndYear);
    }

    const closedAtRaw = rawPullRequest.closed_at;
    if (closedAtRaw) {
      const monthAndYear = dateStringToMonth(closedAtRaw);
      addOrIncrement(UPDATED_PR_SUMS, monthAndYear);
    }
  });

  return {
    created: CREATED_PR_SUMS,
    updated: UPDATED_PR_SUMS,
  };
}
