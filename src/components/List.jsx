import styled from 'styled-components';
import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { colors, device } from 'theme';
import { CartContext } from 'context/CartContext';

import Title from './Title';

const List = () => {
  const location = useLocation();
  const isCartPage = location.pathname === '/cart';

  const cart = useContext(CartContext);

  const data = isCartPage ? cart.items : cart.wishlistItems;

  return (
    <Container isCartPage={isCartPage}>
      {data?.map((item) => (
        <ListItem key={item.id}>
          <Icon onClick={isCartPage ? () => cart.deleteFromCart(item.id) : () => cart.deleteFromWishlist(item.id)}>X</Icon>
          <img
            src={item.image}
            alt={item.name}
          />
          <StyledNavLink to={`/products/${item.path}`}>
            <Title type="md">{item.name}</Title>
          </StyledNavLink>
          {isCartPage ? (
            <span>
              {item.quantity} X ${item.price}.00
            </span>
          ) : (
            <span>${item.price}.00</span>
          )}
          {isCartPage ? <p>${item.quantity * item.price}.00</p> : <AddButton onClick={() => cart.addToCart(item)}>Add to Cart</AddButton>}
        </ListItem>
      ))}
    </Container>
  );
};

export default List;
const Container = styled.ul`
  ${({ isCartPage }) => (isCartPage ? 'margin-bottom: 0' : 'margin-bottom: 120px')};
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  border-bottom: 1px solid ${colors.gallery};
  img {
    max-width: 100px;
    background-color: ${colors.athensGray};
  }
  span {
    font-size: 16px;
    color: ${colors.shark};
  }
  p {
    font-size: 16px;
    color: ${colors.shark};
    font-weight: 700;
  }
  @media ${device.tablet} {
    padding: 20px 0;
    img {
      max-width: 80px;
    }
    span {
      font-size: 14px;
    }
    p {
      font-size: 14px;
    }
  }
  @media ${device.phone} {
    border: 1px solid ${colors.gallery};
    flex-direction: column;
    margin-bottom: 20px;
    gap: 10px;
    position: relative;
  }
`;

const Icon = styled.button`
  background-color: transparent;
  cursor: pointer;
  @media ${device.phone} {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

const StyledNavLink = styled(NavLink)`
  width: 230px;
  text-align: center;
  transition: 0.3s all ease;
  @media ${device.laptop} {
    width: 207px;
  }
  &:hover {
    color: ${colors.gossamer};
  }
`;

const AddButton = styled.button`
  padding: 10px 30px;
  color: ${colors.main};
  background-color: ${colors.firefly};
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s all ease;
  @media ${device.tablet} {
    font-size: 14px;
  }
  &:hover {
    background-color: ${colors.gossamer};
  }
`;
