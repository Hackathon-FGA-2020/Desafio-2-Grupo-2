// eslint-disable-next-line import/no-extraneous-dependencies
import Constants from 'expo-constants';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${Constants.statusBarHeight + 10}px 25px;
  margin-bottom: 10px;
`;

export const Logo = styled.Text`
  font-size: 32px;
  font-family: Champagne;
  color: #707070;
  margin: 0 auto;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: Champagne;
  color: #707070;
  margin: 0 auto;
`;
