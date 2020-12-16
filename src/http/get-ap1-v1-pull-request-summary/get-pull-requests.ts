const REPO = "https://github.com//downshift";

import { Octokit } from "@octokit/rest";
import { log, ObjectLiteral } from "../../shared/utils";
import { addOrIncrement, dateStringToMonth, getNextMonth } from "./utils";

const MAX_RESULTS_PER_PAGE = 100;
export class GithubClient {
  owner: string;
  repo: string;
  octokit: Octokit;
  constructor(owner: string, repo: string, githubAuth: string) {
    this.owner = owner;
    this.repo = repo;
    this.octokit = new Octokit({
      userAgent: "Contact mike.maccana@gmail.com v1.0.0",
      auth: githubAuth,
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

export function padMissingMonths(monthlySum) {
  const paddedSum = {};
  const sortedMonths = Object.keys(monthlySum).sort();
  const firstMonth = sortedMonths[0];
  const finalMonth = sortedMonths[sortedMonths.length - 1];
  let thisMonth = firstMonth;
  let isComplete = false;
  while (!isComplete) {
    if (monthlySum.hasOwnProperty(thisMonth)) {
      paddedSum[thisMonth] = monthlySum[thisMonth];
    } else {
      paddedSum[thisMonth] = 0;
    }
    if (thisMonth === finalMonth) {
      isComplete = true;
    } else {
      thisMonth = getNextMonth(thisMonth);
    }
  }
  return paddedSum;
}

// Convert PRs from GitHub API to a map od dates
export function convertPullRequestsToMonthlySums(
  rawPullRequests: ObjectLiteral[]
) {
  // month as key, sum as data
  const CREATED_PR_SUMS = {};
  const CLOSED_PR_SUMS = {};
  rawPullRequests.forEach((rawPullRequest) => {
    const createdAtRaw = rawPullRequest.created_at;
    if (createdAtRaw) {
      const monthAndYear = dateStringToMonth(createdAtRaw);
      addOrIncrement(CREATED_PR_SUMS, monthAndYear);
    }

    const closedAtRaw = rawPullRequest.closed_at;
    if (closedAtRaw) {
      const monthAndYear = dateStringToMonth(closedAtRaw);
      addOrIncrement(CLOSED_PR_SUMS, monthAndYear);
    }
  });

  return {
    created: CREATED_PR_SUMS,
    closed: CLOSED_PR_SUMS,
  };
}
