import { aggregateRepoTopicStats } from "./repoUtils";
import { MOCK_REPOS, MOCK_TOPIC_STATS } from "./repoMocks";

describe("`repoUtils`", () => {
  describe("`aggregateRepoTopicStats`", () => {
    it("should return object with key for each topic", () => {
      const topicStats = aggregateRepoTopicStats(MOCK_REPOS);

      expect(Array.from(Object.keys(topicStats))).toEqual(
        Object.keys(MOCK_TOPIC_STATS)
      );
    });
    it("should count single-use topics", () => {
      const topicStats = aggregateRepoTopicStats(MOCK_REPOS);

      expect(topicStats.jest.count).toBe(MOCK_TOPIC_STATS.jest.count);
    });
    it("should count multi-use topics", () => {
      const topicStats = aggregateRepoTopicStats(MOCK_REPOS);

      expect(topicStats.react.count).toBe(MOCK_TOPIC_STATS.react.count);
    });
    it("should track most recent update for single-use topics", () => {
      const topicStats = aggregateRepoTopicStats(MOCK_REPOS);

      expect(topicStats.storybook.updateTime).toStrictEqual(
        MOCK_TOPIC_STATS.storybook.updateTime
      );
    });
    it("should track most recent update for multi-use topics", () => {
      const topicStats = aggregateRepoTopicStats(MOCK_REPOS);

      expect(topicStats.jest.updateTime).toStrictEqual(
        MOCK_TOPIC_STATS.jest.updateTime
      );
    });
  });
});
