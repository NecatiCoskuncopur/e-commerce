import { styled } from 'styled-components';

import TopSide from './TopSide';
import BottomSide from './BottomSide';

const Navbar = () => {
  return (
    <Wrapper>
      <StyledNavbar>
        <TopSide />
        <BottomSide />
      </StyledNavbar>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledNavbar = styled.nav`
  width: 81%;
`;
