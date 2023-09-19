import React, { useState } from 'react';
import { useCart } from './CartContext';
import Paystack from './Paystack'; // Import the Paystack component

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const [showPaymentForm, setShowPaymentForm] = useState(false); // State to control the display of the payment form

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const handleBuy = () => {
    // Toggle the display of the payment form when "Buy" button is clicked
    setShowPaymentForm(true);
  };

  const handlePurchaseAll = () => {
    // Toggle the display of the payment form when "Purchase All" button is clicked
    setShowPaymentForm(true);
  };

  return (
    <div className="container mt-4">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid"
                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p>{product.description}</p>
                    <p className="card-text">Price: GHC {product.price}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      Remove
                    </button>
                    <button
                      className="btn btn-primary ms-2"
                      onClick={handleBuy}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-end">
            <p>Total Price: GHC {calculateTotalPrice()}</p>
            <button className="btn btn-primary ms-2" onClick={handleBuy}>
              Purchase All
            </button>
          </div>
        </div>
      )}

      {/* Conditionally render the payment form */}
      {showPaymentForm && <Paystack />}
    </div>
  );
};

export default CartPage;
