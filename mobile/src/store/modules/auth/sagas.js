import { Alert } from 'react-native';
import { call, put, takeLatest, all, delay } from 'redux-saga/effects';

import { signInSuccess, signFailure, signUpSuccess } from './actions';
import api from '~/services/api';
import { navigate } from '~/services/RootNavigation';

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
    navigate('Profile');
  } catch (err) {
    Alert.alert('Erro!', 'Erro de autenticação, verifique seus dados');

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, userType, file } = payload;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('user_type', userType);
    formData.append('file', file);

    yield call(api.post, 'solicitations', formData);

    yield put(signUpSuccess());
    navigate('SignIn');
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

export function signOut() {
  api.defaults.headers.Authorization = null;
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
