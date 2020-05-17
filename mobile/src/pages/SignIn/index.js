import { Form } from '@unform/mobile';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import {
  Container,
  Background,
  Title,
  Label,
  FormContainer,
  TextInput,
  Button,
  TextButton,
} from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Background />
      <FormContainer
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        }}>
        <Title>Login</Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Label>E-mail</Label>
          <TextInput
            name="email"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Label>Senha</Label>
          <TextInput name="password" secureTextEntry />
        </Form>
        <Button onPress={() => formRef.current.submitForm()}>
          <TextButton>Entrar</TextButton>
        </Button>
      </FormContainer>
    </Container>
  );
}
