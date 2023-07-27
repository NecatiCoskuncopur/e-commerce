import { styled } from 'styled-components';

import { colors } from 'theme';

const LinkButton = ({ link, text }) => {
  return <Wrapper href={link}>{text}</Wrapper>;
};

export default LinkButton;

const Wrapper = styled.a`
  padding: 12px 40px 10px;
  background-color: transparent;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 600;
  letter-spacing: 0.1em;
  border: 2px solid ${colors.candleLight};
  cursor: pointer;
  position: relative;
  top: 0;
  left: 0;
  z-index: 999;
`;
