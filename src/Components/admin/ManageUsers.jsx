// components/admin/ManageUsers.jsx

import React from 'react';

function ManageUsers() {
  const users = [
    { id: 1, name: 'Alice', phone: '9876543210' },
    { id: 2, name: 'Bob', phone: '9123456780' }
  ];

  return (
    <div>
      <h4>Registered Users</h4>
      <ul className="list-group mt-3">
        {users.map(user => (
          <li key={user.id} className="list-group-item">
            {user.name} - {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageUsers;
