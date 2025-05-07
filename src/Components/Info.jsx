// components/Info.jsx

import React from 'react';

function Info() {
  return (
    <div className="container mt-4">
      <h2>Student Info</h2>
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Phone:</strong> 9876543210</p>

      <h4 className="mt-4">Order History</h4>
      <ul className="list-group">
        <li className="list-group-item">01 May - Maggie x2 - ₹90</li>
        <li className="list-group-item">28 April - Sandwich x1 - ₹40</li>
      </ul>

      <h4 className="mt-4">Feedback</h4>
      <textarea className="form-control" rows="3" placeholder="Write your feedback here..." />

      <h4 className="mt-4">Contact Us</h4>
      <p>Email: support@campusdine.com</p>
      <p>Phone: +91-1234567890</p>
    </div>
  );
}

export default Info;
