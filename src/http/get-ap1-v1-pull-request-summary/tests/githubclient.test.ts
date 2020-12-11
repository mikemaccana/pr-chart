import { log, STATUSES } from "../../../shared/utils";
import {
  GithubClient,
  convertPullRequestsToMonthlySums,
} from "../get-pull-requests";
import { mockPullRequests } from "./mock-pull-requests";

describe(`GithubClient`, () => {
  let githubClient: GithubClient;
  beforeAll(async () => {
    githubClient = new GithubClient("downshift-js", "downshift");
  });

  it(`Gets a list or PRs`, async () => {
    const githubClient = new GithubClient("downshift-js", "downshift");
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
    expect(monthlySum.updated).toEqual({});
  });
});
