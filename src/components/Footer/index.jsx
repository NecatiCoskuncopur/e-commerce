import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaLocationArrow } from 'react-icons/fa';

import { Title } from 'components';
import { colors, device } from 'theme';
import { links } from 'data';

import Links from './Links';

const Footer = () => {
  return (
    <Container>
      <TopSide>
        <LeftSide>
          <NavLink to="/">
            <Image
              src="/images/logo-light.png"
              alt="Logo"
            />
          </NavLink>
          <Text>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</Text>
          <ul>
            {links.contactLinks.map((item) => (
              <ContactItem key={item.id}>
                <span>{item.icon}</span>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.content}
                </a>
              </ContactItem>
            ))}
          </ul>
          <Social>
            {links.socialMedia.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </Social>
        </LeftSide>
        <Links />
        <RightSide>
          <Title type="lg">Newsletter</Title>
          <Text>Subscribe to our weekly Newsletter and receive updates via email.</Text>
          <Form>
            <Input
              type="email"
              placeholder="Email*"
            />
            <Button>
              <FaLocationArrow />
            </Button>
          </Form>
          <Title type="md">We Accept</Title>
          <Image
            src="/images/payment.png"
            alt="Payment"
          />
        </RightSide>
      </TopSide>
      <BottomSide>
        <p>All Rights Reserved @ Company 2023</p>
        <Copyright>
          <li>
            <NavLink to="/">Terms & Conditions</NavLink>
          </li>
          <li>
            <NavLink to="/">Claim</NavLink>
          </li>
          <li>
            <NavLink to="/">Privacy & Policy</NavLink>
          </li>
        </Copyright>
      </BottomSide>
    </Container>
  );
};

export default Footer;

const Container = styled.footer``;

const TopSide = styled.section`
  background-color: ${colors.mirage};
  padding: 90px 30px 50px;
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const LeftSide = styled.article`
  width: calc(26% - 30px);
  color: ${colors.main};
  padding-right: 40px;
  @media ${device.desktop} {
    width: calc(50% - 30px);
  }
  @media ${device.phone} {
    width: 100%;
  }
`;

const RightSide = styled(LeftSide)``;

const Image = styled.img`
  max-width: 100%;
`;

const Text = styled.p`
  margin-bottom: 24px;
`;

const ContactItem = styled.li`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 15px;
  a {
    transition: 0.3s all ease;
    &:hover {
      color: ${colors.gossamer};
    }
  }
`;

const Social = styled.ul`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 18px;
`;

const Form = styled.form`
  position: relative;
  font-size: 16px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  padding: 1px 50px 1px 20px;
  border: 2px solid ${colors.catSkillWhite};
  height: 65px;
  color: ${colors.nevada};
  width: 100%;
  background-color: ${colors.main};
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 0 18px;
  color: ${colors.main};
  background-color: ${colors.gossamer};
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.3s all ease;
  z-index: 2;
  cursor: pointer;
  &:hover {
    background-color: ${colors.firefly};
  }
`;

const BottomSide = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 5%;
  background-color: ${colors.charade};
  color: ${colors.main};
  p {
    @media ${device.tablet} {
      font-size: 14px;
    }
  }
  @media ${device.tablet} {
    flex-direction: column;
    gap: 25px;
  }
`;

const Copyright = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  li {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    transition: 0.3s all ease;
    &:hover {
      color: ${colors.gossamer};
    }
  }
`;
