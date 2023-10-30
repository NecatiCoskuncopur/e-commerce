import { useState } from 'react';
import styled from 'styled-components';

import { Button, CartTotal, Title } from 'components';
import { colors, device } from 'theme';

const OrderInfo = () => {
  const [radioValue, setRadioValue] = useState('');

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };
  return (
    <Container>
      <Wrapper>
        <CartTotal />
      </Wrapper>
      <Payment>
        <TitleWrapper>
          <Title type="md">Payment Method</Title>
        </TitleWrapper>
        <InputWrapper>
          <input
            type="radio"
            name="check"
            value="Check Payment"
            onChange={handleRadioChange}
            checked={radioValue === 'Check Payment'}
          />
          <label htmlFor="check">Check Payment</label>
        </InputWrapper>
        <InputWrapper>
          <input
            type="radio"
            name="cash"
            value="Cash on delivery"
            onChange={handleRadioChange}
            checked={radioValue === 'Cash on delivery'}
          />
          <label htmlFor="cash">Cash on delivery</label>
        </InputWrapper>
        <InputWrapper>
          <input
            type="radio"
            name="paypal"
            value="PayPal"
            onChange={handleRadioChange}
            checked={radioValue === 'PayPal'}
          />
          <label htmlFor="paypal">PayPal</label>
        </InputWrapper>
        <ButtonWrapper>
          <Button>PLACE ORDER</Button>
        </ButtonWrapper>
      </Payment>
    </Container>
  );
};

export default OrderInfo;

const Container = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const Wrapper = styled.article`
  width: calc(50% - 15px);
  @media ${device.tablet} {
    width: 100%;
  }
`;

const Payment = styled.article`
  width: calc(50% - 15px);
  margin-top: 50px;
  label {
    margin-left: 5px;
  }
  @media ${device.tablet} {
    width: 100%;
    margin-bottom: 50px;
  }
`;
const TitleWrapper = styled.div`
  margin-bottom: 15px;
`;

const InputWrapper = styled.div`
  padding: 20px;
  border: 1px solid ${colors.mystic};
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;
