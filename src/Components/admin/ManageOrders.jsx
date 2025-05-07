// components/admin/ManageOrders.jsx

import React from 'react';

function ManageOrders() {
  const orders = [
    { id: 101, student: 'Alice', items: 'Maggie x2', total: 90, status: 'Delivered' },
    { id: 102, student: 'Bob', items: 'Coffee x1', total: 50, status: 'Pending' }
  ];

  return (
    <div>
      <h4>Manage Orders</h4>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Student</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.student}</td>
              <td>{o.items}</td>
              <td>₹{o.total}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageOrders;
