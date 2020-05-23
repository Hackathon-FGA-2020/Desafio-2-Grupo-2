import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import image from '~/assets/israel.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native';

import {
  ProfileContainer,
  Container,
  Logo,
  ProfileTitle,
  ProfileEmail,
  ProfileAmount,
  InsertImage,
  Button,
  ButtonIcon,
  TextButton,
  ProfileDescription,
  ProfileButton,
  ProfileButtonText,
  ButtonsContainer,
  Donation,
  DonationsContainer,
  DeliveryButton,
  ButtonText,
} from './styles';
import api from '~/services/api';
import { useSelector } from 'react-redux';

export default function Profiles() {
  const { profile } = useSelector((state) => state.user);

  return (
    <Container>
      <Logo source={profile.path} />
      <ProfileContainer>
        <ProfileTitle>{profile.name}</ProfileTitle>
        <ProfileEmail>{profile.email}</ProfileEmail>
        <DonationsContainer>
          <Donation>
            <ButtonIcon onPress={() => {}}>
              <Ionicons name="ios-heart" size={36} color="#fff" />
            </ButtonIcon>
            <ProfileAmount>
              <Text>3</Text>
            </ProfileAmount>
            <Text>Doações</Text>
          </Donation>
          <Donation>
            <ButtonIcon onPress={() => {}}>
              <MaterialCommunityIcons
                name="truck-delivery"
                size={36}
                color="#fff"
              />
            </ButtonIcon>
            <ProfileAmount>
              <Text>3</Text>
            </ProfileAmount>
            <Text>Entregas</Text>
          </Donation>
        </DonationsContainer>
      </ProfileContainer>
      <DeliveryButton>
        <ButtonText>Buscar entregas</ButtonText>
      </DeliveryButton>
    </Container>
  );
}
