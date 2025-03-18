const SUMMARY_CARDS_MOCK = {
  summaryCards: [
    {
      name: "Lead Time for Changes",
      unit: "days",
      rating: "warning",
      value: {
        median: 120.5,
        mean: 145000.8,
        p90: 240.0,
        p95: 300.0,
        count: 75,
      },
      trend: {
        median: 15.3,
        mean: -20.2,
        p90: 255.0,
        p95: 320.0,
        count: 70,
      },
    },
    {
      name: "Deployment Frequency",
      unit: "/day",
      rating: "success",
      value: {
        median: 8.5,
        mean: 9.2,
        p90: 12.0,
        p95: 15.0,
        count: 90,
      },
      trend: {
        median: 2.1, // negative trend
        mean: 1.8, // negative trend
        p90: 11.5,
        p95: 14.0,
        count: 85,
      },
    },
    {
      name: "Change Failure Rate",
      unit: "%",
      rating: "danger",
      value: {
        median: 25.5,
        mean: 28.3,
        p90: 35.0,
        p95: 40.0,
        count: 60,
      },
      trend: {
        median: 30.2,
        mean: -5.4, // negative trend
        p90: -8.2, // negative trend
        p95: 42.0,
        count: 55,
      },
    },
    {
      name: "Mean Time To Restore",
      unit: "%",
      rating: "danger",
      value: {
        median: 25.5,
        mean: 28.3,
        p90: 35.0,
        p95: 40.0,
        count: 60,
      },
      trend: {
        median: 0,
        mean: 0,
        p90: 0,
        p95: 0,
        count: 0,
      },
    },
  ],
};

module.exports = {
  SUMMARY_CARDS_MOCK,
};
