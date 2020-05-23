// eslint-disable-next-line import/no-extraneous-dependencies
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { formatDate } from '~/util/formatDate.js';
import {
  Container,
  CampaignsList,
  CampaignItem,
  CampaignImage,
  CampaignTitle,
  CampaignDate,
  CampaignLocation,
  CampaignTagsContainer,
  CampaignTags,
  CampaignMore,
  CampaignButton,
  CampaignContainerButton,
  CampaignEntity,
} from './styles';
import image from '~/assets/doar.png';
import Footer from '~/components/Footer';
import api from '~/services/api';

export default function Campaigns() {
  const navigation = useNavigation();
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    async function loadCampaigns() {
      const response = await api.get('campaigns');

      const data = response.data.map(campaign => ({
        ...campaign,
        date: formatDate(campaign.updatedAt)
      }))

      setCampaigns(data);
    }
    loadCampaigns();
  }, [])



  function navigateToCampaign(id) {
    navigation.navigate('CampaignDetails', { id });
  }
  console.tron.log(campaigns)
  return (
    <Container>
      <CampaignsList
        vertical
        data={campaigns}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <>
            <CampaignItem>
              <CampaignContainerButton
                onPress={() => navigateToCampaign(item.id)}>
                <CampaignImage source={{ uri: item.file.url }} />
                <CampaignTitle>{item.name}</CampaignTitle>
                <CampaignEntity>{item.campaignCreator.name}</CampaignEntity>
                <CampaignTagsContainer>
                  {item.tags.map((tag) => (
                    <CampaignTags key={tag}>{tag}</CampaignTags>
                  ))}
                </CampaignTagsContainer>
              </CampaignContainerButton>
              <CampaignMore>
                <CampaignDate>{item.date}, {item.location}</CampaignDate>
                <CampaignButton>
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
