import { Alert } from 'react-native';
import { call, put, takeLatest, all } from 'redux-saga/effects';

import { signInSuccess, signFailure, signUpSuccess } from './actions';
import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { user, token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(user, token));
  } catch (err) {
    Alert.alert('Erro!', 'Erro de autenticação, verifique seus dados');

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, userType } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      user_type: userType,
    });

    yield put(signUpSuccess());
  } catch (err) {
    Alert.alert('Erro!', 'Erro durante o registro, verifique seus dados');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
