import styled from 'styled-components';
import { FaUserAlt, FaEnvelope, FaEye, FaPhone, FaPencilAlt } from 'react-icons/fa';

import { colors, device } from 'theme';
import { Button, Container, Title } from 'components';

const ContactForm = () => {
  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <Title type="lg">Get A Quote</Title>
        </TitleWrapper>
        <Form action="">
          <InputWrapper>
            <Input
              type="text"
              placeholder="Enter your name"
            />
            <span>
              <FaUserAlt />
            </span>
          </InputWrapper>
          <InputWrapper>
            <Input
              type="email"
              placeholder="Enter email address"
            />
            <span>
              <FaEnvelope />
            </span>
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Enter the subject"
            />
            <span>
              <FaEye />
            </span>
          </InputWrapper>
          <InputWrapper>
            <Input
              type="number"
              placeholder="Enter phone number"
            />
            <span>
              <FaPhone />
            </span>
          </InputWrapper>
          <TextAreaWrapper>
            <TextArea placeholder="Enter message" />
            <span>
              <FaPencilAlt />
            </span>
          </TextAreaWrapper>
          <Button>GET A FREE SERVICE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ContactForm;

const Wrapper = styled.section`
  padding: 40px 50px 50px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  border: 2px solid ${colors.gallery};
  background-color: ${colors.main};
  position: relative;
  z-index: 1;
  @media ${device.tablet} {
    padding: 40px 25px 50px;
  }
`;

const TitleWrapper = styled.div`
  padding-left: 10px;
  border-left: 2px solid ${colors.gossamer};
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  padding-top: 15px;
`;

const Input = styled.input`
  width: 100%;
  height: 65px;
  padding: 1px 40px 1px 20px;
  border: 2px solid ${colors.catSkillWhite};
  color: ${colors.nevada};
  font-weight: 700;
`;

const InputWrapper = styled.div`
  width: calc(50% - 15px);
  position: relative;
  span {
    position: absolute;
    top: 35%;
    right: 20px;
    font-weight: 900;
    color: ${colors.gossamer};
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

const TextAreaWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  span {
    position: absolute;
    top: 30px;
    right: 20px;
    font-weight: 900;
    color: ${colors.gossamer};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 2px solid ${colors.catSkillWhite};
  padding: 15px 20px;
  resize: none;
  font-weight: 700;
  color: ${colors.nevada};
  min-height: 150px;
`;
