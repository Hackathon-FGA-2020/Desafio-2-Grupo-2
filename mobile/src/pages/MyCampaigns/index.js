import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import {
  Container,
  ChatsList,
  ChatItem,
  ChatImage,
  ChatName,
  ChatDate,
  ChatDetails,
  CampaignTags,
  CampaignTagsContainer,
  ButtonGoBack,
  ChatMore,
} from './styles';
import image from '~/assets/doar.png';
import Footer from '~/components/Footer';

export default function Campaign() {
  const navigation = useNavigation();
  const campaign = {
    file: image,
    name: 'Campanha do Agasalho para Crianças',
    date: 'ontem',
    tags: ['Cobertor', 'Agasalho', 'Meias', 'Travesseiros'],
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

  function navigateToChat(id) {
    navigation.navigate('ChatDetails', { id });
  }

  function navigateToBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <ChatsList
        vertical
        data={campaigns}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <>
            <ChatItem onPress={() => navigateToChat(item.id)}>
              <ChatImage source={item.file} />
              <ChatDetails>
                <ChatName numberOfLines={1}>{item.name}</ChatName>
                <CampaignTagsContainer>
                  {item.tags.map((tag, index) => (
                    <View key={index}>
                      <>
                        {index < 2 && (
                          <CampaignTags key={tag}>{tag}</CampaignTags>
                        )}
                      </>
                    </View>
                  ))}
                </CampaignTagsContainer>
              </ChatDetails>
              <ChatMore>
                <ButtonGoBack onPress={navigateToBack}>
                  <Ionicons name="md-more" size={30} color="#448FB3" />
                </ButtonGoBack>
                <ChatDate>{item.date}</ChatDate>
              </ChatMore>
            </ChatItem>
            {index === campaigns.length - 1 && <Footer />}
          </>
        )}
      />
    </Container>
  );
}
