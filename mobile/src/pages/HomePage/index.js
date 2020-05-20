import React from 'react';

import {
  Container,
  Title,
  Text,
  Author,
  Button,
  TextButton,
} from './styles';

export default function HomePage() {
  return (
    <Container>
      <Title>Solidev</Title>

      <Text>
        Não espere por grandes líderes; faça você mesmo, pessoa a pessoa. Seja leal às ações pequenas porque é nelas que está a sua força.
      </Text>

      <Author>Madre Teresa de Calcutá</Author>

      <Button>
        <TextButton>Entrar</TextButton>
      </Button>
    </Container>
  );
}
