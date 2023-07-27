import { Advantages, Products, TopSale } from 'components';

const Home = ({ products }) => {
  return (
    <div>
      <Advantages />
      <Products products={products} />
      <TopSale products={products} />
    </div>
  );
};

export default Home;
