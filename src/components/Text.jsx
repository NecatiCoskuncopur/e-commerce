import { css, styled } from 'styled-components';

import { colors, device } from 'theme';

const Text = ({ type, text, isLight = false }) => {
  return (
    <StyledText
      isLight={isLight}
      variant={type}
    >
      {text}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-style: normal;
  ${({ isLight }) => isLight && `color: ${colors.main}`};
  ${(p) =>
    p.variant === 'md' &&
    css`
      font-size: 18px;
      font-weight: 500;
      @media ${device.tablet} {
        font-size: 16px;
        font-weight: 400;
      }
    `};
  ${(p) =>
    p.variant === 'lg' &&
    css`
      font-size: 36px;
      font-weight: 500;
    `};
`;
