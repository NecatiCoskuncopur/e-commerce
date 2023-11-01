import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Button, Title } from 'components';
import { colors, device } from 'theme';

const Slider = () => {
  return (
    <StyledSwiper
      loop={true}
      effect={'fade'}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, EffectFade]}
    >
      <SwiperSlide>
        <FirstSlide>
          <Content>
            <SubTitle variant="green">
              <Title type="xs">Up To 50% Off Today Only!</Title>
            </SubTitle>
            <Title type="xl">
              Gold Standard <br /> Pre-Workout
            </Title>
            <SubTitle>
              <Title type="sm">Starting at $16.99</Title>
            </SubTitle>
            <Button>
              <NavLink to="/products">Shop Now</NavLink>
            </Button>
          </Content>
        </FirstSlide>
      </SwiperSlide>
      <SwiperSlide>
        <SecondSlide>
          <Content>
            <SubTitle variant="green">
              <Title type="xs">WELCOME TO OUR SHOP</Title>
            </SubTitle>
            <Title type="xl">
              Gold Standard <br /> Pre-Workout
            </Title>
            <Button>
              <NavLink to="/products">Shop Now</NavLink>
            </Button>
          </Content>
        </SecondSlide>
      </SwiperSlide>
    </StyledSwiper>
  );
};

export default Slider;

const StyledSwiper = styled(Swiper)`
  width: 50%;
  height: 500px;
  .swiper-pagination-bullet-active {
    background-color: ${colors.gossamer} !important;
    transform: scale(1.2);
  }
  @media ${device.laptop} {
    width: 100%;
    height: 480px;
  }
`;

const FirstSlide = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/images/slider-1.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  left: 0px;
  top: 0px;
  z-index: 998;
  padding: 130px 30px;
`;

const SecondSlide = styled(FirstSlide)`
  background-image: url('/images/slider-2.png');
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  font-weight: 700;
`;

const SubTitle = styled.div`
  color: ${({ variant }) => (variant === 'green' ? `${colors.gossamer}` : `${colors.webOrange}`)};
`;
