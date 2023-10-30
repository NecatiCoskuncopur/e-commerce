import { useContext, useState } from 'react';
import styled from 'styled-components';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';

import { links } from 'data';
import { colors, device } from 'theme';
import { Button, Title } from 'components';
import { CartContext } from 'context/CartContext';

const Info = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const cart = useContext(CartContext);

  const wishlistId = cart.wishlistItems.map((i) => i.id);
  const hasItem = wishlistId.indexOf(item.id) === -1;

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <Container>
      <Title type="lg">{item.name}</Title>
      <span>${item.price}.00</span>
      <hr />
      <Form>
        <StyledButton onClick={decreaseQuantity}>-</StyledButton>
        <Input
          value={quantity}
          readOnly
        />
        <StyledButton onClick={increaseQuantity}>+</StyledButton>
        <Button onClick={() => cart.addToCart(item, quantity)}>
          <div>
            <FaShoppingCart />
          </div>
          ADD TO CART
        </Button>
      </Form>
      {hasItem ? (
        <AddWishlist onClick={() => cart.addToWishlist(item)}>
          <FaRegHeart /> <div>Add to Wishlist</div>
        </AddWishlist>
      ) : (
        <AddWishlist>
          <FaHeart color="red" /> <div>Add to Wishlist</div>
        </AddWishlist>
      )}
      <hr />
      <List>
        <li>Share:</li>
        {links.socialMedia.map((item) => (
          <a
            key={item.id}
            href={item.href}
          >
            <li>{item.icon}</li>
          </a>
        ))}
      </List>
      <hr />
      <Title type="sm">Guaranteed Safe Checkout</Title>
      <img
        src="/images/payment-2.png"
        alt="Payment"
      />
    </Container>
  );
};

export default Info;

const Container = styled.div`
  width: 50%;
  span {
    font-size: 50px;

    width: 100%;
    line-height: 1.2;
    color: ${colors.gossamer};
  }
  hr {
    width: 100%;
    height: 1px;
    background-color: ${colors.titanWhite};
    margin: 20px 0;
  }
  img {
    margin-top: 20px;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  margin-top: 30px;
`;

const StyledButton = styled.button`
  height: 100%;
  font-size: 20px;
  border: 1px solid ${colors.gallery};
  background-color: transparent;
  width: 40px;
  color: ${colors.nevada};
  font-weight: 700;
  cursor: pointer;
  &:not(:first-child) {
    margin-right: 20px;
  }
`;

const Input = styled.input`
  border-top: 1px solid ${colors.gallery};
  border-bottom: 1px solid ${colors.gallery};
  height: 100%;
  width: 54px;
  text-align: center;
  color: ${colors.nevada};
  font-weight: 700;
`;

const AddWishlist = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14;
  font-weight: 600;
  line-height: 1.8;
  color: ${colors.nevada};
  margin-top: 16px;
  cursor: pointer;
  transition: 0.3s all ease;
  &:hover {
    color: ${colors.gossamer};
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${colors.nevada};
  li {
    line-height: 1.8;
    font-size: 18px;
  }
`;
