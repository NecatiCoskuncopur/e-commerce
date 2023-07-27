import { styled } from 'styled-components';

import { colors } from 'theme';

const Mask = () => {
  return <StyledMask />;
};

export default Mask;

const StyledMask = styled.span`
  background-color: ${colors.mirage};
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
  width: 100%;
  z-index: 1;
  height: 100%;
  pointer-events: none;
`;
