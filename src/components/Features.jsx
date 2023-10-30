import styled from 'styled-components';

import { Cashback, CreditCard, GiftCard, Shipping } from 'Icons';
import { colors } from 'theme';

import Container from './Container';
import Title from './Title';

const Features = () => {
  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <FeatureItem>
            <Shipping />
            <TextWrapper>
              <Title type="md">Free shipping</Title>
              <p>On all orders over $49.00</p>
            </TextWrapper>
          </FeatureItem>
          <FeatureItem>
            <Cashback />
            <TextWrapper>
              <Title type="md">15 days returns</Title>
              <p>Moneyback guarantee</p>
            </TextWrapper>
          </FeatureItem>
          <FeatureItem>
            <CreditCard />
            <TextWrapper>
              <Title type="md">Secure checkout</Title>
              <p>Protected by Paypal</p>
            </TextWrapper>
          </FeatureItem>
          <FeatureItem>
            <GiftCard />
            <TextWrapper>
              <Title type="md">Offer & gift here</Title>
              <p>On all orders over</p>
            </TextWrapper>
          </FeatureItem>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default Features;

const Wrapper = styled.section`
  background-color: ${colors.aquaHaze};
  padding: 30px 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const FeatureItem = styled.article`
  padding: 40px 30px 15px;
  min-width: 280px;
  color: ${colors.firefly};
  display: flex;
  gap: 15px;
`;

const TextWrapper = styled.div`
  flex: 1;
  p {
    margin: -10px 0 22px;
    font-size: 14px;
    color: ${colors.nevada};
  }
`;
