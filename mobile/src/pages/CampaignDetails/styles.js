import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const screenHeight = Math.round(Dimensions.get('window').height);

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const DetailsContainer = styled.View`
  height: 100%;
  margin-bottom: 10px;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px 20px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background: #eee;
`;

export const CampaignImage = styled.Image`
  width: 100%;
  max-height: 250px;
`;

export const CampaignContainer = styled.ScrollView`
  flex: 1;
  background: rgba(68, 143, 179, 0.15);
`;

export const CampaignTitle = styled.Text`
  padding: 0 20px;
  margin: 10px 0 5px;
  font-size: 24px;
  letter-spacing: 0.5px;
  font-family: Champagne;
  text-align: center;
`;

export const CampaignEntity = styled.Text`
  padding: 0 20px;
  margin: 0 0 5px;
  font-size: 16px;
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
  color: #121212;
  margin: 10px auto;
`;

export const CampaignDescription = styled.Text`
  font-family: Champagne;
  font-size: 18px;
  color: #121212;
  margin: 10px 30px 32px;
  padding-bottom: 32px;
  text-align: justify;
  letter-spacing: 0.3px;
  line-height: 22px;
`;

export const CampaignButton = styled.TouchableOpacity`
  padding: 8px 10px 6px;
  background: #fff;
  border-radius: 26px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  align-self: flex-end;
  position: absolute;
  right: 40px;
  top: ${screenHeight * 0.81}px;
`;

export const CampaignButtonText = styled.Text`
  padding: 4px 10px;
  font-size: 20px;
  font-family: ChampagneBold;
`;
