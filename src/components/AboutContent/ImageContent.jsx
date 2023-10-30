import styled from 'styled-components';
import { FaCheckSquare } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

import { Title } from 'components';
import { colors, device } from 'theme';

const ImageContent = () => {
  return (
    <Container>
      <ImageWrapper>
        <img
          src="/images/aboutUs.png"
          alt="About Us"
        />
      </ImageWrapper>

      <TextWrapper>
        <Title type="xxl">Your faithful partners Medical Goods</Title>
        <p>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
        <ul>
          <ListItem>
            <span>
              <FaCheckSquare />
            </span>
            Better security for patient privacy and information.
          </ListItem>
          <ListItem>
            <span>
              <FaCheckSquare />
            </span>
            More products at lower prices.
          </ListItem>
          <ListItem>
            <span>
              <FaCheckSquare />
            </span>
            Connect customers with the power of eCommerce at all.
          </ListItem>
        </ul>
        <Contact>
          <Author>
            <img
              src="/images/aboutUs-author.png"
              alt=""
            />
            <div>
              <Title type="md">John Doe</Title>
              <small>Medical Specialist</small>
            </div>
          </Author>
          <Phone>
            <span>
              <FiPhoneCall size={25} />
            </span>
            <div>
              <small>Get Support</small>
              <Title type="xs">123-456-789-10</Title>
            </div>
          </Phone>
        </Contact>
      </TextWrapper>
    </Container>
  );
};

export default ImageContent;

const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 30px;
  padding-bottom: 120px;
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.article`
  width: calc(50% - 30px);
  img {
    width: 100%;
  }
`;

const TextWrapper = styled.article`
  flex: 1;
  color: ${colors.firefly};
  p {
    color: ${colors.nevada};
  }
`;

const ListItem = styled.li`
  margin-top: 16px;
  color: ${colors.nevada};
  font-weight: 400;
  display: flex;
  align-items: center;
  span {
    margin-right: 10px;
    color: ${colors.gossamer};
    font-size: 26px;
  }
`;

const Contact = styled.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid ${colors.geyser};
  display: flex;
  align-items: center;
  gap: 45px;
  small {
    font-size: 14px;
    line-height: 1.8;
    color: ${colors.nevada};
  }
`;

const Author = styled.div`
  position: relative;
  display: flex;

  gap: 15px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    right: -22px;
    transform: translateY(-50%);
    width: 1px;
    height: 100%;
    opacity: 0.2;
    background-color: ${colors.firefly};
  }
`;

const Phone = styled.div`
  padding: 10px 20px;
  background-color: ${colors.aquaHaze};
  color: ${colors.nevada};
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${colors.firefly};
  span {
    color: ${colors.nevada};
  }
`;
