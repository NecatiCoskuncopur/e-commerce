import styled, { css } from 'styled-components';

import { device } from 'theme';

const Title = ({ children, type }) => {
  return <StyledTitle variant={type}>{children}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h1`
  line-height: 1.3;
  color: inherit;
  ${(p) =>
    p.variant === 'xs' &&
    css`
      margin-bottom: 5px;
      font-size: 16px;
      @media ${device.tablet} {
        font-size: 14px;
      }
    `};
  ${(p) =>
    p.variant === 'sm' &&
    css`
      font-size: 18px;
      @media ${device.tablet} {
        font-size: 16px;
      }
    `};
  ${(p) =>
    p.variant === 'md' &&
    css`
      font-size: 20px;
      margin-bottom: 5px;
      @media ${device.laptop} {
        font-size: 18px;
      }
    `};
  ${(p) =>
    p.variant === 'lg' &&
    css`
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 15px;
    `};
  ${(p) =>
    p.variant === 'xl' &&
    css`
      font-size: 38px;
      margin-bottom: 15px;
      @media ${device.desktop} {
        font-size: 36px;
      }
      @media ${device.laptop} {
        font-size: 26px;
      }
      @media ${device.tablet} {
        font-size: 24px;
      }
    `};
  ${(p) =>
    p.variant === 'xxl' &&
    css`
      font-size: 44px;
      margin-bottom: 15px;
      @media ${device.desktop} {
        font-size: 30px;
      }
      @media ${device.tablet} {
        font-size: 24px;
      }
    `};
`;
