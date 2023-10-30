import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Countdown from 'react-countdown';

import { colors } from 'theme';

import Container from './Container';
import Title from './Title';
import Button from './Button';

const ActionArea = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return '';
    } else {
      return (
        <>
          <CountWrapper>
            <div>{days}</div>
            <span>Days</span>
          </CountWrapper>
          <CountWrapper>
            <div>{hours}</div>
            <span>Hrs</span>
          </CountWrapper>
          <CountWrapper>
            <div>{minutes}</div>
            <span>Mins</span>
          </CountWrapper>
          <CountWrapper>
            <div>{seconds}</div>
            <span>Secs</span>
          </CountWrapper>
        </>
      );
    }
  };

  const year = 3.1556926 * Math.pow(10, 10);
  return (
    <StyledContainer>
      <Container>
        <TitleWrapper>
          <Title type="xs">Todays Hot Offer</Title>
        </TitleWrapper>
        <TitleWrapper>
          <Title type="xxl">
            Free Covid-19 Vaccine
            <br />
            Campaign Ticket
          </Title>
        </TitleWrapper>
        <Text>
          Cur tantas regiones barbarorum obiit, tot maria transmist <br />
          summo bono fruitur id est voluptate barbarorum
        </Text>
        <Counter>
          <Countdown
            date={Date.now() + year}
            renderer={renderer}
          />
        </Counter>

        <Button>
          <NavLink to="/contact">BOOK NOW</NavLink>
        </Button>
      </Container>
    </StyledContainer>
  );
};

export default ActionArea;

const StyledContainer = styled.section`
  width: 100%;
  background-image: url('/images/actionarea.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 120px 0;
  height: 100%;
`;

const TitleWrapper = styled.div`
  margin-bottom: 15px;
  &:first-child {
    color: ${colors.gossamer};
  }
`;

const Text = styled.p`
  color: ${colors.nevada};
  margin-bottom: 50px;
`;

const Counter = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  span {
    color: ${colors.nevada};
    font-size: 18px;
    background-color: transparent;
    display: block;
  }
  div {
    background-color: ${colors.main};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 60px;
    height: 50px;
    color: ${colors.gossamer};
    font-size: 24px;
    font-weight: 700;
    line-height: 1.3;
  }
`;
