import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { Footer, Header } from 'components';
import { About, Basket, Products, Home, Wishlist, Product } from 'pages';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://64acabe19edb4181202fb3bb.mockapi.io/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            index
            element={<Home products={products} />}
          />
          <Route
            path="about"
            element={<About />}
          />
          <Route
            path="basket"
            element={<Basket />}
          />
          <Route
            path="products"
            element={<Products />}
          />
          <Route
            path="wishlist"
            element={<Wishlist />}
          />
          <Route
            path="/products/:id"
            element={<Product data={products} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
