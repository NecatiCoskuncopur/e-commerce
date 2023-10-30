import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Title } from 'components';
import { products } from 'data';
import { colors, device } from 'theme';

const Aside = () => {
  const relatedProducts = products.slice(0, 3);
  return (
    <Container>
      <AsideItem>
        <TitleWrapper>
          <Title type="sm">Related Products</Title>
        </TitleWrapper>
        {relatedProducts.map((item) => (
          <ProductCard key={item.id}>
            <NavLink to={`/products/${item.path}`}>
              <img
                src={item.image}
                alt={item.name}
              />
            </NavLink>
            <div>
              <NavLink to={`/products/${item.path}`}>
                <h1>{item.name}</h1>
              </NavLink>
              <span>${item.price}.00</span>
            </div>
          </ProductCard>
        ))}
      </AsideItem>
      <ImageWrapper>
        <NavLink to="/products">
          <img
            src="/images/productDetail.png"
            alt="Save"
          />
        </NavLink>
      </ImageWrapper>
    </Container>
  );
};

export default Aside;

const Container = styled.aside`
  width: 30%;
  @media ${device.laptop} {
    display: none;
  }
`;

const AsideItem = styled.div`
  padding: 35px 30px 40px 35px;
  border: 2px solid ${colors.gallery};
  margin-bottom: 40px;
`;

const ProductCard = styled.div`
  margin-top: 16px;
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.gallery};
    margin: 16px 0px 30px;
    padding-bottom: 30px;
  }
  display: flex;
  align-items: flex-start;
  img {
    width: 90px;
    margin-right: 20px;
    object-fit: cover;
    background-color: ${colors.athensGray};
  }
  h1 {
    font-size: 14px;
    line-height: 1.3;
    color: ${colors.firefly};
    margin-bottom: 5px;
    transition: 0.3s all ease;
    &:hover {
      color: ${colors.gossamer};
    }
  }
  span {
    color: ${colors.gossamer};
    font-weight: 700;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const TitleWrapper = styled.div`
  color: ${colors.firefly};
  position: relative;
  margin-bottom: 25px;
  padding-left: 45px;
  &::before {
    position: absolute;
    width: 18px;
    height: 4px;
    border-radius: 25px;
    content: '';
    background-color: ${colors.gossamer};
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  &::after {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    content: '';
    background-color: ${colors.gossamer};
    top: 50%;
    left: 22px;
    transform: translateY(-50%);
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;
