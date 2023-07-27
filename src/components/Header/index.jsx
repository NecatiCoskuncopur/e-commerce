import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import { colors } from 'theme';
import Navbar from './Navbar';

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage ? (
        <StyledHeader>
          <Navbar />
          {/* <Span /> */}
        </StyledHeader>
      ) : (
        <Wrapper>
          <Navbar />
        </Wrapper>
      )}
    </>
  );
};

export default Header;

const StyledHeader = styled.header`
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  background-color: ${colors.main};
`;

const Wrapper = styled.header`
  background-color: ${colors.main};
`;

// const Span = styled.span`
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 1;
//   background-image: url('/images/header-effect.svg');
//   background-position: center;
//   background-repeat: no-repeat;
//   width: 100%;
//   height: 100%;
//   opacity: 0.3;
// `;
