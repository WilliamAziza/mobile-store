import React from 'react';
import { Link } from 'react-router-dom';
import { images } from './images';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/"><img src={images.logo} alt="" height='40px'/></Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
