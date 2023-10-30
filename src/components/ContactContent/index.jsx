import styled from 'styled-components';

import ContactItem from './ContactItem';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

const ContactContent = () => {
  return (
    <>
      <ContactItem />
      <Container>
        <ContactForm />

        <Wrapper>
          <ContactMap />
        </Wrapper>
      </Container>
    </>
  );
};

export default ContactContent;

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  margin-top: -100px;
  position: relative;
`;
