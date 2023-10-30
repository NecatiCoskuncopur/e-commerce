import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { Title } from 'components';
import { colors, device } from 'theme';

const Questions = () => {
  const [toggle, setToggle] = useState({});

  const data = [
    {
      id: 1,
      title: 'How to buy a product?',
    },
    {
      id: 2,
      title: 'How can i make refund from your website?',
    },
    {
      id: 3,
      title: 'I am a new user. How should I start?',
    },
    {
      id: 4,
      title: 'Returns and refunds',
    },
    {
      id: 5,
      title: 'Are my details secured?',
    },
  ];

  const toggleHandler = (id) => {
    setToggle({
      [id]: !toggle[id],
    });
  };

  return (
    <Container>
      <TextWrapper>
        {data.map((item) => (
          <Card key={item.id}>
            <CardTitle>
              <Title type="sm">{item.title}</Title>
              <Button onClick={() => toggleHandler(item.id)}>{toggle[item.id] ? <AiOutlineMinus /> : <AiOutlinePlus />}</Button>
            </CardTitle>
            {toggle[item.id] && (
              <CardBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque
                  eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac.
                </p>
              </CardBody>
            )}
          </Card>
        ))}
      </TextWrapper>
      <ImageWrapper>
        <img
          src="/images/about-question.png"
          alt="About"
        />
      </ImageWrapper>
    </Container>
  );
};

export default Questions;

const Container = styled.section`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 30px;
  padding: 115px 0 120px;
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

const TextWrapper = styled.article`
  width: calc(50% - 30px);

  @media ${device.laptop} {
    width: 100%;
  }
`;
const ImageWrapper = styled.article`
  flex: 1;
  img {
    width: 100%;
  }
  @media ${device.laptop} {
    width: 100%;
  }
`;

const Card = styled.div`
  border: 2px solid ${colors.blackHaze};
  &:not(:last-child) {
    border-bottom: 0;
  }
`;

const CardTitle = styled.header`
  padding: 20px 10px 20px 40px;
  color: ${colors.firefly};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${colors.aquaHaze};
  font-size: 16px;
  cursor: pointer;
`;

const CardBody = styled.div`
  padding: 15px 40px 25px;
  color: ${colors.nevada};
`;
