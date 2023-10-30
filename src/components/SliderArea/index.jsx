import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { device } from 'theme';

import Slider from './Slider';

const SliderArea = () => {
  return (
    <Container>
      <Slider />
      <RightSide>
        <ImageWrapper>
          <NavLink>
            <Image
              src="/images/banner-1.png"
              alt=""
            />
          </NavLink>
        </ImageWrapper>
        <ImageWrapper>
          <NavLink>
            <Image
              src="/images/banner-2.png"
              alt=""
            />
          </NavLink>
        </ImageWrapper>
      </RightSide>
    </Container>
  );
};

export default SliderArea;

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

const RightSide = styled.article`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${device.laptop} {
    width: 100%;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 2.5s all ease;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 235px;
  overflow: hidden;
  @media ${device.laptop} {
    height: 360px;
  }
  @media ${device.tablet} {
    height: 240px;
  }
  @media ${device.phone} {
    height: 200px;
  }
  &:hover ${Image} {
    transform: scale(1.07);
  }
`;
