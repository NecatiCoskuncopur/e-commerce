import { styled } from 'styled-components';

import { colors } from 'theme';

const Input = ({ type, placeholder }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;

const StyledInput = styled.input`
  padding: 0 20px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: transparent;
  border: 2px solid ${colors.alto};
  color: ${colors.main};
  height: 50px;
`;
