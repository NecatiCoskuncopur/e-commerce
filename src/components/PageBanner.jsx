import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from 'theme';
import Title from './Title';

const PageBanner = ({ title }) => {
  return (
    <Wrapper>
      <Title
        text={title}
        type="xl"
      />
      <BreadCrumb>
        <li>
          <Link to="/">Home</Link>
        </li>
        <span>/</span>
        <li>{title}</li>
      </BreadCrumb>
    </Wrapper>
  );
};

export default PageBanner;

const Wrapper = styled.section`
  background-color: ${colors.mirage};
  min-height: 200px;
  padding: 30px 0 45px;
  position: relative;
  text-align: center;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background-color: ${colors.alabastar};
    -webkit-clip-path: polygon(100% 0, 0 100%, 100% 100%);
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
  }
  ul {
    color: ${colors.main};
  }
`;

const BreadCrumb = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 12px;
  font-size: 18px;
  a {
    transition: 0.3s all ease;
    &:hover {
      color: ${colors.candleLight};
    }
  }
`;
