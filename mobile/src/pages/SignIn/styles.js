import { Form } from '@unform/mobile';
import styled from 'styled-components/native';

import Input from '~/components/Input';

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  background: #fff;
`;

export const Background = styled.View`
  background: #074a94;
  position: absolute;
  width: 100%;
  height: 60%;
  top: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const FormContainer = styled.KeyboardAvoidingView`
  background: #eee;
  padding: 30px 20px 0;
  margin: 0 auto;
  width: 85%;
  border-radius: 20px;
`;

export const Label = styled.Text`
  margin: 10px 20px 0;
  color: #074a94;
  font-family: Montserrat;
`;

export const Title = styled.Text`
  margin: 15px auto 10px;
  font-size: 24px;
  color: #074a94;
  font-family: Montserrat;
`;

export const TextInput = styled(Input)`
  width: 100%;
  margin: 10px auto 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 5px 20px;
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
