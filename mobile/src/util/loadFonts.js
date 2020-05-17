import * as Font from 'expo-font';

async function loadFont() {
  await Font.loadAsync({
    Montserrat: require('~/assets/fonts/Montserrat-Regular.ttf'),

    MontserratMedium: require('~/assets/fonts/Montserrat-Medium.ttf'),
  });
}

export default loadFont;
