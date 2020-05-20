import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import BottomTab from './components/BottomTab';
import Campaigns from './pages/Campaigns';
import Chat from './pages/Chat';
import SignIn from './pages/SignIn';
import HomePage from './pages/HomePage';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Campaign"
      tabBar={(props) => <BottomTab {...props} />}>
      <Tab.Screen name="SignIn" component={SignIn} />
      <Tab.Screen name="Campaign" component={Campaigns} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
}
