// components/admin/ManageMenu.jsx

import React, { useState } from 'react';

function ManageMenu() {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Veg Sandwich', price: 40 },
    { id: 2, name: 'Cold Coffee', price: 50 }
  ]);
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  const handleAdd = () => {
    const nextId = menuItems.length ? menuItems[menuItems.length - 1].id + 1 : 1;
    setMenuItems([...menuItems, { id: nextId, ...newItem }]);
    setNewItem({ name: '', price: '' });
  };

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <h4>Manage Menu Items</h4>
      <div className="d-flex my-3">
        <input
          type="text"
          placeholder="Item name"
          className="form-control me-2"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          className="form-control me-2"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <button className="btn btn-success" onClick={handleAdd}>Add</button>
      </div>

      <ul className="list-group">
        {menuItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name} - ₹{item.price}
            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageMenu;
