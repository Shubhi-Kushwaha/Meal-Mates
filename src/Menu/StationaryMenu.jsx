
import React from 'react';

function Cart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="d-flex justify-content-between border p-2">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;

 