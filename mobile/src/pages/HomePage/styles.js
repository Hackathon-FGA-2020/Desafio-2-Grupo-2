import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  background: #fff;
`;

export const Title = styled.Text`
  margin: 60px auto 340px;
  font-size: 40px;
  color: #074a94;
  font-family: Montserrat;
`;

export const Text = styled.Text`
  margin: 0 22px 10px 22px;
  font-size: 24px;
  text-align: center;
  color: #074a94;
  font-family: PleaseWriteMeASong;
`;

export const Author = styled.Text`
  font-size: 16px;
  margin: 0 30px 60px auto;
  color: #074a94;
  font-family: Montserrat;
`;

export const Button = styled.TouchableOpacity`
  margin: 0 0 0 auto;
  padding: 5px 40px 5px 30px;
  background: #074a94;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
`;

export const TextButton = styled.Text`
  font-size: 26px;
  font-family: MontserratMedium;
  color: #eee;
`;
