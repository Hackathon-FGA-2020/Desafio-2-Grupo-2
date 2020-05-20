// eslint-disable-next-line import/no-extraneous-dependencies
import { EvilIcons } from '@expo/vector-icons';
import React from 'react';

import {
  Container,
  Logo,
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
} from './styles';
import image from '~/assets/doar.png';
import Footer from '~/components/Footer';

export default function Campaigns() {
  const campaign = {
    name: 'Campanha do Agasalho de Igreja AssembleiaCristo é o Senhor',
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
  return (
    <Container>
      <CampaignsList
        vertical
        data={campaigns}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <>
            {index === 0 && <Logo>Solidarte</Logo>}
            <CampaignItem>
              <CampaignImage source={item.file} />
              <CampaignTitle>{item.name}</CampaignTitle>
              <CampaignLocation>{item.location}</CampaignLocation>
              <CampaignTagsContainer>
                {item.tags.map((tag) => (
                  <CampaignTags key={tag}>{tag}</CampaignTags>
                ))}
              </CampaignTagsContainer>
              <CampaignMore>
                <CampaignDate>{item.date}</CampaignDate>
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
