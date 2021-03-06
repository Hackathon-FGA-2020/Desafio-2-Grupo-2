// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

import { Wrapper, Container, MainButton, SideButton } from './styles';

export default function BottomTab({ navigation, ...rest }) {
  const { navigate } = navigation;
  const { state } = rest;

  const initialRouteName = state.routeNames.find(
    (name, index) => index === state.index
  );
  const screen = state.routes.find((route) => route.name === initialRouteName);
  const screenName = screen.state?.routes[screen.state.index]?.name;
  const [route, setRoute] = useState(initialRouteName);
  function navigateTo(routeFather, routeName) {
    navigate(routeFather, { screen: routeName });
    setRoute(routeFather);
  }

  function isVisible() {
    if (
      screenName === 'ChatDetails' ||
      screenName === 'SignUp' ||
      screenName === 'SignIn' ||
      screenName === 'About' ||
      screenName === 'CampaignDetails'
    ) {
      return true;
    }
    return false;
  }

  return (
    <Wrapper isVisible={isVisible()}>
      <Container>
        <SideButton onPress={() => navigateTo('User')}>
          <MaterialCommunityIcons
            name="account"
            size={28}
            color={route === 'User' ? '#061C57' : 'rgba(255, 255, 255, 0.6)'}
          />
        </SideButton>
        <MainButton onPress={() => navigateTo('Dashboard', 'Campaigns')}>
          <Ionicons
            name="ios-star"
            size={28}
            color={
              route === 'Dashboard' ? '#061C57' : 'rgba(255, 255, 255, 0.6)'
            }
          />
        </MainButton>
        <SideButton onPress={() => navigateTo('Chat', 'Chat')}>
          <Ionicons
            name="ios-chatbubbles"
            size={28}
            color={route === 'Chat' ? '#061C57' : 'rgba(255, 255, 255, 0.6)'}
          />
        </SideButton>
      </Container>
    </Wrapper>
  );
}

BottomTab.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};
