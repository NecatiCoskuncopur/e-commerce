import FooterNav from './FooterNav';

const Info = () => {
  const data = [
    {
      name: 'FAQ',
      to: 'about',
    },
    {
      name: 'Shipping',
      to: 'about',
    },
    {
      name: 'Catalog',
      to: 'about',
    },
    {
      name: 'Contact',
      to: 'contact',
    },
    {
      name: 'Exchanges',
      to: 'about',
    },
    {
      name: 'About',
      to: 'about',
    },
  ];
  return (
    <>
      <FooterNav
        title="Info"
        data={data}
      />
    </>
  );
};

export default Info;
