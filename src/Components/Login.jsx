// components/Login.jsx

// src/components/Login.jsx

// src/components/Login.jsx

// components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.jpeg';

function Login() {
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const sendOTP = () => {
    axios.post('http://localhost:5000/api/auth/send-otp', { phone })
      .then(res => {
        alert(res.data.message);
        if (res.data.success) {
          setOtpSent(true);
        }
      })
      .catch(err => {
        console.error('Error while sending OTP:', err);
        alert('Error sending OTP!');
      });
  };

  const verifyOTP = () => {
    axios.post('http://localhost:5000/api/auth/verify-otp', { phone, otp })
      .then(response => {
        alert(response.data.message);
        navigate('/location');
      })
      .catch(error => {
        console.error('OTP verification failed:', error);
        alert('Invalid OTP!');
      });
    localStorage.setItem('phone', phone);
    navigate('/location');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4 bg-white rounded shadow text-center" style={{ maxWidth: '400px', width: '100%' }}>
        <img src={logo} alt="Logo" style={{ width: '80px', height: '80px', marginBottom: '15px' }} />
        <h5 className="mb-3">LOGIN TO ORDER TASTY FOOD</h5>

        <input
          type="tel"
          placeholder="Enter phone number"
          className="form-control mb-3"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {otpSent ? (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="form-control mb-3"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button className="btn btn-success w-100" onClick={verifyOTP}>Verify OTP</button>
          </>
        ) : (
          <button className="btn btn-warning w-100" onClick={sendOTP}>Send OTP</button>
        )}
      </div>
    </div>
  );
}

export default Login;


