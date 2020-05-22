import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import avatar from '../../assets/a.jpg';
import campanha from '../../assets/b.png';
import {
  Container,
  Image,
  SubContainer,
  Title,
  User,
  Avatar,
  Details,
  Name,
  Description,
  GetOut,
  Leave,
} from './styles';

export default function ChatInfo() {
  return (
    <Container>
      <Image source={campanha} />
      <SubContainer>
        <Title> Participantes </Title>

        <User>
          <Avatar source={avatar} />
          <Details>
            <Name>Campanha do Agasalho</Name>
            <Description>Entidade beneficente</Description>
          </Details>
        </User>

        <User>
          <Avatar source={avatar} />
          <Details>
            <Name>Israel Carlos</Name>
            <Description>Entregador Beneficente</Description>
          </Details>
        </User>

        <User>
          <Avatar source={avatar} />
          <Details>
            <Name>Você</Name>
            <Description>Doador</Description>
          </Details>
        </User>
      </SubContainer>
      <TouchableOpacity>
        <GetOut>
          <FontAwesome5 name="sign-out-alt" size={24} color="red" />
          <Leave>Sair da conversa</Leave>
        </GetOut>
      </TouchableOpacity>
    </Container>
  );
}
