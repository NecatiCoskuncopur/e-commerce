import { createContext, useState } from 'react';

export const CartContext = createContext({
  items: [],
  addToCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  wishlistItems: [],
  addToWishlist: () => {},
  deleteFromWishlist: () => {},
});

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (item, quantity = 1) => {
    const cartItem = {
      id: item.id,
      quantity,
      image: item.image,
      name: item.name,
      price: item.price,
      path: item.path,
    };
    const cartId = cartProducts.map((i) => i.id);
    if (cartId.indexOf(item.id) === -1) {
      setCartProducts([...cartProducts, cartItem]);
    } else {
      setCartProducts(cartProducts.map((product) => (product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product)));
    }
  };

  const deleteFromCart = (id) => {
    const filteredCart = cartProducts.filter((item) => item.id !== id);
    setCartProducts(filteredCart);
  };

  const getTotalCost = () => {
    let totalCost = 0;
    cartProducts.map((item) => {
      return (totalCost += item.price * item.quantity);
    });
    return totalCost;
  };

  const addToWishlist = (item) => {
    const wishlistItem = {
      id: item.id,
      image: item.image,
      name: item.name,
      price: item.price,
      path: item.path,
    };
    const wishlistId = wishlist.map((i) => i.id);
    if (wishlistId.indexOf(item.id) === -1) {
      setWishlist([...wishlist, wishlistItem]);
    } else {
    }
  };

  const deleteFromWishlist = (id) => {
    const filteredWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(filteredWishlist);
  };

  const contextValue = {
    items: cartProducts,
    addToCart,
    deleteFromCart,
    getTotalCost,
    wishlistItems: wishlist,
    addToWishlist,
    deleteFromWishlist,
  };
  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
