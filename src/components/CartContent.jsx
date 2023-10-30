import { useContext } from 'react';

import { CartContext } from 'context/CartContext';
import Container from './Container';
import List from './List';
import CartTotal from './CartTotal';
import Empty from './Empty';

const CartContent = () => {
  const cart = useContext(CartContext);

  return (
    <Container>
      {cart.items.length > 0 ? (
        <>
          <List />
          <CartTotal />
        </>
      ) : (
        <Empty title="Your cart is currently empty" />
      )}
    </Container>
  );
};

export default CartContent;
