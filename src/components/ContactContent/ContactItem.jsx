import styled from 'styled-components';

import { Location, Mail, Phone } from 'Icons';
import { colors, device } from 'theme';
import { Container } from 'components';

import Title from '../Title';

const ContactItem = () => {
  return (
    <Container>
      <Wrapper>
        <Item>
          <ImageWrapper>
            <Mail />
          </ImageWrapper>
          <TextWrapper>
            <Title type="lg">Email Address</Title>
            <span>info@webmail.com</span>
            <span>jobs@webexample.com</span>
          </TextWrapper>
        </Item>
        <Item>
          <ImageWrapper>
            <Phone />
          </ImageWrapper>
          <TextWrapper>
            <Title type="lg">Phone Number</Title>
            <span>+0123-456789</span>
            <span>+987-6543210</span>
          </TextWrapper>
        </Item>
        <Item>
          <ImageWrapper>
            <Location />
          </ImageWrapper>
          <TextWrapper>
            <Title type="lg">Office Address</Title>
            <span>18/A, New Born Town Hall</span>
            <span>New York, US</span>
          </TextWrapper>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default ContactItem;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 90px;
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

const Item = styled.article`
  padding: 50px 30px 25px;
  border: 2px solid ${colors.gallery};
  width: calc(33.33333333% - 30px);
  text-align: center;
  @media ${device.laptop} {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 35px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.firefly};
  span {
    color: ${colors.nevada};
  }
`;
