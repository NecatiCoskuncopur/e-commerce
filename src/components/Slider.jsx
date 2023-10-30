import { useRef } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { colors, device } from 'theme';

const Slider = ({ children, initialPerView, breakpoints }) => {
  const sliderRef = useRef();

  const isDesktop = useMediaQuery({
    query: device.desktop,
  });

  return (
    <Container>
      <LeftButton onClick={() => sliderRef.current?.slidePrev()}>
        <FaArrowLeft />
      </LeftButton>
      <SwiperWrapper>
        <Swiper
          onSwiper={(it) => (sliderRef.current = it)}
          slidesPerView={initialPerView}
          slidesPerGroup={initialPerView}
          loop={true}
          spaceBetween={30}
          pagination={
            isDesktop && {
              clickable: true,
            }
          }
          breakpoints={breakpoints}
          modules={[Pagination, Navigation]}
        >
          {children}
        </Swiper>
      </SwiperWrapper>
      <RightButton onClick={() => sliderRef.current?.slideNext()}>
        <FaArrowRight />
      </RightButton>
    </Container>
  );
};

export default Slider;

const LeftButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.mystic};
  font-size: 20px;
  position: absolute;
  left: 25px;
  right: auto;
  top: 45%;
  transform: translateY(-45%);
  width: 50px;
  height: 50px;
  line-height: 48px;
  border-radius: 100%;
  visibility: hidden;
  opacity: 0;
  z-index: 2;
  transition: 0.7s all ease;
  @media ${device.desktop} {
    display: none;
  }
  &:hover {
    color: ${colors.main};
    background-color: ${colors.gossamer};
  }
`;

const RightButton = styled(LeftButton)`
  right: 25px;
  left: auto;
  visibility: hidden;
  opacity: 0;
`;

const Container = styled.section`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  &:hover ${LeftButton} {
    left: -70px;
    right: auto;
    visibility: visible;
    opacity: 1;
  }
  &:hover ${RightButton} {
    visibility: visible;
    opacity: 1;
    left: auto;
    right: -70px;
  }
`;

const SwiperWrapper = styled.div`
  padding-bottom: 60px;
`;
