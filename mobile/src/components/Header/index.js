// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import {
  useNavigation,
  useRoute,
  DrawerActions,
} from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';

import {
  Wrapper,
  WrapperSign,
  ButtonGoBack,
  ButtonLogo,
  Logo,
  Title,
  MenuButton,
} from './styles';

export default function Header({ title, initialRoute }) {
  const navigation = useNavigation();
  const route = useRoute();
  // console.tron.log(route);

  function navigateToBack() {
    navigation.goBack();
  }
  function navigateToAbout() {
    navigation.navigate('About');
  }

  function toggleMenu() {
    navigation.dispatch(DrawerActions.toggleDrawer());
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
        {title ? (
          <Title>{title}</Title>
        ) : (
          <>
            {route.name !== 'Sign' && route.name !== 'ChooseUserType' ? (
              <ButtonLogo onPress={navigateToAbout}>
                <Logo />
              </ButtonLogo>
            ) : (
              <Logo />
            )}
          </>
        )}
      </Container>
    );
  }

  function OthersHeader() {
    return (
      <Container>
        <MenuButton onPress={toggleMenu}>
          <Ionicons name="ios-menu" size={30} color="#fff" />
        </MenuButton>
        {title ? <Title>{title}</Title> : <Logo />}
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
