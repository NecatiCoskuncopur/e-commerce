import { Container, NewsList, PageBanner } from 'components';

const News = () => {
  return (
    <>
      <PageBanner title="News" />
      <Container>
        <NewsList />
      </Container>
    </>
  );
};

export default News;
