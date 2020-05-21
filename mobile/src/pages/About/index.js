import React from 'react';

import {
  Container,
  Title,
  SubTitle,
  Text,
  Collaborators,
  AboutContainer,
} from './styles';

export default function About() {
  return (
    <Container>
      <AboutContainer>
        <Title>Sobre</Title>
        <Text>
          O Solidev é um aplicativo que foi desenvolvido durante o Hackathon UnB-FGA 2020.
        </Text>
        <Text>
          O Hackathon UnB-FGA 2020 teve como objetivo estimular os estudantes da
          Universidade de Brasília e colaboradores a desenvolver ferramentas que pudessem suprir
          necessidades criadas pela COVID-19, tendo como público alvo a população do Distrito
          Federal.
        </Text>
        <Text>
          Diante do cenário de proliferação da COVID-19, juntamente com a necessidade de isolamento
          social, muitas pessoas e famílias tiveram sua renda impactada. Da mesma forma, Entidades
          Filantrópicas/Beneficentes tiveram uma queda abrupta em suas doações.
        </Text>
        <Text>
          O Solidev surge como uma solução visando facilitar o relacionamento entre
          doadores e beneficiários, assim como a realização de doações, implementando funcionalidades
          que viabilizam a comunicação entre doadores e entidades beneficentes, ações solidárias como, 
          por exemplo, buscar uma doação que uma entidade não pode buscar e doações de alimentos da agricultura
          familiar.
        </Text>
        <SubTitle>Colaboradores</SubTitle>
        <Collaborators>Israel Santos</Collaborators>
        <Collaborators>João Magalhães</Collaborators>
        <Collaborators>Matheus Alves</Collaborators>
        <Collaborators>Richard Viana</Collaborators>
        <Collaborators>Robson Melo</Collaborators>
        <Collaborators>Vicente Moraes</Collaborators>
      </AboutContainer>
    </Container>
  );
}
