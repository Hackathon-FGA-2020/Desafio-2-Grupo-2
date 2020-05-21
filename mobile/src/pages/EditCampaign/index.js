/* eslint-disable import/no-extraneous-dependencies */
import { Entypo } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import * as ImagePicker from 'expo-image-picker';
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import image from '~/assets/doar.png';
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
} from '~/pages/_layouts/campaignsInputs/styles';
import api from '~/services/api';
import { updateCampaignRequest } from '~/store/modules/campaign/actions';

export default function EditCampaign() {
  const formRef = useRef(null);
  const route = useRoute();
  const { id } = route;

  const campaign = {
    name: 'Campanha do Agasalho de Igreja AssembleiaCristo é o Senhor',
    location: 'Samambaia - DF',
    tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7'].join(
      ', '
    ),
    description:
      'Nota: Textos, fotos, artes e vídeos do AssisCity estão protegidos pela legislação brasileira sobre direito autoral. Não reproduza o conteúdo do jornal em qualquer meio de comunicação, eletrônico ou impresso, sem autorização do AssisCity (contato@assiscity.com). As regras têm como objetivo proteger o investimento que a AssisCity faz na qualidade de seu jornalismo. Se precisa copiar um trecho de texto do AssisCity para uso privado, por favor solicite por email.\nNota: Textos, fotos, artes e vídeos do AssisCity estão protegidos pela legislação brasileira sobre direito autoral. Não reproduza o conteúdo do jornal em qualquer meio de comunicação, eletrônico ou impresso, sem autorização do AssisCity (contato@assiscity.com). As regras têm como objetivo proteger o investimento que a AssisCity faz na qualidade de seu jornalismo. Se precisa copiar um trecho de texto do AssisCity para uso privado, por favor solicite por email',
    file: image,
    date: 'ontem',
  };
  const dispatch = useDispatch();

  const [errorImage, setErrorImage] = useState(null);
  const [file, setFile] = useState(null);

  // useEffect(() => {
  //   async function loadCampaign() {
  //     const response = await api.get(`campaigns/9`);

  //     formRef.current.setData(response.data);
  //   }

  //   loadCampaign();
  // }, [id]);

  async function handleSubmit(data) {
    try {
      setErrorImage(null);
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        file: Yup.object().required('A imagem é obrigatória').nullable(),
        name: Yup.string().required('O nome da campanha é obrigatório'),
        description: Yup.string().required('A descrição é obrigatória'),
        tags: Yup.array().required('É necessário adicionar pelo menos 1 tag'),
      });
      const compaign = {
        ...data,
        tags: data?.tags?.split(',').map((tag) => tag.trim()),
        file,
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
      <Title>Basta substituir os campos</Title>
      <FormContainer>
        <Form ref={formRef} initialData={campaign} onSubmit={handleSubmit}>
          <SubTitles>Nome da campanha</SubTitles>
          <TextInput name="name" />

          <SubTitles>Do que vocês precisam</SubTitles>
          <TextInput
            name="tags"
            placeholder="Escrever no formato: tag1, tag2, tag3 ..."
          />

          <SubTitles>Descrição</SubTitles>
          <TextInput name="description" multiline numberOfLines={5} />

          <SubTitles>Imagem</SubTitles>
          <UploadAvatarButton onPress={pickImage} error={errorImage}>
            <Entypo name="upload" size={24} color="black" />
            <UploadAvatarText>Enviar</UploadAvatarText>
          </UploadAvatarButton>
          {errorImage && <ErrorText>{errorImage.message}</ErrorText>}
          <CreateButton onPress={() => formRef.current.submitForm()}>
            <CreateButtonText>Criar</CreateButtonText>
          </CreateButton>
        </Form>
      </FormContainer>
      <Footer />
    </Container>
  );
}
