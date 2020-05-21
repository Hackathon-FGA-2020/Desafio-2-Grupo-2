import { useRoute } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import * as ImagePicker from 'expo-image-picker';
import React, { useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import {
  Container,
  Title,
  Label,
  FormContainer,
  Button,
  TextButton,
  Logo,
  AvatarButton,
  AvatarButtonText,
  Avatar,
} from '../_layouts/auth/styles';
import Footer from '~/components/Footer';
import TextInput from '~/components/Input';
import { ErrorText } from '~/components/Input/styles';
import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const loading = useSelector((state) => state.auth.loading);

  const dispatch = useDispatch();
  const { params } = useRoute();
  const { userType } = params;
  const [errorImage, setErrorImage] = useState(null);
  const [file, setFile] = useState(null);

  const formRef = useRef(null);

  async function handleSubmit({ name, email, password }) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        file: Yup.object().required('A imagem é obrigatória').nullable(),
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().email().required('O email é obrigatório'),
        password: Yup.string().min(6).required('A senha é obrigatória'),
      });

      await schema.validate(
        { name, email, password, file },
        {
          abortEarly: false,
        }
      );

      dispatch(signUpRequest(file, name, email, password, userType));
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
          if (error.path === 'file') {
            setErrorImage(error);
          }
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  }

  async function pickImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });
      if (result.cancelled) {
        return;
      }

      const localUri = result.uri;
      const filename = localUri.split('/').pop();

      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : `image`;

      setFile({ uri: localUri, name: filename, type });
    } catch (err) {
      console.tron.log(err);
    }
  }

  return (
    <Container>
      <Title>Então basta preencher os campos</Title>
      <FormContainer>
        <Logo />
        <AvatarButton onPress={pickImage}>
          <Avatar source={{ uri: file?.uri }} error={!!errorImage} />
          <AvatarButtonText>Adicionar uma foto</AvatarButtonText>
          {errorImage && <ErrorText>{errorImage.message}</ErrorText>}
        </AvatarButton>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Label>Nome</Label>
          <TextInput name="name" autoCorrect={false} />
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
