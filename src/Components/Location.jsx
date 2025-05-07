// components/Location.jsx

// src/pages/Location.jsx
// src/pages/Location.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // Optional: Show logo like login page

const Location = () => {
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState(localStorage.getItem('phone') || '');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!location) {
      alert('Please enter your location');
      return;
    }

    localStorage.setItem('userLocation', location);

    if (!phone) {
      alert("Phone number not found. Please login again.");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/user/save-location', {
        phone,
        location
      });

      if (res.data.success) {
        alert("Location saved to database!");
        navigate('/home');
      } else {
        alert("Failed to save location to database.");
      }
    } catch (error) {
      console.error("Error saving location to DB:", error);
      alert("Something went wrong while saving location.");
    }
    
    
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4 bg-white rounded shadow text-center" style={{ maxWidth: '400px', width: '100%' }}>
        <img src={logo} alt="Logo" style={{ width: '80px', height: '80px', marginBottom: '15px' }} />
        <h5 className="mb-3">ENTER YOUR LOCATION</h5>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="e.g., Block A, Room 105"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button className="btn btn-success w-100" onClick={handleSubmit}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Location;
