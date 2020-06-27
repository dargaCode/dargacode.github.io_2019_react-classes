import moment from "moment";
import { Repo, RepoTopicStats } from "./repoUtils";

export const MOCK_REPOS: Repo[] = [
  {
    name: "",
    // eslint-disable-next-line @typescript-eslint/camelcase
    pushed_at: "2016-08-26T21:40:06Z",
    topics: ["react", "javascript", "jest"]
  },
  {
    name: "",
    // eslint-disable-next-line @typescript-eslint/camelcase
    pushed_at: "2020-08-26T21:40:06Z",
    topics: ["javascript", "storybook", "mongodb"]
  },
  {
    name: "",
    // eslint-disable-next-line @typescript-eslint/camelcase
    pushed_at: "2018-08-26T21:40:06Z",
    topics: ["react", "javascript", "mongodb"]
  }
];

export const MOCK_REPO_TOPIC_STATS: RepoTopicStats = {
  react: { repoCount: 2, recentRepoUpdateTime: moment("2018-08-26T21:40:06Z") },
  javascript: {
    repoCount: 3,
    recentRepoUpdateTime: moment("2020-08-26T21:40:06Z")
  },
  jest: { repoCount: 1, recentRepoUpdateTime: moment("2016-08-26T21:40:06Z") },
  storybook: {
    repoCount: 1,
    recentRepoUpdateTime: moment("2020-08-26T21:40:06Z")
  },
  mongodb: {
    repoCount: 2,
    recentRepoUpdateTime: moment("2020-08-26T21:40:06Z")
  }
};
