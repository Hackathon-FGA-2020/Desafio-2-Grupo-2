// eslint-disable-next-line import/no-extraneous-dependencies
import { Entypo } from '@expo/vector-icons';
import { Form } from '@unform/mobile';
import * as ImagePicker from 'expo-image-picker';
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import Footer from '~/components/Footer';
import TextInput from '~/components/Input';
import { ErrorText } from '~/components/Input/styles';
import {
  Container,
  FormContainer,
  SubTitles,
  CreateButton,
  CreateButtonText,
  UploadAvatarButton,
  UploadAvatarText,
  Title,
  Image,
} from '~/pages/_layouts/campaignsInputs/styles';
import api from '~/services/api';
import { updateCampaignRequest } from '~/store/modules/campaign/actions';

export default function EditCampaign() {
  const formRef = useRef(null);

  const dispatch = useDispatch();

  const [errorImage, setErrorImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    async function loadCampaign() {
      const response = await api.get(`campaigns/9`);
      const { name, description, tags: allTags, file: image } = response.data;
      const tags = allTags.join(', ');
      if (!file) {
        setPreview(image);
      }
      formRef.current.setData({ name, description, tags });
    }

    loadCampaign();
  }, []);

  async function handleSubmit(data) {
    try {
      setErrorImage(null);

      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        file: Yup.object().nullable(),
        name: Yup.string(),
        description: Yup.string(),
        tags: Yup.array(),
      });

      const compaign = {
        ...data,
        tags: data?.tags?.split(',').map((tag) => tag.trim()),
        file,
        id: 9,
      };

      await schema.validate(compaign, {
        abortEarly: false,
      });

      dispatch(updateCampaignRequest(compaign));
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

      setFile({ uri: localUri, name: filename, type });
      console.tron.log(file);
    } catch (err) {
      console.tron.log(err);
    }
  }

  return (
    <Container>
      <Title>Basta preencher os campos</Title>
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <SubTitles>Nome da campanha</SubTitles>
          <TextInput name="name" />

          <SubTitles>Do que vocês precisam</SubTitles>
          <TextInput
            name="tags"
            placeholder="Escrever no formato: tag1, tag2, tag3 ..."
          />

          <SubTitles>Descrição</SubTitles>
          <TextInput name="description" />

          <SubTitles>Imagem</SubTitles>
          <UploadAvatarButton onPress={pickImage} error={errorImage}>
            <Entypo name="upload" size={24} color="black" />
            <UploadAvatarText>Enviar</UploadAvatarText>
          </UploadAvatarButton>
          {errorImage && <ErrorText>{errorImage.message}</ErrorText>}
          {file ? (
            <Image source={{ uri: file.uri }} />
          ) : (
              <Image source={{ uri: preview.url }} />
            )}
          <CreateButton onPress={() => formRef.current.submitForm()}>
            <CreateButtonText>Criar</CreateButtonText>
          </CreateButton>
        </Form>
      </FormContainer>
      <Footer />
    </Container>
  );
}
