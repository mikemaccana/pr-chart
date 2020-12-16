import { log, STATUSES } from "../../../shared/utils";
import {
  GithubClient,
  convertPullRequestsToMonthlySums,
  padMissingMonths,
} from "../get-pull-requests";
import { mockPullRequests } from "./mock-pull-requests";

import { config as dotEnvConfig } from "dotenv";

dotEnvConfig();

const githubAuth = process.env.GITHUB_AUTH;

describe(`GithubClient`, () => {
  let githubClient: GithubClient;
  beforeAll(async () => {
    githubClient = new GithubClient("downshift-js", "downshift", githubAuth);
  });

  it(`Gets a list of PRs`, async () => {
    const response = await githubClient.getPullRequests();
    expect(response.status).toEqual(STATUSES.OK);
    expect(response.data).toHaveProperty("length");
  });

  it(`Filters PRs`, async () => {
    const monthlySum = convertPullRequestsToMonthlySums(mockPullRequests);
    expect(monthlySum.created).toEqual({
      "201911": 1,
      "202005": 1,
      "202008": 1,
      "202009": 1,
      "202011": 1,
    });
    expect(monthlySum.closed).toEqual({});
  });

  it(`Pads missing data`, async () => {
    const monthlySum = convertPullRequestsToMonthlySums(mockPullRequests);
    const paddedMonthlySum = padMissingMonths(monthlySum.created);

    expect(paddedMonthlySum).toEqual({
      "201911": 1,
      "201912": 0,
      "202001": 0,
      "202002": 0,
      "202003": 0,
      "202004": 0,
      "202005": 1,
      "202006": 0,
      "202007": 0,
      "202008": 1,
      "202009": 1,
      "202010": 0,
      "202011": 1,
    });
  });
});
