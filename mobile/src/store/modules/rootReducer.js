import { combineReducers } from 'redux';

import auth from './auth/reducer';
import campaign from './campaign/reducer';
import user from './user/reducer';

export default combineReducers({
  auth,
  user,
  campaign,
});
