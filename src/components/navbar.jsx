import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from './images';
import Cart from './Cart';
import { useCart } from './CartContext';

const Navbar = () => {
  const [isCartVisible, setCartVisible] = useState(false);
  const { cartCount } = useCart();

  const toggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={images.logo} alt="" height="40px" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/cart">
              <img src={images.cart} alt="" height='30px'/>{' '}
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </li>
        </ul>
        <div className="cart-icon" onClick={toggleCart}>
      
        </div>
        {isCartVisible && <Cart />}
      </div>
    </nav>
  );
};

export default Navbar;
