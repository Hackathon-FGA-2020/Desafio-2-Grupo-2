// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Form } from '@unform/core';
import React from 'react';

import {
  Container,
  Campaign,
  CampaignName,
  CampaignImage,
  MessagesList,
  MessagesItem,
  MessagesText,
  FormContainer,
  StyledInput,
  ButtonSend,
} from './styles';
import image from '~/assets/doar.png';
import Footer from '~/components/Footer';

const ChatDetails = () => {
  const messages = ['ola', 'olaaa', 'tudo bem', 'td, gostaria de ajudar'];

  return (
    <Container>
      <Campaign>
        <CampaignImage source={image} />
        <CampaignName>Campanha do Agasalho</CampaignName>
      </Campaign>
      <MessagesList
        vertical
        inverted
        data={messages}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <>
            <MessagesItem myMessage>
              <MessagesText>{item}</MessagesText>
            </MessagesItem>
            <MessagesItem myMessage={false}>
              <MessagesText>{item}</MessagesText>
            </MessagesItem>
          </>
        )}
      />
      <FormContainer>
        <Form>
          <StyledInput name="message" />
        </Form>
        <ButtonSend>
          <MaterialCommunityIcons
            name="send-circle"
            size={50}
            color="#448fb3"
          />
        </ButtonSend>
      </FormContainer>
    </Container>
  );
};

export default ChatDetails;
