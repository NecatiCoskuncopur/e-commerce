import { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

import { Button, Empty, Modal, Title } from 'components';
import { colors } from 'theme';
import { CartContext } from 'context/CartContext';

const Cart = ({ closeModalHandler, openModal }) => {
  const cart = useContext(CartContext);

  return (
    <Modal
      direction={openModal.direction}
      closeModalHandler={closeModalHandler}
      openModal={openModal}
    >
      {cart.items.length > 0 ? (
        <Wrapper>
          <Header>
            <span>Cart</span>
            <CloseButton onClick={closeModalHandler}>
              <AiOutlineClose size={20} />
            </CloseButton>
          </Header>
          <div>
            {cart.items?.map((item) => (
              <Card key={item.id}>
                <ItemClose onClick={() => cart.deleteFromCart(item.id)}>
                  <AiOutlineClose />
                </ItemClose>
                <img
                  src={item.image}
                  alt={item.name}
                />
                <TextWrapper>
                  <StyledNavLink to={`/products/${item.path}`}>{item.name}</StyledNavLink>
                  <span>
                    {item.quantity} X ${item.price}.00
                  </span>
                </TextWrapper>
              </Card>
            ))}
          </div>
          <Total>
            <Title type="xs">Subtotal:</Title>
            <Price>${cart.getTotalCost()}.00</Price>
          </Total>
          <ButtonWrapper>
            <Button>
              <NavLink to="/cart">VIEW CART</NavLink>
            </Button>
            <Button>
              <NavLink to="/checkout">CHECKOUT</NavLink>
            </Button>
          </ButtonWrapper>
        </Wrapper>
      ) : (
        <Empty title="Your cart is currently empty" />
      )}
    </Modal>
  );
};

export default Cart;

const Wrapper = styled.div`
  padding-right: 20px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.nevada};
  font-size: 14px;
  font-weight: 700;
  padding-bottom: 15px;
  margin-bottom: 25px;
  border-bottom: 1px solid ${colors.gallery};
`;

const CloseButton = styled.button`
  background-color: transparent;
  color: ${colors.mineShaft};
  cursor: pointer;
  font-size: 30px;
`;

const Card = styled.article`
  padding: 20px 0 0 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  position: relative;
  &:not(:first-child) {
    border-top: 1px solid ${colors.mystic};
  }
  img {
    max-width: 80px;
    background-color: ${colors.athensGray};
  }
  span {
    font-size: 14px;
  }
`;

const ItemClose = styled.div`
  position: absolute;
  left: -4px;
  top: 8px;
  height: 20px;
  width: 20px;
  border-radius: 100%;
  display: block;
  line-height: 20px;
  background-color: ${colors.main};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  transition: 0.3s all ease;
  &:hover {
    background-color: ${colors.gossamer};
    color: ${colors.main};
  }
`;

const TextWrapper = styled.div``;

const StyledNavLink = styled(NavLink)`
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
  color: ${colors.firefly};
  line-height: 1.3;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 15px;
  transition: 0.3s all ease;
  &:hover {
    color: ${colors.gossamer};
  }
`;

const Total = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  margin-top: 45px;
  border-top: 1px solid ${colors.mystic};
  border-bottom: 1px solid ${colors.mystic};
`;

const Price = styled.span`
  color: ${colors.gossamer};
  font-weight: 700;
`;

const ButtonWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0 15px;
`;
