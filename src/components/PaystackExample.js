import React from 'react';
import { usePaystackPayment } from 'react-paystack';

export default () => {
  const config = {
    reference: new Date().getTime(),
    email: 'user@example.com',
    amount: 20000,
    publicKey: 'pk_test_af91df84565095d59cdfb8868d0e7741e5bb19ff',
  };

  const initPaystack = usePaystackPayment(config);

  return (
    <div>
      <h1>Paystack Cookie test</h1>
      <br />
      <br />
      <h2>Pop up</h2>
      <button onClick={() => initPaystack()}>Pay</button>
    </div>
  );
};
