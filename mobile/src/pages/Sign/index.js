import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  Container,
  SubContainer,
  Title,
  Button,
  ButtonText,
} from '~/pages/_layouts/Sign/styles';

import { BackgroundImage } from './styles';

export default function SignIn() {
  const { navigate } = useNavigation();

  function navigateTo(page) {
    navigate(page);
  }

  return (
    <>
      <BackgroundImage />
      <Container>
        <SubContainer>
          <Title style={{ color: '#fff' }}>
            Parece que você não está conectado
          </Title>
          <Title style={{ color: '#fff' }}>O que deseja?</Title>
        </SubContainer>
        <SubContainer>
          <Button primary onPress={() => navigateTo('ChooseUserType')}>
            <ButtonText>Me cadastrar</ButtonText>
          </Button>
          <Button onPress={() => navigateTo('SignIn')}>
            <ButtonText primary>Já tenho uma conta</ButtonText>
          </Button>
        </SubContainer>
      </Container>
    </>
  );
}
