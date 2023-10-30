import styled from 'styled-components';

import { colors, device } from 'theme';
import { Container, Title } from 'components';

import Aside from './Aside';
import Info from './Info';
import Slider from './Slider';

const ProductDetailsContent = ({ item }) => {
  const splittedDesc = item.description.split('\n\n');

  return (
    <Container>
      <Wrapper>
        <ContentWrapper>
          <TopSide>
            <Slider item={item} />
            <Info item={item} />
          </TopSide>
          <BottomSide>
            <TitleWrapper>
              <Title type="lg">{item.name}</Title>
            </TitleWrapper>
            {splittedDesc.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </BottomSide>
        </ContentWrapper>
        <Aside />
      </Wrapper>
    </Container>
  );
};

export default ProductDetailsContent;

const Wrapper = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  margin-bottom: 120px;
`;

const ContentWrapper = styled.article`
  width: 70%;
  @media ${device.laptop} {
    width: 100%;
  }
`;

const TopSide = styled.div`
  margin-bottom: 60px;
  display: flex;
  gap: 30px;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const BottomSide = styled.div`
  width: 100%;
  p {
    margin-bottom: 20px;
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: 24px;
  color: ${colors.firefly};
`;
