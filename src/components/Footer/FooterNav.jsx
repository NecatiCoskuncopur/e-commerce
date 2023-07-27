import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import Title from '../Title';
import { colors, device } from 'theme';

const FooterNav = ({ data, title }) => {
  return (
    <Wrapper>
      <Title
        type="xs"
        text={title}
      />
      <NavList>
        {data.map((item, index) => (
          <NavItem key={index}>
            <Link to={item.to}>{item.name}</Link>
          </NavItem>
        ))}
      </NavList>
    </Wrapper>
  );
};

export default FooterNav;

const Wrapper = styled.div`
  flex: 1;
  @media ${device.tablet} {
    width: 100%;
  }
`;
const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const NavItem = styled.li`
  flex-basis: 50%;
  color: ${colors.trout};
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
  margin-bottom: 13px;
  transition: 0.3s all ease;
  &:hover {
    color: ${colors.candleLight};
  }
`;
