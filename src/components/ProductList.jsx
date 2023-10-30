import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

import { products } from 'data';
import { device } from 'theme';

import Product from './Product';
import Slider from './Slider';
import Title from './Title';

const ProductList = ({ data }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage ? (
        <Wrapper>
          <Title type="xxl">Products</Title>
          <Slider
            initialPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
            }}
          >
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <Product item={item} />
              </SwiperSlide>
            ))}
          </Slider>
          <BannerWrapper>
            <ImageWrapper>
              <NavLink to="/products">
                <Image
                  src="/images/banner-3.png"
                  alt="Banner"
                />
              </NavLink>
            </ImageWrapper>
            <ImageWrapper>
              <NavLink to="/products">
                <Image
                  src="/images/banner-4.png"
                  alt="Banner"
                />
              </NavLink>
            </ImageWrapper>
            <ImageWrapper>
              <NavLink to="/products">
                <Image
                  src="/images/banner-3.png"
                  alt="Banner"
                />
              </NavLink>
            </ImageWrapper>
          </BannerWrapper>
        </Wrapper>
      ) : (
        <ContainerGrid>
          {data.map((item) => (
            <Product
              key={item.id}
              item={item}
              grid={true}
            />
          ))}
        </ContainerGrid>
      )}
    </>
  );
};

export default ProductList;

const Wrapper = styled.div`
  padding: 115px 0 90px;
  text-align: center;
`;

const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 2.5s all ease;
`;

const ImageWrapper = styled.div`
  width: calc(33.33333333% - 30px);
  overflow: hidden;
  @media ${device.laptop} {
    width: calc(50% - 15px);
  }
  @media ${device.phone} {
    width: 100%;
  }
  &:hover ${Image} {
    transform: scale(1.07);
  }
`;

const ContainerGrid = styled.section`
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;
