import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';

import BottomTab from './components/BottomTab';
import Header from './components/Header';
import About from './pages/About';
import CampaignDetails from './pages/CampaignDetails';
import Campaigns from './pages/Campaigns';
import Chat from './pages/Chat';
import ChatDetails from './pages/ChatDetails';
import ChooseUserType from './pages/ChooseUserType';
import Delivery from './pages/Delivery';
import EditCampaign from './pages/EditCampaign';
import Profile from './pages/Profile';
import Sign from './pages/Sign';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profiles from './pages/Profile';

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
      <Stack.Screen name="Campaigns" component={EditCampaign} />
      <Stack.Screen name="CampaignDetails" component={CampaignDetails} />
      <Stack.Screen name="Delivery" component={Delivery} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

function ChatScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{
        header: () => <Header initialRoute="Chat" title="Mensagens" />,
      }}>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatDetails" component={ChatDetails} />
    </Stack.Navigator>
  );
}

function ProfileScreens() {
  const signed = useSelector((state) => state.auth.signed);
  return (
    <Stack.Navigator
      initialRouteName={!signed ? 'Sign' : 'Profile'}
      screenOptions={{
        cardStyle: {
          backgroundColor: '#eee',
        },
        header: () => (
          <Header title="" initialRoute={!signed ? 'Sign' : 'Profile'} />
        ),
      }}>
      {!signed ? (
        <>
          <Stack.Screen name="Sign" component={Sign} />
          <Stack.Screen name="ChooseUserType" component={ChooseUserType} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      ) : (
        <Stack.Screen name="Profile" component={Profile} />
      )}
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBar={(props) => <BottomTab {...props} />}>
      <Tab.Screen name="User" component={ProfileScreens} />
      <Tab.Screen name="Dashboard" component={CampaignScreens} />
      <Tab.Screen name="Chat" component={ChatScreens} />
    </Tab.Navigator>
  );
}
