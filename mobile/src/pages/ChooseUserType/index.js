import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  Container,
  SubContainer,
  Title,
  Button,
  ButtonText,
} from '~/pages/_layouts/Sign/styles';

import {
  BackgroundImage,
} from './styles';

export default function ChooseUserType() {
  const { navigate } = useNavigation();

  function navigateTo(param) {
    navigate('SignUp', { userType: param });
  }

  return (
    <>
      <BackgroundImage />
      <Container>
        <SubContainer>
          <Title>Antes de tudo, preciso saber</Title>
          <Title>Você quer doar ou possui um projeto beneficente?</Title>
        </SubContainer>
        <SubContainer>
          <Button primary onPress={() => navigateTo('donator')}>
            <ButtonText>Quero doar</ButtonText>
          </Button>
          <Button onPress={() => navigateTo('entity')}>
            <ButtonText primary>Tenho um projeto</ButtonText>
          </Button>
        </SubContainer>
      </Container>
    </>
  );
}
