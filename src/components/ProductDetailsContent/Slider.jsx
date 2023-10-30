import { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { colors, device } from 'theme';

const Slider = ({ item }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Container>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        loop={true}
      >
        {item.detailImage.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item}
              alt="Product Detail"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
      >
        {item.detailImage.map((item, index) => (
          <Thumb key={index}>
            <img
              src={item}
              alt="Product Detail"
            />
          </Thumb>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  width: 50%;
  img {
    background-color: ${colors.athensGray};
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

const Thumb = styled(SwiperSlide)`
  &.swiper-slide-thumb-active {
    border: 1px solid ${colors.gossamer};
  }
  margin-top: 20px;
  margin-bottom: 10px;
  width: 85px;
  height: 110px;
  padding: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Image = styled.img`
  height: 470px;
  object-fit: contain;
  width: 100%;
  @media ${device.tablet} {
    height: 400px;
  }
`;
