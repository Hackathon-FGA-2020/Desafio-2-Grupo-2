// eslint-disable-next-line import/no-extraneous-dependencies
import { EvilIcons } from '@expo/vector-icons';
import React from 'react';

import {
  CampaignContainer,
  Container,
  Header,
  DetailsContainer,
  CampaignImage,
  CampaignTitle,
  CampaignDate,
  CampaignLocation,
  CampaignTagsContainer,
  CampaignTags,
  CampaignDescription,
  CampaignButton,
  CampaignButtonText,
  CampaignEntity,
} from './styles';
import image from '~/assets/doar.png';
import Footer from '~/components/Footer';

function CampaignDetails() {
  const campaign = {
    name: 'Campanha do Agasalho de Igreja AssembleiaCristo é o Senhor',
    entity: 'Assembleia Cristo é o Senhor',
    location: 'Samambaia - DF',
    tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7'],
    file: image,
    description:
      'Nota: Textos, fotos, artes e vídeos do AssisCity estão protegidos pela legislação brasileira sobre direito autoral. Não reproduza o conteúdo do jornal em qualquer meio de comunicação, eletrônico ou impresso, sem autorização do AssisCity (contato@assiscity.com). As regras têm como objetivo proteger o investimento que a AssisCity faz na qualidade de seu jornalismo. Se precisa copiar um trecho de texto do AssisCity para uso privado, por favor solicite por email.\nNota: Textos, fotos, artes e vídeos do AssisCity estão protegidos pela legislação brasileira sobre direito autoral. Não reproduza o conteúdo do jornal em qualquer meio de comunicação, eletrônico ou impresso, sem autorização do AssisCity (contato@assiscity.com). As regras têm como objetivo proteger o investimento que a AssisCity faz na qualidade de seu jornalismo. Se precisa copiar um trecho de texto do AssisCity para uso privado, por favor solicite por email',
    date: 'ontem',
  };

  return (
    <Container>
      <CampaignContainer>
        <CampaignImage source={image} />
        <DetailsContainer>
          <Header>
            <CampaignTitle>{campaign.name}</CampaignTitle>
            <CampaignEntity>{campaign.entity}</CampaignEntity>
            <CampaignTagsContainer>
              {campaign.tags.map((tag) => (
                <CampaignTags key={tag}>{tag}</CampaignTags>
              ))}
            </CampaignTagsContainer>
          </Header>
          <CampaignDate>{campaign.date}, {campaign.location}</CampaignDate>
          <CampaignDescription>{campaign.description}</CampaignDescription>
          <Footer />
        </DetailsContainer>
      </CampaignContainer>
      <CampaignButton>
        <CampaignButtonText>Quero ajudar</CampaignButtonText>
        <EvilIcons name="heart" size={36} color="#121212" />
      </CampaignButton>
    </Container>
  );
}

export default CampaignDetails;
