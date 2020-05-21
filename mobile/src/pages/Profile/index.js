import { EvilIcons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import image from '~/assets/israel.png';

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
  Donation,
  TextButton,
  ProfileDescription,
  ProfileButton,
  ProfileButtonText,
} from './styles';

export default function Profiles() {
  const profile = {
    name: 'Israel Carlos',
    email: 'israelcarlos01@gmail.com',
    amountDonation: '3',
    donation: 'doações',
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
        <ButtonIcon onPress={() => {}}>
          <EvilIcons name="heart" size={36} color="#fff" />
        </ButtonIcon>
        <ProfileAmount>{profile.amountDonation}</ProfileAmount>
        <Donation>{profile.donation}</Donation>
      </ProfileContainer>
      <ProfileDescription>{profile.description}</ProfileDescription>
    </Container>
  );
}
