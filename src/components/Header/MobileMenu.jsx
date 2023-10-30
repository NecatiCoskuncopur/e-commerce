import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

import { Modal } from 'components';
import { colors } from 'theme';
import { links } from 'data';

const MobileMenu = ({ closeModalHandler, openModal }) => {
  return (
    <Modal
      direction={openModal.direction}
      closeModalHandler={closeModalHandler}
      openModal={openModal}
    >
      <Wrapper>
        <LogoWrapper>
          <NavLink to="/">
            <img
              src="/images/logo-dark.png"
              alt="Logo"
            />
          </NavLink>
          <Button onClick={closeModalHandler}>
            <AiOutlineClose size={20} />
          </Button>
        </LogoWrapper>
        <List>
          {links.navLinks.map((item) => (
            <ListItem key={item.id}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </ListItem>
          ))}
        </List>
        <IconList>
          <li>
            <StyledNavLink to="/wishlist">
              <IconWrapper>
                <AiOutlineHeart />
                <sup>3</sup>
              </IconWrapper>
              <span>Wishlist</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/cart">
              <IconWrapper>
                <AiOutlineShoppingCart />
                <sup>5</sup>
              </IconWrapper>
              <span>Shopping Cart</span>
            </StyledNavLink>
          </li>
        </IconList>
        <SocialMediaList>
          {links.socialMedia.map((item) => (
            <SocialMediaListItem key={item.id}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            </SocialMediaListItem>
          ))}
        </SocialMediaList>
      </Wrapper>
    </Modal>
  );
};

export default MobileMenu;

const Wrapper = styled.div`
  padding-right: 20px;
  color: ${colors.nevada};
`;

const LogoWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid ${colors.gallery};
  margin-bottom: 25px;
`;

const Button = styled.button`
  background-color: transparent;
  color: ${colors.mineShaft};
  cursor: pointer;
`;

const List = styled.ul`
  padding-bottom: 15px;
  border-bottom: 1px solid ${colors.gallery};
`;

const ListItem = styled.li`
  font-size: 14px;
  padding: 8px 24px 8px 0;
  text-transform: uppercase;
  margin-top: 16px;
  transition: 0.3s all ease;
  &:hover {
    color: ${colors.gossamer};
  }
`;

const IconList = styled.ul`
  padding: 5px 0 20px;
  margin: 30px 0;
  border-bottom: 1px solid ${colors.gallery};
  li {
    margin-top: 16px;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  transition: 0.3s all ease;
  &:hover {
    color: ${colors.gossamer};
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid ${colors.mystic};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 48px;
  sup {
    font-size: 10px;
    position: relative;
    top: -8px;
    right: -5px;
  }
`;

const SocialMediaList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SocialMediaListItem = styled.li`
  width: 40px;
  height: 40px;
  background-color: ${colors.aquaHaze};

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s all ease;
  &:hover {
    background-color: ${colors.gossamer};
    color: ${colors.main};
  }
`;
