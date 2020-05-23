import background from '~/assets/world.png';
import styled from 'styled-components/native';

export const BackgroundImage = styled.Image.attrs({
  source: background,
  resizeMode: 'cover',
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;
