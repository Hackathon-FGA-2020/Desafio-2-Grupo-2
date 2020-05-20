import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import BottomTab from './components/BottomTab';
import Header from './components/Header';
import CampaignDetails from './pages/CampaignDetails';
import Campaigns from './pages/Campaigns';
import Chat from './pages/Chat';
import SignIn from './pages/SignIn';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function CampaignScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Campaigns"
      screenOptions={{ header: () => <Header initialRoute="Campaigns" /> }}>
      <Stack.Screen name="Campaigns" component={Campaigns} />
      <Stack.Screen name="CampaignDetails" component={CampaignDetails} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBar={(props) => <BottomTab {...props} />}>
      <Tab.Screen name="SignIn" component={SignIn} />
      <Tab.Screen name="Dashboard" component={CampaignScreens} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
}
