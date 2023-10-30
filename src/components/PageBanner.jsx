import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import { FaHome, FaAngleRight } from 'react-icons/fa';

import { colors } from 'theme';

import Container from './Container';
import Title from './Title';

const PageBanner = ({ title }) => {
  const breadcrumbs = useReactRouterBreadcrumbs();

  return (
    <Wrapper>
      <Container>
        <Title type="xl">{title}</Title>

        <List>
          {breadcrumbs.map((item) => (
            <ListItem
              key={item.key}
              active={item.location.pathname === item.key}
            >
              {item.key === '/' && <span>{<FaHome />}</span>}
              {item.location.pathname === item.key ? item.breadcrumb.props.children : <NavLink to={item.key}>{item.breadcrumb.props.children}</NavLink>}
              {item.location.pathname !== item.key && <p>{<FaAngleRight />}</p>}
            </ListItem>
          ))}
        </List>
      </Container>
    </Wrapper>
  );
};

export default PageBanner;

const Wrapper = styled.section`
  background-image: url('/images/pageBanner-bg.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  margin-bottom: 120px;
  padding: 110px 0px;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    background-color: rgba(255, 255, 255, 0.3);
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
  div {
    position: relative;
    z-index: 3;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 15px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-size: 16px;
  font-weight: 700;
  position: relative;
  color: ${colors.nevada};
  transition: 0.3s all ease;
  &:hover {
    color: ${colors.gossamer};
  }
  span {
    font-weight: 900;
    color: ${colors.gossamer};
    margin-right: 5px;
  }
  p {
    font-weight: 900;
    margin-left: 10px;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: ${colors.nevada};
  }
  ${(p) =>
    p.active &&
    css`
      color: ${colors.firefly};
      &:hover {
        color: ${colors.firefly};
      }
    `};
`;
