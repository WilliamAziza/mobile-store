// Paystack.js
import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';

const Paystack = ({ totalAmount, onClose }) => {
  const publicKey = "pk_test_a57350bf0a6d0fe3e8dfba560572fa1ea744d19e";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount: totalAmount * 100, 
    currency: 'GHS',
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      alert("Thanks for doing business with us! Come back soon!!");
      onClose(); // Close the modal on success
    },
    onClose: () => {
      alert("Wait! You need this oil, don't go!!!!");
      onClose(); // Close the modal on close
    },
  };

  return (
    <div className="checkout-form">
      <div className="checkout-field">
        <label>Name</label>
        <br/>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="checkout-field">
        <label>Email</label>
        <br/>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="checkout-field">
        <label>Phone</label>
        <br/>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <PaystackButton className="paystack-button" {...componentProps} />
    </div>
  );
};

export default Paystack;
