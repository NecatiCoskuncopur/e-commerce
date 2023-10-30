import styled, { css } from 'styled-components';
import { colors, device } from 'theme';

const Button = ({ children, type, onClick }) => {
  return (
    <StyledButton
      onClick={onClick}
      variant={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  padding: 17px 35px;
  background-color: ${colors.gossamer};
  color: ${colors.main};
  font-family: 'Josefin Sans', sans-serif;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  position: relative;
  z-index: 1;
  transition: 0.3s all ease;
  line-height: 1.5;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 0%;
    opacity: 0;
    height: 100%;
    background-color: ${colors.main};
    transition: 0.3s all ease;
  }
  &:hover {
    color: ${colors.firefly};
    border: 1px solid ${colors.firefly};
    &::after {
      opacity: 1;
      width: 100%;
    }
  }
  ${(p) =>
    p.variant === 'w-100' &&
    css`
      width: 100%;
    `};

  @media ${device.laptop} {
    padding: 12px 25px;
  }
  @media ${device.tablet} {
    padding: 10px 20px;
  }
`;
