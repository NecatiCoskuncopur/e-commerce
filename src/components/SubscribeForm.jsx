import { styled } from 'styled-components';

import Title from './Title';
import Text from './Text';
import Input from './Input';
import LinkButton from './LinkButton';

const SubscribeForm = ({ isFooter = false }) => {
  return (
    <>
      <Title
        isLight={!isFooter}
        text="Subscribe"
        type={!isFooter ? 'lg' : 'xs'}
      />
      <TextWrapper isFooter={isFooter}>
        <Text
          isLight={!isFooter}
          text="Subscribe us and you won't miss the new arrivals, as well as discounts and sales"
          type="md"
        />
      </TextWrapper>
      <Form>
        <Input
          type="text"
          placeholder="@ E-mail"
        />
        <LinkButton text="SEND" />
      </Form>
    </>
  );
};

export default SubscribeForm;

const TextWrapper = styled.div`
  margin-bottom: 22px;
  ${({ isFooter }) => !isFooter && ` max-width: 340px; margin-top:-32px `};
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;
