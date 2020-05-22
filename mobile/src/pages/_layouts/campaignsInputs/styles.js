import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #eee;
  padding: 25px;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #121212;
  margin: 30px auto 30px;
  font-family: Champagne;
  text-align: center;
`;

export const Instruction = styled.View`
  font-size: 24;
  padding-bottom: 15;
  font-family: Champagne;
`;

export const FormContainer = styled.View`
  background: #fff;
  padding: 30px 20px;
  width: 100%;
  margin: 20px auto 50px;
  border-radius: 10px;
`;

export const SubTitles = styled.Text`
  font-size: 18px;
  letter-spacing: 0.3px;
  font-family: Champagne;
  margin: 15px 20px 0;
`;

export const UploadAvatarButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  border-width: 1px;
  border-color: #aaa;
  border-radius: 30px;
  height: 40px;
  border-color: ${(props) => (props.error ? '#FB4C4D' : 'rgba(0, 0, 0, 0.2)')};
`;

export const UploadAvatarText = styled.Text`
  color: black;
  font-size: 20px;
  margin: 0 10px;
  font-family: ChampagneBold;
`;

export const CreateButton = styled(RectButton)`
  background: #1671a7;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 0 25%;
  padding: 10px;
  border-radius: 30px;
  margin-top: 10px;
`;

export const CreateButtonText = styled.Text`
  color: #fff;
  font-size: 22px;
  font-family: ChampagneBold;
  letter-spacing: 0.6px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  margin: 5px auto;
  border-radius: 4px;
`;