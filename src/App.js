import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Explore from './components/Explore';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage'; // Import the CartPage component
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/cart" element={<CartPage />} /> {/* Add this route */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
