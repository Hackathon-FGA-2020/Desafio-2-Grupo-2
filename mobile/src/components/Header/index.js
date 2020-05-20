// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';

import { Wrapper, Logo, Title } from './styles';

export default function Header({ title, initialRoute }) {
  const navigation = useNavigation();
  const route = useRoute();

  function navigateToBack() {
    navigation.goBack();
  }

  function HomeHeader() {
    return (
      <Wrapper>
        {title ? <Title>{title}</Title> : <Logo>Solidarte</Logo>}
      </Wrapper>
    );
  }

  function OthersHeader() {
    return (
      <Wrapper>
        <Ionicons
          name="ios-arrow-back"
          onPress={navigateToBack}
          size={30}
          color="#448FB3"
        />
        {title ? <Title>{title}</Title> : <Logo>Solidarte</Logo>}
      </Wrapper>
    );
  }

  return <>{initialRoute === route.name ? <HomeHeader /> : <OthersHeader />}</>;
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  initialRoute: PropTypes.string.isRequired,
};
