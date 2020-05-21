import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';

import BottomTab from './components/BottomTab';
import Header from './components/Header';
import CampaignDetails from './pages/CampaignDetails';
import Campaigns from './pages/Campaigns';
import Chat from './pages/Chat';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

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
    </Stack.Navigator>
  );
}

function ProfileScreens() {
  const signed = true;
  return (
    <Stack.Navigator
      initialRouteName={signed ? 'SignIn' : 'Profile'}
      screenOptions={{
        cardStyle: {
          backgroundColor: '#eee',
        },
        header: () => (
          <Header title="" initialRoute={signed ? 'SignIn' : 'Profile'} />
        ),
      }}>
      <Stack.Screen name="Profile" component={Campaigns} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="User"
      tabBar={(props) => <BottomTab {...props} />}>
      <Tab.Screen name="User" component={ProfileScreens} />
      <Tab.Screen name="Dashboard" component={CampaignScreens} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
}
