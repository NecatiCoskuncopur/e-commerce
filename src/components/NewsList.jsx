import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

import { news } from 'data';

import Title from './Title';
import Slider from './Slider';
import News from './News';

const NewsList = () => {
  const location = useLocation();
  const isNewsPage = location.pathname === '/news';

  return (
    <>
      {isNewsPage ? (
        <ContainerGrid>
          {news.map((item) => (
            <News
              key={item.id}
              item={item}
              grid={true}
            />
          ))}
        </ContainerGrid>
      ) : (
        <Container>
          <TitleWrapper>
            <Title type="xxl">Leatest News</Title>
          </TitleWrapper>

          <Slider
            initialPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1200: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
          >
            {news.map((item) => (
              <SwiperSlide key={item.id}>
                <News item={item} />
              </SwiperSlide>
            ))}
          </Slider>
        </Container>
      )}
    </>
  );
};

export default NewsList;

const Container = styled.div`
  padding: 115px 0px 70px;
`;

const TitleWrapper = styled.div`
  text-align: center;
`;

const ContainerGrid = styled.section`
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;
