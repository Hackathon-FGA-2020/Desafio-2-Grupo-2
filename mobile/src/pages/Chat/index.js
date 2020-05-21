import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  Container,
  ChatsList,
  ChatItem,
  ChatImage,
  ChatName,
  ChatUsers,
  ChatDate,
  ChatDetails,
} from './styles';
import image from '~/assets/doar.png';
import Footer from '~/components/Footer';

export default function Chat() {
  const navigation = useNavigation();
  const chat = {
    file: image,
    name: 'Campanha do Agasalho',
    entity: 'Igreja Assembléia Cristo é o Senhor',
    date: 'ontem',
  };
  const chats = [
    {
      id: 1,
      ...chat,
    },
    {
      id: 2,
      ...chat,
    },
    {
      id: 3,
      ...chat,
    },
    {
      id: 4,
      ...chat,
    },
    {
      id: 5,
      ...chat,
    },
    {
      id: 6,
      ...chat,
    },
    {
      id: 7,
      ...chat,
    },
    {
      id: 8,
      ...chat,
    },
    {
      id: 9,
      ...chat,
    },
    {
      id: 10,
      ...chat,
    },
    {
      id: 11,
      ...chat,
    },
    {
      id: 12,
      ...chat,
    },
  ];

  function navigateToChat(id) {
    navigation.navigate('ChatDetails', { id });
  }

  return (
    <Container>
      <ChatsList
        vertical
        data={chats}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <>
            <ChatItem onPress={() => navigateToChat(item.id)}>
              <ChatImage source={item.file} />
              <ChatDetails>
                <ChatName>{item.name}</ChatName>
                <ChatUsers>{item.entity}</ChatUsers>
                <ChatDate>{item.date}</ChatDate>
              </ChatDetails>
            </ChatItem>
            {index === chats.length - 1 && <Footer />}
          </>
        )}
      />
    </Container>
  );
}