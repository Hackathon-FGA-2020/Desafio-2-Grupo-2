import * as Font from 'expo-font';

async function loadFont() {
  await Font.loadAsync({
    Montserrat: require('~/assets/fonts/Montserrat-Regular.ttf'),
    MontserratMedium: require('~/assets/fonts/Montserrat-Medium.ttf'),

    PleaseWriteMeASong: require('~/assets/fonts/Please-write-me-a-song.ttf'),
    
    Champagne: require('~/assets/fonts/Champagne.ttf'),
    ChampagneBold: require('~/assets/fonts/Champagne-Bold.ttf'),
  });
}

export default loadFont;
