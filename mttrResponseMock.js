const MTTR_RESPONSE_MOCK = {
  rating: "success",
  median: 1.04151575e7,
  mean: 1.0145709e7,
  p90: 1.045706227e7,
  p95: 1.0457909e7,
  totalTickets: 128,
  dataPoints: [
    {
      median: 1.3339312e7,
      mean: 1.3339312e7,
      count: 16,
      p90: 1.3339312e7,
      p95: 1.3339312e7,
      startDate: "2024-09-01",
      endDate: "2024-09-30",
      stages: [
        {
          stageKey: "dummy",
          stageOrder: 0,
          median: 1.125268574e7,
          mean: 1.116672441e7,
          count: 306,
          p90: 1.126605449e7,
          p95: 1.126632462e7,
        },
      ],
    },
    {
      median: 1.0463579e7,
      mean: 1.0463579e7,
      count: 16,
      p90: 1.0463579e7,
      p95: 1.0463579e7,
      startDate: "2024-10-01",
      endDate: "2024-10-31",
      stages: [
        {
          stageKey: "dummy",
          stageOrder: 0,
          median: 1.0463579e7,
          mean: 1.0463579e7,
          count: 2,
          p90: 1.0463579e7,
          p95: 1.0463579e7,
        },
      ],
    },
    {
      median: 7442581.5,
      mean: 6634236.0,
      count: 96,
      p90: 7568295.8,
      p95: 7570836.0,
      startDate: "2024-11-01",
      endDate: "2024-11-30",
      stages: [
        {
          stageKey: "dummy",
          stageOrder: 0,
          median: 1.160914796e7,
          mean: 1.148284397e7,
          count: 32,
          p90: 1.162879082e7,
          p95: 1.162918772e7,
        },
      ],
    },
  ],
  stageBreakdown: [
    {
      stageKey: "dummy",
      stageOrder: 0,
      median: 1.11084709e7,
      mean: 1.103771579e7,
      count: 340,
      p90: 1.111947477e7,
      p95: 1.111969711e7,
    },
  ],
};

module.exports = {
  MTTR_RESPONSE_MOCK,
};
