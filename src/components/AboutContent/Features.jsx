import styled from 'styled-components';
import { FaHandHoldingMedical, FaMicroscope, FaStethoscope } from 'react-icons/fa';

import { Container, Title } from 'components';
import { colors, device } from 'theme';

const Features = () => {
  return (
    <Wrapper>
      <Container>
        <TitleWrapper>
          <Title type="xxl">Why Choose Us.</Title>
        </TitleWrapper>
        <CardWrapper>
          <Card>
            <CardTitle>
              <span>
                <FaHandHoldingMedical />
              </span>
              <Title type="lg">All Kind Brand</Title>
            </CardTitle>
            <CardBody>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</CardBody>
          </Card>
          <Card>
            <CardTitle>
              <span>
                <FaMicroscope />
              </span>
              <Title type="lg">Curated Products</Title>
            </CardTitle>
            <CardBody>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</CardBody>
          </Card>
          <Card>
            <CardTitle>
              <span>
                <FaStethoscope />
              </span>
              <Title type="lg">Pesticide Free Goods</Title>
            </CardTitle>
            <CardBody>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</CardBody>
          </Card>
        </CardWrapper>
      </Container>
    </Wrapper>
  );
};

export default Features;

const Wrapper = styled.section`
  padding: 110px 0;
  background-color: ${colors.aquaHaze};
`;

const TitleWrapper = styled.div`
  padding-bottom: 15px;
  text-align: center;
`;

const CardWrapper = styled.div`
  color: ${colors.firefly};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const Card = styled.article`
  padding: 38px 30px 10px;
  background-color: ${colors.main};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  flex: 0 0 auto;
  width: calc(33.33333333% - 20px);
  @media ${device.laptop} {
    width: calc(50% - 15px);
  }
  @media ${device.phone} {
    width: 100%;
  }
`;

const CardTitle = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 16px;
  span {
    color: ${colors.gossamer};
    font-weight: 900;
    font-size: 60px;
  }
`;

const CardBody = styled.p`
  color: ${colors.nevada};
  margin-bottom: 24px;
`;
