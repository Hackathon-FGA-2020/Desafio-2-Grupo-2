import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken, ligthen, lighten } from 'polished';

const screenHeight = Math.round(Dimensions.get('window').height);
const width = Math.round(Dimensions.get('window').width);

export const ProfileEmail = styled.Text`
  font-size: 23px;
  font-family: Champagne;
  text-align: center;
`;
export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ProfileContainer = styled.View`
  width: 90%;
  padding: 70px 20px 30px;
  margin-top: 150px;
  border-radius: 20px;
  min-height: 50%;
  background: rgba(68, 143, 179, 0.15);
`;
export const Button = styled.TouchableOpacity`
  margin: 15px auto;
  padding: 5px 30px;
  background: #074a94;
  border-radius: 4px;
`;
export const TextButton = styled.Text`
  font-size: 26px;
  font-family: MontserratMedium;
  color: #eee;
`;
export const ProfileTitle = styled.Text`
  margin: 20px 0 5px;
  font-size: 32px;
  letter-spacing: 0.5px;
  font-family: Champagne;
  text-align: center;
`;

export const ProfileDescription = styled.Text`
  font-family: Champagne;
  font-size: 18px;
  color: #121212;
  margin: 10px 30px 32px;
  padding-bottom: 32px;
  text-align: center;
  letter-spacing: 0.3px;
  line-height: 22px;
`;

export const ProfileButton = styled.TouchableOpacity`
  padding: 8px 10px 6px;
  border-radius: 26px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  align-self: flex-end;
  position: absolute;
  right: 40px;
  top: ${screenHeight * 0.79}px;
`;

export const ProfileButtonText = styled.Text`
  padding: 4px 10px;
  font-size: 20px;
  font-family: ChampagneBold;
`;

export const Logo = styled.Image`
  margin: 0 auto;
  width: 140px;
  height: 140px;
  border-radius: 80px;
  border-color: #fff;
  border-width: 2px;
  position: absolute;
  top: 80px;
  z-index: 1;
`;

export const ButtonIcon = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin: 20px 0px;
  background: #448fb3;
  align-items: center;
  justify-content: center;
`;

export const ProfileAmount = styled.Text`
  font-size: 30px;
  letter-spacing: 0.5px;
  font-family: Champagne;
  text-align: center;
`;

export const InsertImage = styled.TouchableOpacity`
  margin: 30px auto 20px;
  padding: 20px;
  background: #448fb3;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
`;

export const DonationsAmountContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Donation = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const DonationsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DeliveryButton = styled(RectButton)`
  margin: 0 auto;
  height: 60px;
  width: 60%;
  padding: 4px 10px;
  background: ${darken(0.1, '#d4da49')};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: ChampagneBold;
  font-size: 24px;
  color: #fff;
`;
