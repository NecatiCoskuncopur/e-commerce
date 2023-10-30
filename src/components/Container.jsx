import styled from 'styled-components';

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  padding: 0px 15px;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1399px) {
    max-width: 1140px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    max-width: 960px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 720px;
  }

  @media screen and (max-width: 640px) {
    max-width: 540px;
  }
`;
