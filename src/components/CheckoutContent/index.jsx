import { Container } from 'components';

import CheckoutForm from './CheckoutForm';
import OrderInfo from './OrderInfo';

const CheckoutContent = () => {
  return (
    <Container>
      <CheckoutForm />
      <OrderInfo />
    </Container>
  );
};

export default CheckoutContent;
