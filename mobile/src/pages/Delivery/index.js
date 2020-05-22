// eslint-disable-next-line import/no-extraneous-dependencies
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Modal from 'react-native-modal';

import {
  Container,
  CampaignsList,
  CampaignItem,
  CampaignImage,
  CampaignTitle,
  ImagesContainer,
  CampaignDate,
  CampaignLocation,
  CampaignTagsContainer,
  CampaignTags,
  CampaignMore,
  CampaignButton,
  ButtonText,
  ModalContainer,
  ModalContent,
  ModalImage,
  ModalButtonsContainer,
  ModalBackButton,
  ModalConfirmButton,
  ModalButtonsText,
  ModalTitleText,
  ConfirmarText,
  ModalDescriptionText,
  CampaignEntity,
  CampaignDelivery,
} from './styles';
import avatar from '~/assets/avatar.png';
import image from '~/assets/doar.png';
import Footer from '~/components/Footer';

export default function Campaigns() {
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);
  const deviceWidth = Dimensions.get('window').width;

  const campaign = {
    name: 'Campanha do Agasalho',
    entity: 'Igreja Assembleia Cristo é o Senhor',
    delivery: 'Ceilândia Norte para Samamabaia',
    location: 'Samambaia - DF',
    tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7'],
    file: image,
    date: 'ontem',
  };
  const campaigns = [
    {
      id: 1,
      ...campaign,
    },
    {
      id: 2,
      ...campaign,
    },
  ];

  function navigateToCampaign(id) {
    navigation.navigate('CampaignDetails', { id });
  }

  function toggleModal() {
    setModalVisible(!isModalVisible);
  }

  return (
    <Container>
      <CampaignsList
        vertical
        data={campaigns}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <>
            <Modal
              style={{ margin: 0 }}
              deviceWidth={deviceWidth}
              isVisible={isModalVisible}>
              <ModalContainer>
                <ModalContent>
                  <ModalTitleText>
                    Campanha do Agasalho de Igreja AssembleiaCristo é o Senhor
                  </ModalTitleText>
                  <ModalImage source={image} />
                  <ConfirmarText>Confirmar ajuda?</ConfirmarText>
                  <ModalDescriptionText>
                    Ao confirmar você entrará em contato com essa entidade
                    beneficente.
                  </ModalDescriptionText>
                  <ModalButtonsContainer>
                    <ModalBackButton onPress={toggleModal}>
                      <ModalButtonsText>Voltar</ModalButtonsText>
                    </ModalBackButton>
                    <ModalConfirmButton onPress={toggleModal}>
                      <ModalButtonsText>Confirmar</ModalButtonsText>
                      <EvilIcons name="heart" size={36} color="#fff" />
                    </ModalConfirmButton>
                  </ModalButtonsContainer>
                </ModalContent>
              </ModalContainer>
            </Modal>
            <CampaignItem>
              <ImagesContainer onPress={() => navigateToCampaign(item.id)}>
                <CampaignImage source={avatar} />
                <CampaignImage source={item.file} />
              </ImagesContainer>
              <CampaignTitle>{item.name}</CampaignTitle>
              <CampaignDelivery>{item.delivery}</CampaignDelivery>
              <CampaignEntity>{item.entity}</CampaignEntity>
              <CampaignTagsContainer>
                {item.tags.map((tag) => (
                  <CampaignTags key={tag}>{tag}</CampaignTags>
                ))}
              </CampaignTagsContainer>
              <CampaignMore>
                <CampaignDate>{item.date}, {item.location}</CampaignDate>
                <CampaignButton onPress={toggleModal}>
                  <ButtonText>Quero ajudar</ButtonText>
                  <EvilIcons name="heart" size={36} color="#121212" />
                </CampaignButton>
              </CampaignMore>
            </CampaignItem>
            {index === campaigns.length - 1 && <Footer />}
          </>
        )}
      />
    </Container>
  );
}
