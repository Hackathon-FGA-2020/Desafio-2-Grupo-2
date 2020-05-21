// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { Wrapper, WrapperSign, ButtonGoBack, ButtonLogo, Logo, Title } from './styles';

export default function Header({ title, initialRoute }) {
  const navigation = useNavigation();
  const route = useRoute();
  console.tron.log(route);
  function navigateToBack() {
    navigation.goBack();
  }
  function navigateToAbout() {
    navigation.navigate('About');
  }

  function Container({ children }) {
    return (
      <>
        {route.name === 'Sign' || route.name === 'ChooseUserType' ? (
          <WrapperSign>{children}</WrapperSign>
        ) : (
            <Wrapper>{children}</Wrapper>
          )}
      </>
    );
  }

  function HomeHeader() {
    return (
      <Container>
        {title ? <Title>{title}</Title> : <ButtonLogo onPress={navigateToAbout}><Logo>Solidarte</Logo></ButtonLogo>}
      </Container>
    );
  }

  function OthersHeader() {
    return (
      <Container>
        <ButtonGoBack onPress={navigateToBack}>
          <Ionicons name="ios-arrow-back" size={30} color="#448FB3" />
        </ButtonGoBack>
        {title ? <Title>{title}</Title> : <Logo>Solidarte</Logo>}
        <ButtonGoBack />
      </Container>
    );
  }

  return <>{initialRoute === route.name ? <HomeHeader /> : <OthersHeader />}</>;
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  initialRoute: PropTypes.string.isRequired,
};
