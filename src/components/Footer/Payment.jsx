import { styled } from 'styled-components';

import { colors, device } from 'theme';

const Payment = () => {
  const data = [
    { name: 'Mastercard', img: '/images/mastercard.png' },
    { name: 'Paypal', img: '/images/paypal.png' },
    { name: 'Visa Electron', img: '/images/visaElectron.png' },
    { name: 'Visa', img: '/images/visa.png' },
  ];

  return (
    <Wrapper>
      <Copyright>
        <a href="https://github.com/NecatiCoskuncopur">Necati</a>© 2019. All Rights Reserved.
      </Copyright>
      <PayMethod>
        {data.map((item, index) => (
          <li
            key={index}
            title={item.name}
          >
            <img
              src={item.img}
              alt={item.name}
            />
          </li>
        ))}
      </PayMethod>
    </Wrapper>
  );
};

export default Payment;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
`;

const Copyright = styled.div`
  color: ${colors.grayChateau};
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
  a {
    color: ${colors.black};
    margin-right: 8px;
    transition: 0.3s all ease;
    &:hover {
      color: ${colors.candleLight};
    }
  }
`;

const PayMethod = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
`;
