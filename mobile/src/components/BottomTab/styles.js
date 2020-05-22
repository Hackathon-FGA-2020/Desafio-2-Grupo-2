import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

const screenHeight = Math.round(Dimensions.get('screen').height);

export const Wrapper = styled(SafeAreaView)`
  position: absolute;
  bottom: ${Platform.OS === 'ios' ? 10 : 0}px;
  padding: 0 60px 10px;
  width: 100%;
  margin: 0 auto 10px;
  background: transparent;
  opacity: ${(props) => (props.isKeyboardVisible ? '0' : '1')};
`;

export const Container = styled.View`
  background: #448fb3;
  border-radius: 25px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const MainButton = styled(RectButton)`
  width: 66px;
  height: 66px;
  border-radius: 33px;
  background: #d4da49;
  align-items: center;
  justify-content: center;
`;

export const SideButton = styled.TouchableOpacity`
  height: 54px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;
