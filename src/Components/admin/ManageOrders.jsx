import React, { useState } from 'react';

function Cart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const [noExtraPackaging, setNoExtraPackaging] = useState(false);

  const handlePlaceOrder = () => {
    const orderData = {
      items: cart,
      noExtraPackaging,  // <- this matches with backend req.body.noExtraPackaging
      user_id: userId,
      total_price: calculateTotal(cart),
    };
    

    // Example fetch call
    fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Order placed successfully!');
        localStorage.removeItem('cart');
        // redirect or reset state if needed
      })
      .catch((err) => {
        console.error('Order failed', err);
        alert('Order failed!');
      });
  };

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

      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="noExtraPackaging"
          checked={noExtraPackaging}
          onChange={(e) => setNoExtraPackaging(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="noExtraPackaging">
          I don't want extra packaging (Go Green 🌱)
        </label>
      </div>

      {cart.length > 0 && (
        <button className="btn btn-success mt-3" onClick={handlePlaceOrder}>
          Place Order
        </button>
      )}
    </div>
  );
}

export default Cart;

