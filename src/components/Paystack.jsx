import React from 'react';
import axios from 'axios';

const Paystack = ({ amount, email, onSuccess, onClose }) => {
  const initializePayment = async () => {
    try {
      const response = await axios.post(
        'https://api.paystack.co/transaction/initialize',
        {
          email,
          amount: amount * 100, // Paystack uses amount in kobo (1 NGN = 100 kobo)
        },
        {
          headers: {
            Authorization: `pk_test_1ebcaed19c19e09b17d1cdf61bcd3b9facb48a24`,
          },
        }
      );

      const { data } = response;
      window.location.href = data.data.authorization_url;
    } catch (error) {
      console.error('Error initializing payment:', error);
    }
  };

  return (
    <button className="btn btn-primary" onClick={initializePayment}>
      Pay with Paystack
    </button>
  );
};

export default Paystack;
