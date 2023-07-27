import { styled } from 'styled-components';

import { colors, device } from 'theme';
import Title from './Title';

const AdvantageCard = ({ img, title, subtitle, isAboutPage = false }) => {
  return (
    <Wrapper>
      <Content isAboutPage={isAboutPage}>
        <div>{img}</div>
        <Title
          isLight={!isAboutPage}
          text={title}
          type="sm"
        />
        <Title
          isLight={!isAboutPage}
          text={subtitle}
          type="sm"
        />
      </Content>
    </Wrapper>
  );
};

export default AdvantageCard;

const Wrapper = styled.article`
  flex-basis: 25%;
  padding: 8px;
  @media ${device.tablet} {
    flex-basis: 50%;
  }
  @media ${device.phone} {
    flex-basis: 100%;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${({ isAboutPage }) => (isAboutPage ? `color: ${colors.mirage}` : `color: ${colors.main}`)};
  div {
    margin-bottom: 16px;
  }
`;
