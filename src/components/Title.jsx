import { css, styled } from 'styled-components';

import { colors, device } from 'theme';

const Title = ({ text, type, isLight = false, isPrice = false }) => {
  return (
    <StyledTitle
      isLight={isLight}
      variant={type}
    >
      {isPrice ? `$${text}` : text}
    </StyledTitle>
  );
};

export default Title;

const StyledTitle = styled.h1`
  font-family: 'Teko', sans-serif;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0;

  ${({ isLight }) => (isLight ? `color: ${colors.main}` : `color: ${colors.mirage}`)};

  ${(p) =>
    p.variant === 'xs' &&
    css`
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 26px;
      @media ${device.tablet} {
        font-size: 16px;
      }
    `};
  ${(p) =>
    p.variant === 'sm' &&
    css`
      font-size: 24px;
      font-weight: 500;
      @media ${device.tablet} {
        font-size: 20px;
      }
    `};
  ${(p) =>
    p.variant === 'md' &&
    css`
      font-size: 36px;
      margin-bottom: 30px;
      font-weight: 500;
    `};
  ${(p) =>
    p.variant === 'lg' &&
    css`
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 52px;
      text-transform: uppercase;
      @media ${device.tablet} {
        font-size: 30px;
        margin-bottom: 36px;
      }
    `};
  ${(p) =>
    p.variant === 'xl' &&
    css`
      font-size: 70px;
      text-transform: uppercase;
      font-weight: 700;
      color: ${colors.candleLight};
      @media ${device.tablet} {
        font-size: 40px;
      }
    `};
`;
