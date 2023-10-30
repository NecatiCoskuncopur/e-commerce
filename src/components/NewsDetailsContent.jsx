import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { colors, device } from 'theme';
import { news } from 'data';

import Title from './Title';
import Container from './Container';
import Button from './Button';

const NewsDetailsContent = ({ item }) => {
  const splitContent1 = item.content1.split('\n\n');
  const splitContent2 = item.content2.split('\n\n');

  const filteredNews = news.filter((i) => i.id !== item.id);
  const sortedNews = filteredNews.sort((a, b) => b.createDate - a.createDate).slice(0, 4);

  return (
    <>
      <Container>
        <Wrapper>
          <ContentWrapper>
            <Title type="lg">{item.title}</Title>
            <div>
              {splitContent1.map((item, index) => (
                <Text key={index}>{item}</Text>
              ))}
            </div>
            <Image
              src={item.image}
              alt="News Image"
            />
            <Title type="lg">{item.subTitle}</Title>
            <div>
              {splitContent2.map((item, index) => (
                <Text key={index}>{item}</Text>
              ))}
            </div>
          </ContentWrapper>
          <Aside>
            <Author>
              <img
                src="/images/author.png"
                alt="Author"
              />
              <Title type="sm">John Doe</Title>
            </Author>
            <AsideItem>
              <TitleWrapper>
                <Title type="sm">Drop Message</Title>
              </TitleWrapper>
              <input
                type="text"
                placeholder="Your Name"
              />
              <input
                type="email"
                placeholder="Your e-Mail"
              />
              <textarea placeholder="Write Message" />
              <Button>Send Message</Button>
            </AsideItem>
            <AsideItem>
              <TitleWrapper>
                <Title type="sm">Leatest News</Title>
              </TitleWrapper>
              <div>
                {sortedNews.map((item) => (
                  <NewsCard key={item.id}>
                    <NavLink to={`/news/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                      />
                    </NavLink>
                    <div>
                      <StyledNavLink to={`/news/${item.id}`}>
                        <Title type="xs">{item.title}</Title>
                      </StyledNavLink>
                    </div>
                  </NewsCard>
                ))}
              </div>
            </AsideItem>
          </Aside>
        </Wrapper>
      </Container>
    </>
  );
};

export default NewsDetailsContent;

const Wrapper = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  margin-bottom: 120px;
`;

const ContentWrapper = styled.article`
  width: 70%;
  padding: 50px;
  color: ${colors.firefly};
  border: 2px solid ${colors.gallery};
  @media ${device.laptop} {
    width: 100%;
  }
`;

const Aside = styled.aside`
  width: 30%;
  @media ${device.laptop} {
    display: none;
  }
`;

const Text = styled.p`
  color: ${colors.nevada};
  margin: 24px 0;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 30px;
`;

const AsideItem = styled.article`
  padding: 35px 30px 40px 35px;
  border: 2px solid ${colors.gallery};
  color: ${colors.firefly};
  margin-bottom: 40px;
  img {
    height: 140px;
    width: 140px;
    margin-bottom: 25px;
    border-radius: 50%;
  }
  input {
    width: 100%;
    height: 65px;
    border: 2px solid ${colors.gallery};
    padding: 1px 40px 1px 20px;
    margin-bottom: 30px;
  }
  textarea {
    width: 100%;
    border: 2px solid ${colors.gallery};
    padding: 15px 20px;
    min-height: 150px;
    resize: none;
    margin-bottom: 30px;
  }
`;

const Author = styled(AsideItem)`
  text-align: center;
`;

const TitleWrapper = styled.div`
  padding-left: 10px;
  border-left: 2px solid ${colors.gossamer};
  margin-bottom: 25px;
`;

const NewsCard = styled.div`
  margin-top: 16px;
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.gallery};
    margin: 16px 0px 30px;
    padding-bottom: 30px;
  }
  display: flex;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
    border-radius: 0;
    margin-right: 20px;
    margin-bottom: 0;
    object-fit: cover;
  }
`;

const StyledNavLink = styled(NavLink)`
  transition: 0.3s all ease;
  &:hover {
    color: ${colors.gossamer};
  }
`;
