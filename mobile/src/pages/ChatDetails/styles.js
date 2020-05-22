import { lighten, darken } from 'polished';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import TextInput from '~/components/Input';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-bottom: 60px;
`;

export const Campaign = styled.View`
  width: 85%;
  background: rgba(40, 93, 118, 0.15);
  height: 50px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 5px 20px 5px 5px;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
`;

export const CampaignImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;
export const CampaignName = styled.Text`
  font-family: ChampagneBold;
  font-size: 18px;
`;

export const MessagesList = styled.FlatList`
  width: 100%;
  padding: 20px;
`;

export const MessagesItem = styled.View`
  margin: 5px 5px;
  padding: 5px 20px;
  background: ${(props) =>
    props.myMessage ? darken(0.1, '#448fb3') : darken(0.15, '#d4da49')};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: ${(props) => (props.myMessage ? '0' : 15)}px;
  border-bottom-left-radius: ${(props) => (!props.myMessage ? '0' : 15)}px;
  align-self: ${(props) => (props.myMessage ? 'flex-end' : 'flex-start')};
`;

export const MessagesText = styled.Text`
  font-size: 16px;
  font-family: ChampagneBold;
  color: #eee;
`;

export const FormContainer = styled.View`
  width: 100%;
  padding: 15px 10px;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: space-between;
`;

export const StyledInput = styled(TextInput)`
  width: 85%;
  max-height: 45px;
`;

export const ButtonSend = styled(TouchableOpacity)``;
