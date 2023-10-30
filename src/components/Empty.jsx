import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingBag } from 'react-icons/fa';

import { colors } from 'theme';

import Title from './Title';
import Button from './Button';

const Empty = ({ title }) => {
  return (
    <Container>
      <Icon>
        <FaShoppingBag size={35} />
      </Icon>
      <Title type="xl">{title}</Title>
      <NavLink to="/products">
        <Button>Start Shopping</Button>
      </NavLink>
    </Container>
  );
};

export default Empty;

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 120px;
`;

const Icon = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: ${colors.gossamer};
  color: ${colors.main};
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
