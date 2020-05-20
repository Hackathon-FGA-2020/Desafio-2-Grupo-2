import { Form } from '@unform/mobile';
import * as ImagePicker from 'expo-image-picker';
import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';

import {
  Container,
  Header,
  Divider,
  UserAvatar,
  UserDetails,
  UserName,
  UserLocation,
  TagInput,
  TextInput,
  Button,
  ImageButton,
  TextButton,
  CampaignImage,
} from './styles';
import { createCampaignRequest } from '~/store/modules/campaign/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const [image, setImage] = useState({
    uri: 'https://nossacausa.com/wp-content/uploads/2017/10/dia-de-doar.png',
  });

  function handleSubmit(data) {
    const compaign = {
      ...data,
      tags: [data.tags],
      file: image,
    };
    dispatch(createCampaignRequest(compaign));
  }

  async function pickImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (result.cancelled) {
        return;
      }

      const localUri = result.uri;
      const filename = localUri.split('/').pop();

      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : `image`;

      setImage({ uri: localUri, name: filename, type });
    } catch (err) {
      console.tron.log(err);
    }
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Header>
          <UserAvatar />
          <UserDetails>
            <UserName>Entidade</UserName>
            <UserLocation>Location</UserLocation>
          </UserDetails>
        </Header>
        <Divider />
        <TextInput name="name" placeholder="Nome da Campanha" />
        <ImageButton Title="aperta" onPress={pickImage}>
          <CampaignImage source={{ uri: image.uri }} />
        </ImageButton>
        <TextInput name="description" placeholder="Descriçao breve" />
        <TextInput name="fullDescription" placeholder="Descriçao completa" />
        <TagInput name="tags" placeholder="tags" />
      </Form>
      <Button onPress={() => formRef.current.submitForm()}>
        <TextButton>Criar</TextButton>
      </Button>
    </Container>
  );
}
