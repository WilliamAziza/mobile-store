import React from 'react';
import { useCart } from './CartContext';
import Paystack from './Paystack'; // Import the Paystack component
import axios from 'axios';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const handleBuy = async () => {
    // Add your buy logic here
    const totalPrice = calculateTotalPrice();

    try {
      // Replace with your server endpoint for creating an order
      const response = await axios.post('/api/createOrder', {
        cart,
        totalPrice,
      });

      // The response should contain information needed for payment, like an order ID
      const { orderId } = response.data;

      // Redirect to Paystack for payment
      window.location.href = `/paystack?orderId=${orderId}&totalPrice=${totalPrice}`;
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product.image} alt={product.title} className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
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
            <Paystack
              amount={calculateTotalPrice()} // Pass the total amount to Paystack component
              email="williamaziza37@gmail.com" // Pass the customer's email
              onSuccess={() => {
                alert('Payment successful!');
                // Add logic here to mark the items as purchased in your app
              }}
              onClose={() => {
                alert('Payment was canceled.');
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
