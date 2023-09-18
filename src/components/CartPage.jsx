import React from 'react';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useCart(); // Get removeFromCart function from CartContext

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId); // Call removeFromCart function from CartContext
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
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
            <button className="btn btn-primary">Proceed to Payment</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
