import { styled } from 'styled-components';

import { colors, device } from 'theme';
import Text from './Text';
import Title from './Title';
import LinkButton from './LinkButton';

const ProductCard = ({ price, brand, model, image, id }) => {
  const formattedPrice = String(price).replace(/(.)(?=(\d{3})+$)/g, '$1.');

  return (
    <Wrapper>
      <ImageWrapper>
        <img
          src={image}
          alt={brand}
        />
      </ImageWrapper>
      <BottomSide>
        <Title
          type="sm"
          text={formattedPrice}
          isPrice
        />
        <Text
          text={brand}
          type="md"
        />
        <Text
          text={model}
          type="md"
        />
        <LinkButton
          link={`/products/${id}`}
          text="BUY NOW"
        />
      </BottomSide>
    </Wrapper>
  );
};

export default ProductCard;

const Wrapper = styled.article`
  padding-top: 20px;
  flex-basis: calc(25% - 20px);
  height: 400px;
  background-color: ${colors.main};
  @media ${device.laptop} {
    flex-basis: calc(50% - 20px);
  }
  @media ${device.phone} {
    flex-basis: calc(100% - 20px);
  }
`;

const BottomSide = styled.footer`
  padding: 21px 30px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 250px;
    height: 180px;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
  }
`;
