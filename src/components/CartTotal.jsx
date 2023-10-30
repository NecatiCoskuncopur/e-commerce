import { useContext } from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

import { colors, device } from 'theme';
import { CartContext } from 'context/CartContext';

import Title from './Title';
import Button from './Button';

const CartTotal = () => {
  const location = useLocation();
  const isCartPage = location.pathname === '/cart';

  const cart = useContext(CartContext);

  return (
    <Container>
      <div>
        <Title type="md">Cart Totals</Title>
      </div>
      <Price>
        <span>Cart Subtotal</span>
        <span>${cart.getTotalCost()}.00</span>
      </Price>
      <Price>
        <span>Shipping and Handing</span>
        <span>$15.00</span>
      </Price>
      <Price>
        <span>Vat</span>
        <span>$00.00</span>
      </Price>
      <TotalPrice>
        <span>Order Total</span>
        <span>${cart.getTotalCost() + 15}.00</span>
      </TotalPrice>
      {isCartPage && (
        <Button type="w-100">
          <NavLink to="/checkout">Proceed to Checkout</NavLink>
        </Button>
      )}
    </Container>
  );
};

export default CartTotal;

const Container = styled.section`
  margin-top: 50px;
  margin-bottom: 120px;
  max-width: 50%;
  width: 100%;
  margin-left: auto;
  color: ${colors.firefly};
  div {
    margin-bottom: 15px;
  }
  @media ${device.tablet} {
    max-width: 100%;
  }
`;

const Price = styled.article`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.gallery};
  background-color: ${colors.athensGray};
  span {
    color: ${colors.shark};
  }
`;

const TotalPrice = styled(Price)`
  font-weight: 900;
  color: ${colors.shark};
`;
