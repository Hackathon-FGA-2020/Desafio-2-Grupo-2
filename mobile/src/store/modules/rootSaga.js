import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import campaign from './campaign/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  return yield all([auth, user, campaign]);
}
