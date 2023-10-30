import { useParams } from 'react-router-dom';

import { products } from 'data';
import { PageBanner, ProductDetailsContent } from 'components';

const Product = () => {
  const { path } = useParams();

  const item = products.find((item) => item?.path === path);

  return (
    <>
      <PageBanner title={item.name} />
      <ProductDetailsContent item={item} />
    </>
  );
};

export default Product;
