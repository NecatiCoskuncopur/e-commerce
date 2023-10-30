import { Routes, Route } from 'react-router-dom';

import { Footer, Header } from 'components';
import { About, Cart, Checkout, Contact, Home, News, NewsDetail, Product, Products, Wishlist } from 'pages';

import CartProvider from 'context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <main>
        <Header />
        <Routes>
          <Route
            index
            element={<Home />}
          />

          <Route
            path="about"
            element={<About />}
          />

          <Route
            path="products"
            element={<Products />}
          />
          <Route
            path="/products/:path"
            element={<Product />}
          />
          <Route
            path="news"
            element={<News />}
          />
          <Route
            path="/news/:id"
            element={<NewsDetail />}
          />
          <Route
            path="contact"
            element={<Contact />}
          />
          <Route
            path="wishlist"
            element={<Wishlist />}
          />
          <Route
            path="cart"
            element={<Cart />}
          />
          <Route
            path="checkout"
            element={<Checkout />}
          />
        </Routes>
        <Footer />
      </main>
    </CartProvider>
  );
};

export default App;
