import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaEye, FaShoppingCart, FaHeart } from 'react-icons/fa';

import { colors, device } from 'theme';
import { CartContext } from 'context/CartContext';

import Title from './Title';

const Product = ({ item, grid = false }) => {
  const cart = useContext(CartContext);

  const wishlistId = cart.wishlistItems.map((i) => i.id);
  const hasItem = wishlistId.indexOf(item.id) === -1;

  return (
    <Container grid={grid}>
      <NavLink to={`/products/${item.path}`}>
        <ImageWrapper>
          <img
            src={item.image}
            alt={item.name}
          />
        </ImageWrapper>
      </NavLink>
      <IconWrapper>
        <NavLink>
          <Icon>
            <FaEye />
          </Icon>
        </NavLink>
        <Icon onClick={() => cart.addToCart(item)}>
          <FaShoppingCart />
        </Icon>
        <NavLink>
          {hasItem ? (
            <Icon
              onClick={() => cart.addToWishlist(item)}
              style={{ border: 0 }}
            >
              <FaHeart />
            </Icon>
          ) : (
            <Icon style={{ border: 0, color: 'red' }}>
              <FaHeart />
            </Icon>
          )}
        </NavLink>
      </IconWrapper>
      <TextWrapper>
        <NavLink>
          <Title type="xs">{item.name}</Title>
        </NavLink>
        <span>${item.price}.00</span>
      </TextWrapper>
    </Container>
  );
};

export default Product;

const IconWrapper = styled.ul`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: 0.5s all ease;
  background-color: ${colors.main};
  display: flex;
  z-index: 3;
`;

const Icon = styled.li`
  height: 50px;
  width: 50px;
  background-color: transparent;
  cursor: pointer;
  border-right: 1px solid ${colors.geyser};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s all ease;
  color: ${colors.nevada};
  &:hover {
    background-color: ${colors.gossamer};
    color: ${colors.main};
  }
`;

const Container = styled.article`
  width: calc(25%-30px);
  border: 2px solid ${colors.wildSand};
  position: relative;
  transition: 0.3s all ease;
  color: ${colors.firefly};
  &:hover ${IconWrapper} {
    opacity: 1;
    top: 40%;
  }
  &:hover {
    box-shadow: 0 16px 32px 0 rgba(7, 28, 31, 0.1);
  }
  ${(p) =>
    p.grid &&
    css`
      width: calc(33.33333333% - 20px);
      @media ${device.laptop} {
        width: calc(50% - 15px);
      }
      @media ${device.phone} {
        width: 100%;
      }
    `};
`;

const TextWrapper = styled.div`
  padding: 25px 30px 15px;
  transition: 0.3s all ease;

  span {
    color: ${colors.gossamer};
    font-size: 14px;
    font-weight: 700;
  }
  &:hover {
    color: ${colors.gossamer};
  }
  @media ${device.laptop} {
    padding: 25px 15px 15px;
  }
  @media ${device.phone} {
    padding: 25px 5px 15px;
  }
`;

const ImageWrapper = styled.div`
  background-color: ${colors.athensGray};

  img {
    height: 310px;
    object-fit: contain;
    width: 100%;
  }
`;
