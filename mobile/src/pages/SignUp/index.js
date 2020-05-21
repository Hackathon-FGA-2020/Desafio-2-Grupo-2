import { useNavigation, useRoute } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import * as ImagePicker from 'expo-image-picker';
import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import {
  SubText,
  SubTextButton,
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
import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { userType } = params;

  const [file, setFile] = useState(null);

  const formRef = useRef(null);

  function handleSubmit({ name, email, password }) {
    console.tron.log(file);
    if (!file) {
      Alert.alert(
        'Atenção',
        'A imagem é obrigatória no cadastro, para a sua segurança'
      );
    } else {
      dispatch(signUpRequest(file, name, email, password, userType));
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

  function navigateToSignIn() {
    navigate('User', { screen: 'SignIn' });
  }

  return (
    <Container>
      <Title>Então basta preencher os campos</Title>
      <FormContainer>
        <Logo />
        <AvatarButton onPress={pickImage}>
          <Avatar source={{ uri: file?.uri }} />
          <AvatarButtonText>Adicionar uma foto</AvatarButtonText>
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
        <SubTextButton onPress={navigateToSignIn}>
          <SubText>Já possui conta?</SubText>
        </SubTextButton>
        <Button onPress={() => formRef.current.submitForm()}>
          <TextButton>Vamos lá</TextButton>
        </Button>
      </FormContainer>
      <Footer />
    </Container>
  );
}
