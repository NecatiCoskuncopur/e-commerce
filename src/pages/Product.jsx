import { useParams } from 'react-router-dom';

const Product = ({ data }) => {
  const { id } = useParams();
  const item = data.find((item) => item.id === id);

  console.log(item);
  return <div>{item?.model}</div>;
};

export default Product;
