import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

import { categoryItems } from 'data';
import { colors } from 'theme';

import Slider from './Slider';

const Categories = () => {
  return (
    <Wrapper>
      <Slider
        initialPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
      >
        {categoryItems.map((item) => (
          <SwiperSlide key={item.id}>
            <CategoryItem href="/products">
              {item.icon}
              <h6>{item.title}</h6>
            </CategoryItem>
          </SwiperSlide>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default Categories;

const Wrapper = styled.div`
  border-bottom: 1px solid ${colors.geyser};
`;

const CategoryItem = styled.a`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: ${colors.comet};
  transition: 0.3s all ease;
  h6 {
    font-size: 16px;
    color: ${colors.firefly};
    transition: 0.3s all ease;
  }
  &:hover {
    color: ${colors.gossamer};
    h6 {
      color: ${colors.gossamer};
    }
  }
`;
