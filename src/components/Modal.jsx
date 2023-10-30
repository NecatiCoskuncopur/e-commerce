import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { colors, device } from 'theme';

const Modal = ({ children, direction, closeModalHandler }) => {
  return (
    <Container onClick={closeModalHandler}>
      <ContentWrapper
        initial={direction === 'left' ? { transform: 'translate(-100%)' } : { transform: 'translate(100%)' }}
        animate={{ transform: 'translate(0%)' }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        variant={direction}
      >
        {children}
      </ContentWrapper>
    </Container>
  );
};

export default Modal;

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ContentWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 50%;
  height: 100vh;
  background-color: ${colors.main};
  overflow: scroll;
  ${(p) =>
    p.variant === 'left'
      ? css`
          left: 0;
          padding: 50px 40px;
        `
      : css`
          right: 0;
          padding: 20px 10px 20px 30px;
        `};

  @media ${device.phone} {
    width: 75%;
  }
  @media ${device.mini} {
    width: 100%;
  }
`;
