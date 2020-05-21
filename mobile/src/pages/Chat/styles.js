import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const ChatItem = styled.View`
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
  font-size: 14px;
`;

export const ChatUsers = styled.Text`
  color: grey;
  font-size: 14px;
`;

export const ChatDate = styled.Text`
  color: black;
  margin: 0 0 0 auto;
`;