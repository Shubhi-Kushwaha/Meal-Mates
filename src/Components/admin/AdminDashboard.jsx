// components/admin/AdminDashboard.jsx

import React, { useState } from 'react';
import ManageMenu from './ManageMenu';
import ManageOrders from './ManageOrders';
import ManageUsers from './ManageUsers';
import Payments from './Payments';

function AdminDashboard() {
  const [tab, setTab] = useState('menu');

  const renderTab = () => {
    switch (tab) {
      case 'menu': return <ManageMenu />;
      case 'orders': return <ManageOrders />;
      case 'users': return <ManageUsers />;
      case 'payments': return <Payments />;
      default: return <ManageMenu />;
    }
  };

  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>
      <div className="btn-group mb-3">
        <button className="btn btn-outline-dark" onClick={() => setTab('menu')}>Manage Menu</button>
        <button className="btn btn-outline-dark" onClick={() => setTab('orders')}>Orders</button>
        <button className="btn btn-outline-dark" onClick={() => setTab('users')}>Users</button>
        <button className="btn btn-outline-dark" onClick={() => setTab('payments')}>Payments</button>
      </div>
      <div>{renderTab()}</div>
    </div>
  );
}

export default AdminDashboard;
