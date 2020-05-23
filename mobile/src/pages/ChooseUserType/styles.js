import background from '~/assets/idosos.png';
import styled from 'styled-components/native';

export const BackgroundImage = styled.Image.attrs({
  source: background,
  resizeMode: 'contain',
})`
  position: absolute;
`;
