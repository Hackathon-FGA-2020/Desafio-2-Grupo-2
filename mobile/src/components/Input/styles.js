import styled from 'styled-components/native';

export const StyledInput = styled.TextInput`
  border-radius: 30px;
  width: 100%;
  margin: 5px auto 0;
  border: 1px solid
    ${(props) => (props.error ? '#FB4C4D' : 'rgba(0, 0, 0, 0.2)')};
  padding: 5px 20px;
  text-align: center;
`;

export const ErrorText = styled.Text`
  color: #fb4c4d;
  font-family: ChampagneBold;
  text-align: center;
  margin-top: 5px;
`;
