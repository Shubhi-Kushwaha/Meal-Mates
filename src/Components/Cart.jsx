// components/Menu.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Menu() {
  const { vendor } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // TODO: Fetch menu from backend using vendor
    setItems([
      { id: 1, name: 'Veg Sandwich', price: 40 },
      { id: 2, name: 'Cold Coffee', price: 50 },
      { id: 3, name: 'Maggie Special', price: 45 }
    ]);
  }, [vendor]);

  const addToCart = (item) => {
    // TODO: Add item to cart (via context or localStorage)
    alert(`Added ${item.name} to cart`);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-capitalize">{vendor} Menu</h2>
      <div className="list-group mt-3">
        {items.map((item) => (
          <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.name} - ₹{item.price}</span>
            <button className="btn btn-outline-primary" onClick={() => addToCart(item)}>ADD +</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
