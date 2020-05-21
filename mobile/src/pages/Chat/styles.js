import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const ChatItem = styled.TouchableOpacity`
  padding: 8px;
  background: rgba(40, 93, 118, 0.12);
  flex-direction: row;
  margin: 0 0 8px 10px;
  border-top-left-radius: 38px;
  border-bottom-left-radius: 38px;
`;

export const ChatsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ChatImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin: 0 15px 0 0;
  background: blue;
`;

export const ChatDetails = styled.View`
  width: 76%;
`;

export const ChatName = styled.Text`
  color: black;
  font-size: 18px;
  font-family: ChampagneBold;
`;

export const ChatUsers = styled.Text`
  color: black;
  font-size: 16px;
  font-family: Champagne;
`;

export const ChatDate = styled.Text`
  font-size: 16px;
  color: black;
  margin: 0 0 0 auto;
  color: grey;
  font-family: Champagne;
`;