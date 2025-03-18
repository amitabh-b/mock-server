const { CATEGORIES_LIST_MOCK } = require("./collectionCategoriesMocks");
const { COLLECTION_LIST_MOCK } = require("./collectionMocks");
const { LEAD_TIME_BY_CHANGES_MOCK } = require("./leadTimeByChanges");
const { SUMMARY_CARDS_MOCK } = require("./summaryCardsMock");
const { MTTR_RESPONSE_MOCK } = require("./mttrResponseMock");
const { LEAD_TIME_BREAKDOWN_MOCK } = require("./leadTimeBreakdownResponseMock");
const { LEAD_TIME_BY_STAGES_MOCK } = require("./leadTimeByStagesMock");
const { MTTR_BREAKDOWN_MOCK } = require("./mttrBreakdownResponseMock");

const PATH_TO_RESPONSE_MAP = {
  "/api/category": CATEGORIES_LIST_MOCK,
  "/api/collection": COLLECTION_LIST_MOCK,
  "/api/insights/dora/summary": SUMMARY_CARDS_MOCK,
  "/api/insights/dora/leadtime": LEAD_TIME_BY_CHANGES_MOCK,
  "/api/insights/dora/mttr": MTTR_RESPONSE_MOCK,
  "/api/insights/dora/mttr/breakdown": MTTR_BREAKDOWN_MOCK,
  "/api/insights/dora/leadtime/breakdown": LEAD_TIME_BREAKDOWN_MOCK,
  "/api/insights/dora/leadtime/stages": LEAD_TIME_BY_STAGES_MOCK,
};

module.exports = {
  PATH_TO_RESPONSE_MAP,
};
