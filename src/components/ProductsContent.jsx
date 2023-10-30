import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

import { products } from 'data';
import { colors } from 'theme';

import Container from './Container';
import ProductList from './ProductList';

const options = [
  { value: 'Default Sorting', label: 'Default Sorting' },
  { value: 'Sort by price: low to high', label: 'Sort by price: low to high' },
  { value: 'Sort by price: high to low', label: 'Sort by price: high to low' },
];

const ProductsContent = () => {
  const [showProductList, setShowProductList] = useState(products);
  const [selectedOption, setSelectedOption] = useState(null);

  const setLowToHigh = () => {
    const changedProd = [...products];
    const sortedProducts = changedProd.sort((a, b) => a.price - b.price);
    setShowProductList([...sortedProducts]);
  };

  const setHighToLow = () => {
    const changedProd = [...products];
    const reverseSortedProducts = changedProd.sort((a, b) => b.price - a.price);
    setShowProductList([...reverseSortedProducts]);
  };

  const defaultList = () => {
    const resetList = products;
    setShowProductList([...resetList]);
  };

  useEffect(() => {
    if (selectedOption !== null) {
      if (selectedOption.value === 'Default Sorting') {
        defaultList();
      } else if (selectedOption.value === 'Sort by price: low to high') {
        setLowToHigh();
      } else {
        setHighToLow();
      }
    }
  }, [selectedOption]);

  return (
    <Container>
      <Wrapper>
        <Header>
          <span>Showing {products.length} results</span>
          <SelectWrapper>
            <Select
              defaultValue={options[0]}
              onChange={setSelectedOption}
              options={options}
            />
          </SelectWrapper>
        </Header>
        <ProductList data={showProductList} />
      </Wrapper>
    </Container>
  );
};

export default ProductsContent;

const Wrapper = styled.section``;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  span {
    color: ${colors.nevada};
  }
`;

const SelectWrapper = styled.div`
  min-width: 190px;
  color: ${colors.nevada};
`;
