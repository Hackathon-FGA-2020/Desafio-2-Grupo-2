import { darken } from 'polished';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;

export const SubContainer = styled.View``;

export const Title = styled.Text`
  font-family: Champagne;
  font-size: 26px;
  max-width: 80%;
  text-align: center;
  margin: 20px;
`;

export const Button = styled.TouchableOpacity`
  background: ${(props) => (props.primary ? '#448FB3' : 'transparent')};
  border-width: 1px;
  border-color: ${(props) => (!props.primary ? '#448FB3' : 'transparent')};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const ButtonText = styled.Text`
  padding: 10px 25px;
  font-family: ChampagneBold;
  letter-spacing: 0.6px;
  color: ${(props) => (props.primary ? darken(0.1, '#448FB3') : '#eee')};
  font-size: 20px;
`;
