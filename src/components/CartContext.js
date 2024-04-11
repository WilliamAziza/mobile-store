import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    setCartCount(cartCount - 1);
  };

  const clearCart = () => {
    setCart([]); 
    setCartCount(0); 
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
