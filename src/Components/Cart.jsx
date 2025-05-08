import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [noExtraPackaging, setNoExtraPackaging] = useState(false);
  const [isBulk, setIsBulk] = useState(false);
  const [total, setTotal] = useState(0);
  const user_id = 1; // Replace with actual user ID (e.g., from auth context or localStorage)

  // Load cart items with quantity
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartWithQuantity = storedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCartItems(cartWithQuantity);
  }, []);

  // Update total price when cart changes
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  const updateQuantity = (index, newQty) => {
    const newCart = [...cartItems];
    newCart[index].quantity = newQty;
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart)); // Sync with localStorage
  };

  const handlePlaceOrder = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/orders/create', {
        user_id,
        items: cartItems,
        total,
        noExtraPackaging,
        isBulk,
      });

      if (response.data.success) {
        alert('Order placed successfully!');
        localStorage.removeItem('cart');
        setCartItems([]);
      }
    } catch (error) {
      console.error('Order failed', error);
      alert('Order failed!');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="d-flex justify-content-between align-items-center border p-2">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
              className="form-control w-25 ms-2"
            />
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

      <div className="form-check mt-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="bulkOrder"
          checked={isBulk}
          onChange={(e) => setIsBulk(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="bulkOrder">
          This is a Bulk Order
        </label>
      </div>

      {cartItems.length > 0 && (
        <>
          <h5 className="mt-3">Total: ₹{total}</h5>
          <button className="btn btn-success mt-3" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
