import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';

import { colors, device } from 'theme';

import Title from './Title';

const News = ({ item, grid = false }) => {
  return (
    <Container grid={grid}>
      <NavLink to={`/news/${item.id}`}>
        <Image
          src={item.image}
          alt={item.title}
        />
      </NavLink>
      <TextWrapper>
        <TitleWrapper title={item.title}>
          <div>
            <NavLink to={`/news/${item.id}`}>
              <Title type="lg">{item.title}</Title>
            </NavLink>
          </div>
        </TitleWrapper>
        <CardFooter>
          <Date>
            <span>
              <FaCalendarAlt />
            </span>
            {item.createDate}
          </Date>
          <StyledNavLink to={`/news/${item.id}`}>READ MORE</StyledNavLink>
        </CardFooter>
      </TextWrapper>
    </Container>
  );
};

export default News;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 220px;
  transition: 0.5s all ease;
`;

const Container = styled.article`
  box-shadow: 0 5px 20px 0 rgba(23, 44, 82, 0.1);
  overflow: hidden;
  &:hover ${Image} {
    transform: scale(1.07);
  }
  ${(p) =>
    p.grid &&
    css`
      width: calc(33.33333333% - 20px);
      @media ${device.laptop} {
        width: calc(50% - 15px);
      }
      @media ${device.phone} {
        width: 100%;
      }
    `};
`;

const TextWrapper = styled.div`
  padding: 30px;
`;

const TitleWrapper = styled.div`
  color: ${colors.firefly};
  min-height: 84px;
  transition: 0.3s all ease;
  div {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    color: ${colors.gossamer};
  }
`;

const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid ${colors.mystic};
  font-size: 14px;
  font-weight: 600;
`;

const Date = styled.div`
  color: ${colors.nevada};
  display: flex;
  align-items: center;
  user-select: none;
  span {
    margin-right: 5px;
    color: ${colors.gossamer};
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${colors.gossamer};
`;
