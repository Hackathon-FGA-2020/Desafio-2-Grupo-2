export function createCampaignRequest(campaign) {
  return {
    type: '@campaign/CREATE_CAMPAIGN_REQUEST',
    payload: { campaign },
  };
}

export function createCampaignSuccess() {
  return {
    type: '@campaign/CREATE_CAMPAIGN_SUCCESS',
  };
}

export function updateCampaignRequest(campaign) {
  return {
    type: '@campaign/UPDATE_CAMPAIGN_REQUEST',
    payload: { campaign },
  };
}

export function updateCampaignSuccess() {
  return {
    type: '@campaign/UPDATE_CAMPAIGN_SUCCESS',
  };
}

export function campaignFailure() {
  return {
    type: '@campaign/CAMPAIGN_FAILURE',
  };
}
