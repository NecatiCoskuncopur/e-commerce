import styled from 'styled-components';
import { FaUserAlt, FaEnvelope, FaPhone, FaPencilAlt } from 'react-icons/fa';

import { colors, device } from 'theme';
import { Title } from 'components';

const CheckoutForm = () => {
  return (
    <Form>
      <Title type="xs">Personal Information</Title>
      <ContentWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="First Name"
          />
          <span>
            <FaUserAlt />
          </span>
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Last Name"
          />
          <span>
            <FaUserAlt />
          </span>
        </InputWrapper>
        <InputWrapper>
          <Input
            type="email"
            placeholder="email address"
          />
          <span>
            <FaEnvelope />
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
      </ContentWrapper>
      <Title type="xs">Adress</Title>
      <ContentWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="House number and street name"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Apartment, suite, unit, etc."
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Country"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="City"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="State"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="number"
            placeholder="Zip"
          />
        </InputWrapper>
      </ContentWrapper>
      <Title type="xs">Adress</Title>
      <ContentWrapper>
        <TextAreaWrapper>
          <TextArea placeholder="Enter message" />
          <span>
            <FaPencilAlt />
          </span>
        </TextAreaWrapper>
      </ContentWrapper>
    </Form>
  );
};

export default CheckoutForm;

const Form = styled.form`
  padding: 30px;
  border: 1px solid ${colors.mystic};
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 15px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  height: 65px;
  padding: 1px 40px 1px 20px;
  border: 2px solid ${colors.catSkillWhite};
  color: ${colors.nevada};
  font-weight: 700;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
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
