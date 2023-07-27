import { styled } from 'styled-components';

import { Discount, Exchange, Shipping, Warranty } from 'Icons';
import { colors } from 'theme';
import Title from './Title';
import AdvantageCard from './AdvantageCard';
import Mask from './Mask';

const Advantages = ({ isAboutPage = false }) => {
  const data = [
    {
      img: <Shipping />,
      title: 'Free Shipping',
      subtitle: 'From $500',
    },
    {
      img: <Warranty />,
      title: 'Warranty Service',
      subtitle: 'For 3 Months',
    },
    {
      img: <Exchange />,
      title: 'Exchange and return',
      subtitle: 'within 14 days',
    },
    {
      img: <Discount />,
      title: 'Discounts For',
      subtitle: 'Customers',
    },
  ];

  return (
    <>
      {isAboutPage ? (
        <AdvantageList>
          {data.map((item, index) => (
            <AdvantageCard
              key={index}
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
              isAboutPage={isAboutPage}
            />
          ))}
        </AdvantageList>
      ) : (
        <Wrapper>
          <TitleWrapper>
            <Title
              isLight
              type="lg"
              text="Our Advantages"
            />
          </TitleWrapper>

          <Mask />
          <AdvantageList>
            {data.map((item, index) => (
              <AdvantageCard
                key={index}
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </AdvantageList>
        </Wrapper>
      )}
    </>
  );
};

export default Advantages;

const Wrapper = styled.section`
  margin: 135px 0;
  padding: 120px 0 145px;
  text-align: center;
  background-color: ${colors.mirage};
  background-image: url('/images/bg-advantages.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  text-align: center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 36px;
    background-color: ${colors.alabastar};
    z-index: 2;
    -webkit-clip-path: polygon(0 0, 0 100%, 100% 0);
    clip-path: polygon(0 0, 0 100%, 100% 0);
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${colors.alabastar};
    height: 44px;
    z-index: 2;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0, 25% 100%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0, 25% 100%);
  }
`;

const AdvantageList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 101px;
  position: relative;
  z-index: 1;
`;

const TitleWrapper = styled.div`
  position: relative;
  z-index: 2;
`;
