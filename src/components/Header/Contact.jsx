import styled from 'styled-components';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';

import { colors } from 'theme';
import { links } from 'data';

const Contact = () => {
  return (
    <Container>
      <LeftSide>
        <a
          href="mailto:info@webmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <AiOutlineMail />
          </span>
          info@webmail.com
        </a>
        <a
          href="http://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <CiLocationOn />
          </span>
          15/A, Nest Tower, NYC
        </a>
      </LeftSide>
      <RightSide>
        {links.socialMedia.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </RightSide>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  min-height: 40px;
  border-bottom: 1px solid ${colors.comet};
  background: ${colors.main};
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${colors.nevada};
  font-weight: 700;
  a {
    display: flex;
    align-items: center;
    span {
      margin-right: 5px;
      color: ${colors.gossamer};
      font-size: 16px;
    }
    &:hover {
      color: ${colors.gossamer};
    }
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 14px;
`;

const RightSide = styled(LeftSide)`
  gap: 10px;
  font-size: 16px;
`;
