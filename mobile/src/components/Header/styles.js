// eslint-disable-next-line import/no-extraneous-dependencies
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import logo from '~/assets/Nome/Nome.png';

const width = Math.round(Dimensions.get('screen').width);

export const Wrapper = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${Constants.statusBarHeight}px 25px 0;
  padding-bottom: 30px;
  background: #eee;
`;

export const WrapperSign = styled.View`
  flex-direction: row;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  position: absolute;
  margin-top: ${Constants.statusBarHeight}px;
  margin-bottom: 40px;
  opacity: 1;
`;

export const ButtonGoBack = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 10px;
  max-width: 30px;
  margin: 0;
`;

export const ButtonLogo = styled(RectButton)`
  margin: 0 auto;
  width: 114px;
  position: absolute;
  top: 18px;
  left: ${width / 2 - 57}px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  height: 42px;
  width: 114px;
  margin: 10px auto;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: Champagne;
  color: #707070;
  margin: 0 auto;
  text-align: center;
`;

export const MenuButton = styled(RectButton)`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background: #448fb3;
  justify-content: center;
  align-items: center;
`;
