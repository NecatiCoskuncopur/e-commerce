import FooterNav from './FooterNav';

const Shop = () => {
  const data = [
    {
      name: 'Road Bike',
      to: '/',
    },
    {
      name: 'City Bike',
      to: '/',
    },
    {
      name: 'Mountain Bike',
      to: '/',
    },
    {
      name: 'Kids Bike',
      to: '/',
    },
    {
      name: 'BMX Bike',
      to: '/',
    },
  ];
  return (
    <>
      <FooterNav
        title="Shop"
        data={data}
      />
    </>
  );
};

export default Shop;
