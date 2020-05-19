import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  background: #7159c1;
  padding: 10px 30px;
`;

export const Header = styled.View`
  align-items: flex-start;
  flex-direction: row;
  margin: 10px 30px;
`;

export const Divider = styled.View`
  height: ${StyleSheet.hairlineWidth}px;
  width: 100%;
  background: rgba(255, 255, 255, 0.3);
  margin: 0 auto;
`;

export const UserAvatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: #eee;
  border-width: 1px;
  border-color: #ccc;

  margin: 0 30px 10px 0;
`;

export const ImageButton = styled.TouchableOpacity`
  width: 100%;
  max-height: 300px;
  height: 100%;
`;

export const CampaignImage = styled.Image`
  width: 100%;
  max-height: 300px;
  height: 100%;
  margin: 0 auto;
  border-radius: 6px;
`;

export const UserDetails = styled.View`
  align-items: flex-start;
`;

export const UserName = styled.Text`
  margin: 5px 0;
  color: #eee;
  font-size: 16px;
`;

export const UserLocation = styled.Text`
  color: #eee;
`;

export const TextInput = styled(Input).attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.7)',
})`
  width: 100%;
  text-align: center;
  margin: 10px auto 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin: 5px 0;
  padding: 5px 20px;
`;

export const TagInput = styled(Input).attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.7)',
})`
  align-self: flex-start;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 0 20px;
  margin: 5px;
`;

export const Button = styled.TouchableOpacity`
  margin: 15px auto;
  padding: 5px 30px;
  background: #eee;
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  font-size: 26px;
  font-family: MontserratMedium;
  color: #7159c1;
`;
