import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineClose, AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';

import { links } from 'data';
import { Container } from 'components';
import { colors, device } from 'theme';

import { CartContext } from 'context/CartContext';

const Navbar = ({ openModalHandler, openModal, data }) => {
  const cart = useContext(CartContext);

  return (
    <Container>
      <Wrapper>
        <NavLink to="/">
          <Image
            src="/images/logo-dark.png"
            alt="Logo"
          />
        </NavLink>

        <List>
          {links.navLinks.map((item) => (
            <ListItem key={item.id}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </ListItem>
          ))}
        </List>

        <Cart>
          <NavLink to="Wishlist">
            <IconWrapper data={cart.wishlistItems.length}>
              <AiOutlineHeart />
            </IconWrapper>
          </NavLink>
          <IconWrapper
            onClick={() => openModalHandler('right')}
            data={cart.items.length}
          >
            <FiShoppingCart />
          </IconWrapper>

          <div>
            <span>YOUR CART</span>
            <span>${cart.getTotalCost()}.00</span>
          </div>
        </Cart>
      </Wrapper>
      <Hamburger>
        <span>Menu</span>
        <Button onClick={() => openModalHandler('left')}>{openModal ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}</Button>
      </Hamburger>
    </Container>
  );
};

export default Navbar;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
`;

const Image = styled.img``;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  @media ${device.laptop} {
    display: none;
  }
`;

const ListItem = styled.li`
  padding: 20px 10px;
  font-weight: 600;
  color: ${colors.firefly};
  font-size: 20px;
  transition: 0.3s all ease;
  &:hover {
    color: ${colors.gossamer};
  }
`;

const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  span {
    display: block;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.firefly};
    font-weight: 700;
    &:last-child {
      color: ${colors.gossamer};
    }
    @media ${device.phone} {
      display: none;
    }
  }
`;

const IconWrapper = styled.button`
  position: relative;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  &::before {
    position: absolute;
    content: attr(data);
    font-size: 12px;
    font-weight: 600;
    color: ${colors.main};
    background-color: ${colors.gossamer};
    height: 18px;
    width: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -12px;
    top: -10px;
    z-index: 1;
  }
`;

const Hamburger = styled.section`
  display: none;
  width: 100%;
  padding: 7px 20px 6px;
  border: 1px solid ${colors.mystic};
  color: ${colors.nevada};
  font-size: 14px;
  @media ${device.laptop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: ${colors.mineShaft};
`;
