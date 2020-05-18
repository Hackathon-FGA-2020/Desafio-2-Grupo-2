import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function campaign(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@campaign/CREATE_CAMPAIGN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@campaign/CREATE_CAMPAIGN_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@campaign/UPDATE_CAMPAIGN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@campaign/UPDATE_CAMPAIGN_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@campaign/CAMPAIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
