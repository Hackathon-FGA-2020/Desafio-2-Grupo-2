import { RectButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Wrapper = styled(SafeAreaView)`
  position: absolute;
  bottom: 0;
  padding: 0 60px 10px;
  width: 100%;
  margin: 0 auto 10px;
  background: transparent;
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

export const SideButton = styled(RectButton)`
  height: 54px;
  padding: 0 20px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;