import { styled } from 'styled-components';

import { colors, device } from 'theme';
import SubscribeForm from '../SubscribeForm';
import Info from './Info';
import Shop from './Shop';
import Social from './Social';
import Payment from './Payment';

const Footer = () => {
  return (
    <Wrapper>
      <TopContent>
        <FormWrapper>
          <SubscribeForm isFooter={true} />
        </FormWrapper>
        <Info />
      </TopContent>
      <TopContent>
        <Social />
        <Shop />
      </TopContent>
      <BottomContent>
        <Payment />
      </BottomContent>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background-color: ${colors.main};
  padding: 108px 148px 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media ${device.desktop} {
    padding: 108px 100px 50px;
  }
  @media ${device.laptop} {
    padding: 80px 45px 40px;
  }
  @media ${device.tablet} {
    padding: 90px 15px 30px;
  }
`;

const TopContent = styled.article`
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: column;
    gap: 40px;
  }
`;

const FormWrapper = styled.div`
  width: 75%;
  @media ${device.tablet} {
    width: 100%;
  }
`;

const BottomContent = styled.article`
  padding-top: 50px;
  border-top: 1px solid ${colors.alto};
`;
