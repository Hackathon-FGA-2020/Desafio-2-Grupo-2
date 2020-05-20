import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Header,
  Logo,
  CampaignsList,
  CampaignImage,
  CampaignTitle,
  CampaignDate,
  CampaignLocation,
  CampaignTagsContainer,
  CampaignTags,
  CampaignButton,
} from './styles';
import image from '~/assets/doar.png';

function CampaignDetails() {
  const navigation = useNavigation();
  const { params } = useRoute();

  const campaign = {
    name: 'Campanha do Agasalho de Igreja AssembleiaCristo é o Senhor',
    location: 'Samambaia - DF',
    tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7'],
    file: image,
    date: 'ontem',
  };

  return <Container />;
}

export default CampaignDetails;
