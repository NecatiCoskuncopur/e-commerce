import { ActionArea, Categories, Container, Features, NewsList, ProductList, SliderArea } from 'components';

const Home = () => {
  return (
    <>
      <Container>
        <SliderArea />
        <Categories />
        <ProductList />
      </Container>
      <ActionArea />
      <Container>
        <NewsList />
      </Container>
      <Features />
    </>
  );
};

export default Home;
