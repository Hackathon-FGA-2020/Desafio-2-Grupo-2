import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
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
  max-width: 67%;
`;

export const ChatMore = styled.View`
  align-items: flex-end;
`;

export const ChatName = styled.Text`
  width: 86%;
  color: black;
  font-size: 18px;
  font-family: ChampagneBold;
`;

export const ChatDate = styled.Text`
  font-size: 16px;
  color: black;
  margin: auto 0 0 0;
  color: grey;
  font-family: Champagne;
`;

export const CampaignTagsContainer = styled.View`
  max-width: 80%;
  margin: auto 0 0 0;
  flex-wrap: nowrap;
  overflow: hidden
  flex-direction: row;
`;

export const CampaignTags = styled.Text`
  font-family: ChampagneBold;
  color: #eee;
  padding: 2px 10px;
  background: #448fb3;
  border-radius: 12px;
  margin: 0 5px 0 0;
  font-size: 14px;
`;

export const ButtonGoBack = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  max-width: 30px;
`;