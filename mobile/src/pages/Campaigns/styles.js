import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const CampaignsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const CampaignItem = styled.View`
  padding: 20px;
  margin: 0 0 20px;
  background: rgba(68, 143, 179, 0.15);
  border-radius: 14px;
  align-items: center;
`;

export const CampaignContainerButton = styled.TouchableOpacity`
  width: 100%;
`;

export const CampaignImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 12px;
`;

export const CampaignTitle = styled.Text`
  padding: 0 20px;
  margin: 10px 0 5px;
  font-size: 20px;
  letter-spacing: 0.5px;
  font-family: Champagne;
  text-align: center;
`;

export const CampaignLocation = styled.Text`
  font-size: 16px;
  font-family: Champagne;
  text-align: center;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
`;

export const CampaignTagsContainer = styled.View`
  max-width: 90%;
  padding: 0 10px;

  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const CampaignTags = styled.Text`
  font-family: ChampagneBold;
  color: #eee;
  padding: 5px 10px;
  background: #448fb3;
  border-radius: 12px;
  margin: 5px;
`;

export const CampaignDate = styled.Text`
  font-family: Champagne;
  font-size: 18px;
`;

export const CampaignMore = styled.View`
  width: 100%;
  padding: 0 15px;
  margin: 20px 0 0;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const CampaignButton = styled.TouchableOpacity`
  padding: 8px 4px 6px;
  background: #fff;
  border-radius: 26px;

  align-items: center;
  justify-content: center;
`;
