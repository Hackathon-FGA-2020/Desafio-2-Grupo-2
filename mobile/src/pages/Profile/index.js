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

export default function Profiles() {
  const profile = {
    name: 'Israel Carlos',
    email: 'israelcarlos01@gmail.com',
    amountDonation: '3',
    amountDelivery: '5',
    file: image,
    description: 'Torne-se um doador da agricultura familiar',
  };
  return (
    <Container>
      <Logo source={image} />
      <ProfileContainer>
        <ProfileTitle>{profile.name}</ProfileTitle>
        <ProfileEmail>{profile.email}</ProfileEmail>
        <DonationsContainer>
          <Donation>
            <ButtonIcon onPress={() => {}}>
              <Ionicons name="ios-heart" size={36} color="#fff" />
            </ButtonIcon>
            <ProfileAmount>{profile.amountDonation}</ProfileAmount>
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
            <ProfileAmount>{profile.amountDonation}</ProfileAmount>
            <Text>Entregas</Text>
          </Donation>
        </DonationsContainer>
      </ProfileContainer>
      <ProfileDescription>{profile.description}</ProfileDescription>
      <DeliveryButton>
        <ButtonText>Buscar entregas</ButtonText>
      </DeliveryButton>
    </Container>
  );
}
