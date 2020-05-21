import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import React, { useRef } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

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
  const loading = useSelector((state) => state.auth.loading);

  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const formRef = useRef(null);

  async function handleSubmit({ email, password }) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().email().required('O email é obrigatório'),
        password: Yup.string().min(6).required('A senha é obrigatória'),
      });

      await schema.validate(
        { email, password },
        {
          abortEarly: false,
        }
      );

      dispatch(signInRequest(email, password));
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
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
        <Button loading={loading} onPress={() => formRef.current.submitForm()}>
          {loading ? (
            <ActivityIndicator size="small" color="#eee" />
          ) : (
              <TextButton>Vamos lá</TextButton>
            )}
        </Button>
      </FormContainer>
      <Footer />
    </Container>
  );
}
