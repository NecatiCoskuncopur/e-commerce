import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { AiTwotonePhone, AiFillHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { SlEnvolope } from 'react-icons/sl';

import { colors } from 'theme';

const TopSide = () => {
  return (
    <Wrapper>
      <Contact>
        <a href="tel:+0000 000 00">
          <span>
            <AiTwotonePhone size={20} />
          </span>
          +0000 000 00
        </a>
        <a href="mailto:test@gmail.com">
          <span>
            <SlEnvolope size={20} />
          </span>
          test@gmail.com
        </a>
      </Contact>

      <Link to="/">
        <img
          src="/images/logo.png"
          alt=""
        />
      </Link>

      <NavItem>
        <Link to="wishlist">
          <AiFillHeart size={22} />
        </Link>

        <Line />

        <Link to="basket">
          <FaShoppingCart size={22} />
        </Link>
      </NavItem>
    </Wrapper>
  );
};

export default TopSide;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  height: 70px;
  border-bottom: 1px solid black;

  img {
    height: 90px;
    object-fit: contain;
  }
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  :hover {
    color: ${colors.candleLight};
  }
  color: ${colors.grayChateau};
  a {
    display: flex;
    align-items: center;
    gap: 5px;

    span {
      margin-top: 4px;
      color: ${colors.candleLight};
    }
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${colors.grayChateau};
  :hover {
    color: ${colors.candleLight};
  }
`;

const Line = styled.span`
  width: 1px;
  background-color: ${colors.main};
  height: 20px;
`;
