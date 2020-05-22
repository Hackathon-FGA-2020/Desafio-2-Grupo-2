import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-left: 15;
  padding-right: 15;
`;

export const Image = styled.Image`
  margin-top: 50;
  width: auto;
  height: 250;
  border-radius: 10;
  margin-bottom: 15;
`;

export const SubContainer = styled.View`
  background-color: rgba(40, 93, 118, 0.12);
  padding-left: 15;
  padding-right: 15;
  padding-top: 10;
  border-radius: 10;
  margin-bottom: 15;
`;

export const Title = styled.Text`
  font-family: 'Champagne';
  color: black;
  font-size: 20;
  text-align: right;
  margin: 0 0 16px 0;
`;

export const User = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15;
`;

export const Avatar = styled.Image`
  width: 60;
  height: 60;
  border-radius: 40;
  margin-right: 10;
`;

export const Details = styled.View``;


export const Name = styled.Text`
  margin: 0 0 12px 0;
  font-family: 'ChampagneBold';
  color: grey;
  font-size: 20;
`;

export const Description = styled.Text`
  font-family: 'Champagne';
  color: grey;
  font-size: 16;
`;

export const GetOut = styled.View`
  background-color: rgba(40, 93, 118, 0.12);
  padding-top: 15;
  padding-bottom: 15;
  border-radius: 10;
  margin-bottom: 15;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Leave = styled.Text`
  color: red;
  margin-left: 10;
  font-family: 'ChampagneBold';
  font-size: 20;
`;
