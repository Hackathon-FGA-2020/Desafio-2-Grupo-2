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
  background: rgba(40, 93, 118, 0.12);
  border-radius: 14px;
  align-items: center;
`;

export const ImagesContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: #ddd;
`;

export const CampaignImage = styled.Image`
  width: 50%;
  height: 200px;
`;

export const CampaignTitle = styled.Text`
  padding: 0 20px;
  margin: 10px 0 5px;
  font-size: 20px;
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

export const CampaignDelivery = styled.Text`
  padding: 0 20px;
  margin: 0 0 5px;
  font-size: 18px;
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
  max-width: 40%;
  font-family: Champagne;
  font-size: 18px;
`;

export const ButtonText = styled.Text`
  font-family: Champagne;
  font-size: 18px;
`;

export const CampaignMore = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 15px;
  margin: 20px 0 0;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const CampaignButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 8px 0px;
  max-width: 150px;
  background: #fff;
  border-radius: 26px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ModalContent = styled.View`
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding-bottom: 40px;
  background: #fff;
  border-radius: 24px;

  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalTitleText = styled.Text`
  padding: 20px 0px;
  margin: 0 auto;
  font-size: 24px;
  letter-spacing: 0.5px;
  font-family: Champagne;
  text-align: center;
`;

export const ConfirmarText = styled.Text`
  padding-top: 20px;
  margin: 0 auto;
  font-size: 20px;
  letter-spacing: 0.5px;
  font-family: Champagne;
  text-align: center;
`;

export const ModalDescriptionText = styled.Text`
  padding-bottom: 20px;
  margin: 0 auto;
  font-size: 20px;
  letter-spacing: 0.5px;
  font-family: Champagne;
  text-align: center;
`;

export const ModalImage = styled.Image`
  width: 70%;
  height: 200px;
  border-radius: 12px;
`;

export const ModalButtonsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
`;

export const ModalBackButton = styled(RectButton)`
  padding: 8px 14px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  max-width: 100px;
  background: #666;
  text-align: center;
`;

export const ModalConfirmButton = styled(RectButton)`
  padding: 8px 14px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 140px;
  height: 60px;
  border-radius: 24px;
  background: #448fb3;
  color: #fff;
  text-align: center;
`;

export const ModalButtonsText = styled.Text`
  font-family: ChampagneBold;
  font-size: 24px;
  color: #fff;
`;
