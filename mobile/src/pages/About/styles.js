import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const AboutContainer = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  margin: 0 auto 10px;
  font-size: 26px;
  color: #074a94;
  font-family: ChampagneBold;
`;

export const SubTitle = styled.Text`
  margin: 10px auto;
  font-size: 24px;
  color: #074a94;
  font-family: ChampagneBold;
`;

export const Text = styled.Text`
  margin: 0 20px 10px 20px;
  font-size: 20px;
  text-align: justify;
  color: #074a94;
  font-family: Champagne;
`;

export const Collaborator = styled.Text`
  font-size: 20px;
  margin: 0 auto 5px auto;
  color: #074a94;
  font-family: Champagne;
`;

export const CollaboratorsContainer = styled.View`
  margin: 0 auto 100px auto;
`;
