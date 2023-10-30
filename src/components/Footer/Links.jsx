import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { links } from 'data';
import { Title } from 'components';
import { colors, device } from 'theme';

const Links = () => {
  return (
    <>
      <LinkWrapper>
        <Title type="lg">Company</Title>
        <List>
          {links.companyLinks.map((item) => (
            <ListItem key={item.id}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </ListItem>
          ))}
        </List>
      </LinkWrapper>
      <LinkWrapper>
        <Title type="lg">Services</Title>
        <List>
          {links.serviceLinks.map((item) => (
            <ListItem key={item.id}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </ListItem>
          ))}
        </List>
      </LinkWrapper>
      <LinkWrapper>
        <Title type="lg">Customer Care</Title>
        <List>
          {links.customerLinks.map((item) => (
            <ListItem key={item.id}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </ListItem>
          ))}
        </List>
      </LinkWrapper>
    </>
  );
};

export default Links;

const LinkWrapper = styled.article`
  width: calc(16% - 30px);
  color: ${colors.main};
  @media ${device.desktop} {
    width: calc(50% - 30px);
  }
  @media ${device.phone} {
    width: 100%;
  }
`;

const List = styled.ul``;

const ListItem = styled.li`
  font-size: 16px;
  margin-bottom: 15px;
  position: relative;
  transition: 0.3s all ease;
  &::before {
    position: absolute;
    content: '//';
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: inherit;
    -o-transition: inherit;
    transition: inherit;
    opacity: 0;
    visibility: hidden;
    margin-left: -20px;
    color: ${colors.gossamer};
  }
  &:hover {
    transform: translateX(20px);
    color: ${colors.gossamer};
    &::before {
      opacity: 1;
      visibility: visible;
    }
  }
`;
