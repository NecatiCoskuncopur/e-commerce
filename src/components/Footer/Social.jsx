import { styled } from 'styled-components';
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from 'react-icons/bi';

import Title from '../Title';
import { colors, device } from 'theme';

const Social = () => {
  const socialData = [
    { href: 'https://www.facebook.com/', element: <BiLogoFacebook size={24} /> },
    { href: 'https://twitter.com/', element: <BiLogoTwitter size={24} /> },
    { href: 'https://www.instagram.com/', element: <BiLogoInstagram size={24} /> },
    { href: 'https://www.youtube.com/', element: <BiLogoYoutube size={24} /> },
  ];

  return (
    <Wrapper>
      <Title
        type="xs"
        text="STAY IN TOUCH"
      />
      <SocialList>
        {socialData.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.element}
            </a>
          </li>
        ))}
      </SocialList>
    </Wrapper>
  );
};

export default Social;

const Wrapper = styled.div`
  width: 75%;
  @media ${device.tablet} {
    width: 100%;
  }
`;

const SocialList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  a {
    color: ${colors.grayChateau};
    transition: 0.3s all ease;
    &:hover {
      color: ${colors.candleLight};
    }
  }
`;
