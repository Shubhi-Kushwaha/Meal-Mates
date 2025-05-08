import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [phone, setPhone] = useState('');

  const markContainerReturned = async () => {
    try {
      await axios.patch('http://localhost:5000/api/admin/mark-container-returned', { phone });
      alert('User marked for recycled container discount!');
    } catch (err) {
      alert('Failed to mark returned.');
    }
  };

  return (
    <div className="container mt-4">
      <h4>Mark Container as Returned</h4>
      <input
        type="text"
        className="form-control my-2"
        placeholder="User phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button className="btn btn-success" onClick={markContainerReturned}>Mark as Returned</button>
    </div>
  );
};

export default AdminDashboard;
