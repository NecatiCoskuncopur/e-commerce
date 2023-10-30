import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { products } from 'data';

import Navbar from './Navbar';
import Contact from './Contact';
import MobileMenu from './MobileMenu';
import Cart from './Cart';

const Header = () => {
  const [openModal, setOpenModal] = useState({ direction: '', isOpen: false });

  const location = useLocation();

  const cart = products.slice(0, 4);

  const openModalHandler = (direction) => {
    setOpenModal({
      direction,
      isOpen: true,
    });
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    setOpenModal(false);
  }, [location]);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openModal]);

  return (
    <Container>
      <Contact />
      <Navbar
        openModalHandler={openModalHandler}
        openModal={openModal}
        data={cart}
      />
      {openModal.direction === 'left' && (
        <MobileMenu
          closeModalHandler={closeModalHandler}
          openModal={openModal}
        />
      )}
      {openModal.direction === 'right' && (
        <Cart
          closeModalHandler={closeModalHandler}
          openModal={openModal}
        />
      )}
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  margin-bottom: 40px;
`;
