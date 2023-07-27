import { styled } from 'styled-components';

import Title from './Title';
import ProductCard from './ProductCard';

const Products = ({ products }) => {
  return (
    <Wrapper>
      <Title
        type="lg"
        text="Our Products"
      />

      <ProductList>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            price={product.price}
            brand={product.brand}
            model={product.model}
            image={product.image}
            id={product.id}
          />
        ))}
      </ProductList>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.section`
  padding: 0 30px 150px;
`;

const ProductList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
