import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import BottomTab from './components/BottomTab';
import Header from './components/Header';
import CampaignDetails from './pages/CampaignDetails';
import Campaigns from './pages/Campaigns';
import Chat from './pages/Chat';
import Delivery from './pages/Delivery';
import SignIn from './pages/SignIn';
// import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import ChatDetails from './pages/ChatDetails';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function CampaignScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Campaigns"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#eee',
        },
        header: () => <Header title="" initialRoute="Campaigns" />,
      }}>
      <Stack.Screen name="Campaigns" component={Campaigns} />
      <Stack.Screen name="CampaignDetails" component={CampaignDetails} />
      <Stack.Screen name="Delivery" component={Delivery} />
    </Stack.Navigator>
  );
}

function ChatScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{ header: () => <Header initialRoute="Chat" title="Mensagens"/> }}>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatDetails" component={ChatDetails} />
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
      <Tab.Screen name="Chat" component={ChatScreens} />
    </Tab.Navigator>
  );
}
