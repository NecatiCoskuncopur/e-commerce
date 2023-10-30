import { useContext } from 'react';

import { Container, Empty, List, PageBanner } from 'components';

import { CartContext } from 'context/CartContext';

const Wishlist = () => {
  const cart = useContext(CartContext);
  return (
    <>
      <PageBanner title="Wishlist" />
      <Container>{cart.wishlistItems.length > 0 ? <List /> : <Empty title="Your wishlist is currently empty" />}</Container>
    </>
  );
};

export default Wishlist;
