import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Explore from './components/Explore';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage'; 
import { CartProvider } from './components/CartContext';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/cart" element={<CartPage />} /> 
              <Route path="/product-details/:productId" element={<ProductDetails />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
