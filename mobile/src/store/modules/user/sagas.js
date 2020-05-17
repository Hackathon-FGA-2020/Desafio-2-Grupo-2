import { Alert } from 'react-native';
import { call, put, takeLatest, all } from 'redux-saga/effects';

import { updateProfileSuccess, updateProfileFailure } from './actions';
import api from '~/services/api';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword && rest),
    };

    const response = yield call(api.put, 'users', {
      profile,
    });

    const { ...user } = response.data;

    yield put(updateProfileSuccess(user));
  } catch (err) {
    Alert.alert(
      'Erro!',
      'Parece que ocorreu um erro ao atualizar o perfil, verifique seus dados!'
    );

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
