import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { colors } from 'theme';

const BottomSide = () => {
  return (
    <Nav>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>

      <NavItem>
        <Link to="about">About Us</Link>
      </NavItem>

      <NavItem>
        <Link to="products">Shop</Link>
      </NavItem>
    </Nav>
  );
};

export default BottomSide;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 0;
  height: 70px;
`;

const NavItem = styled.li`
  a {
    position: relative;
    top: 0;
    left: 0;
    color: ${colors.black};
    &:before {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      background-color: ${colors.candleLight};
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    &:hover::before {
      transform: scaleX(1);
    }
  }
`;
