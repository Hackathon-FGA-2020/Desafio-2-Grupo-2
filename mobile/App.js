import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';
import Routes from '~/routes';
import { navigationRef } from '~/services/RootNavigation';
import { store } from '~/store';
import loadFont from '~/util/loadFonts';

export default function App() {
  const [isReady, setIsReady] = useState(true);

  if (isReady) {
    return (
      <AppLoading
        startAsync={loadFont}
        onFinish={() => setIsReady(false)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="rgba(68, 143, 179, 0.3)"
          />
          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
