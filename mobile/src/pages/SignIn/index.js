import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import {
  SubText,
  Container,
  Title,
  Label,
  FormContainer,
  Button,
  TextButton,
  Logo,
  SubTextButton,
} from '../_layouts/auth/styles';
import Footer from '~/components/Footer';
import TextInput from '~/components/Input';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const formRef = useRef(null);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  function navigateToSignUp() {
    navigate('User', { screen: 'SignUp' });
  }

  return (
    <Container>
      <Title>Que bom que voltou!</Title>
      <FormContainer>
        <Logo />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Label>Email</Label>
          <TextInput
            name="email"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Label>Senha</Label>
          <TextInput name="password" secureTextEntry />
        </Form>
        <SubTextButton onPress={navigateToSignUp}>
          <SubText>Ainda não possui conta?</SubText>
        </SubTextButton>
        <Button onPress={() => formRef.current.submitForm()}>
          <TextButton>Vamos lá</TextButton>
        </Button>
      </FormContainer>
      <Footer />
    </Container>
  );
}
