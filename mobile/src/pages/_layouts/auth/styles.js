import { lighten, darken } from 'polished';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const width = Math.round(Dimensions.get('window').width);

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 50px 30px;
  margin: 0px 0 20px;
  background: #eee;
`;

export const FormContainer = styled.KeyboardAvoidingView`
  background: #fff;
  padding: 50px 20px 0;
  margin: 50px auto;
  width: 100%;
  border-radius: 20px;
`;

export const Label = styled.Text`
  margin: 15px 20px 0;
  color: #074a94;
  font-size: 16px;
  font-family: Champagne;
`;

export const Title = styled.Text`
  margin: 15px auto 20px;
  text-align: center;
  font-size: 26px;
  color: #121212;
  font-family: Champagne;
`;

export const Logo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: #fff;
  border-width: 2.5px;
  border-color: rgba(112, 112, 112, 0.5);
  position: absolute;
  top: -40px;
  left: ${(width - 60) / 2 - 40}px;
`;

export const Button = styled.TouchableOpacity`
  margin: 30px auto 20px;
  padding: 5px 30px;
  background: #448fb3;
  border: 1.5px solid ${lighten(0.1, '#448fb3')};
  border-radius: 30px;
`;

export const TextButton = styled.Text`
  font-size: 26px;
  font-family: ChampagneBold;
  color: #eee;
`;

export const AvatarButton = styled.TouchableOpacity`
  align-items: center;
  margin: 10px;
`;

export const AvatarButtonText = styled.Text`
  margin: 5px 20px 0;
  color: #074a94;
  font-size: 16px;
  font-family: Champagne;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: ${lighten(0.05, '#eee')};
  border-width: 1px;
  border-color: ${(props) => (props.error ? '#FB4C4D' : darken(0.1, '#eee'))};
`;
