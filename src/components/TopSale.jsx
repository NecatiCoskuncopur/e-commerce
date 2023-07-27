import { styled } from 'styled-components';

import Title from './Title';
import ProductCard from './ProductCard';

const TopSale = ({ products }) => {
  const bySales = products.slice(0).sort((a, b) => {
    return b.sales - a.sales;
  });

  const data = bySales.slice(0, 4);
  return (
    <Wrapper>
      <Title
        type="lg"
        text="Top Sale"
      />
      <ProductList>
        {data.map((product) => (
          <ProductCard
            key={product.id}
            price={product.price}
            brand={product.brand}
            model={product.model}
            image={product.image}
          />
        ))}
      </ProductList>
    </Wrapper>
  );
};

export default TopSale;

const Wrapper = styled.section`
  padding: 150px 30px 80px;
`;

const ProductList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
