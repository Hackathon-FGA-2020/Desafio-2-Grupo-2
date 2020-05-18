import { Alert } from 'react-native';
import { call, put, takeLatest, all } from 'redux-saga/effects';

import {
  createCampaignSuccess,
  updateCampaignSuccess,
  campaignFailure,
} from './actions';
import api from '~/services/api';

export function* createCampaign({ payload }) {
  try {
    const {
      name,
      description,
      fullDescription,
      tags,
      files,
    } = payload.campaign;

    const formData = new FormData();

    formData.append('name', name);
    formData.append('description', description);
    formData.append('full_description', fullDescription);
    formData.append('tags', tags);
    formData.append('files', files);

    yield call(api.post, 'campaigns', formData);

    yield put(createCampaignSuccess());
  } catch (err) {
    Alert.alert(
      'Erro!',
      'Erro durante a criação da campanha, verifique os dados'
    );

    yield put(campaignFailure());
  }
}

export function* updateCampaign({ payload }) {
  try {
    const {
      id,
      name,
      description,
      fullDescription,
      tags,
      files,
    } = payload.campaign;

    const formData = new FormData();

    formData.append('name', name);
    formData.append('description', description);
    formData.append('full_description', fullDescription);
    formData.append('tags', tags);
    formData.append('files', files);

    yield call(api.post, `campaigns/${id}`, formData);

    yield put(updateCampaignSuccess());
  } catch (err) {
    Alert.alert(
      'Erro!',
      'Erro durante a atualização da campanha, verifique os dados'
    );

    yield put(campaignFailure());
  }
}

export default all([
  takeLatest('@campaign/CREATE_CAMPAIGN_REQUEST', createCampaign),
  takeLatest('@campaign/UPDATE_CAMPAIGN_REQUEST', updateCampaign),
]);
