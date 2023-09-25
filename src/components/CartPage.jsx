import React, { useState } from 'react';
import { useCart } from './CartContext';
import Paystack from './Paystack'; // Import the Paystack component
import Modal from 'react-bootstrap/Modal'; // Import Bootstrap modal component
import { images } from './images';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart(); // Add clearCart function
  const [showPaymentModal, setShowPaymentModal] = useState(false); // State to control the display of the payment modal

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const handlePurchaseAll = () => {
    // Toggle the display of the payment modal when "Purchase All" button is clicked
    setShowPaymentModal(true);
  };

  // Function to handle clearing the cart
  const handlePaymentSuccess = () => {
    clearCart();
    setShowPaymentModal(false); // Close the payment modal
  };

  return (
    <div className="container mt-4">
      {cart.length === 0 ? (
        <p className='cartt'>Your cart is empty.</p>
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
                  <img
                    src={images[product.imageKey]}
                    alt={product.title}
                    className="img-fluid"
                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                  />


                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h5 className="card-title">{product.name}</h5>
                    <p>{product.description}</p>
                    <p className="card-text">Price: GHC {product.price}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-end">
            <p>Total Price: GHC {calculateTotalPrice()}</p>
            <button className="btn btn-primary ms-2" onClick={handlePurchaseAll}>
              Purchase 
            </button>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Paystack totalAmount={calculateTotalPrice()} onSuccess={handlePaymentSuccess} onClose={() => setShowPaymentModal(false)} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CartPage;
