// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Wrapper, Container, MainButton, SideButton } from './styles';

export default function BottomTab({ navigation, ...rest }) {
  const { navigate } = navigation;
  const { state } = rest;
  const initialRouteName = state.routeNames.find(
    (name, index) => index === state.index
  );
  const [route, setRoute] = useState(initialRouteName);

  function navigateTo(routeName) {
    navigate(routeName);
    setRoute(routeName);
  }

  return (
    <Wrapper>
      <Container>
        <SideButton onPress={() => navigateTo('SignIn')}>
          <MaterialCommunityIcons
            name="account"
            size={28}
            color={route === 'SignIn' ? '#fff' : 'rgba(255, 255, 255, 0.6)'}
          />
        </SideButton>
        <MainButton onPress={() => navigateTo('Campaign')}>
          <Ionicons
            name="ios-star"
            size={28}
            color={route === 'Campaign' ? '#285D76' : '#fff'}
          />
        </MainButton>
        <SideButton onPress={() => navigateTo('Chat')}>
          <Ionicons
            name="ios-chatbubbles"
            size={28}
            color={route === 'Chat' ? '#fff' : 'rgba(255, 255, 255, 0.6)'}
          />
        </SideButton>
      </Container>
    </Wrapper>
  );
}

BottomTab.propTypes = {
  navigation: PropTypes.PropTypes.objectOf(PropTypes.func).isRequired,
};
