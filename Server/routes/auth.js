// server/routes/auth.js

const express = require('express');
const router = express.Router();
const db = require('../models/db'); // Adjust path if needed
require('dotenv').config(); // Load .env variables
const axios = require('axios');

// In-memory OTP store (for demo/testing)
let otpStore = {};

// Function to send OTP via Fast2SMS
const sendOTP = async (mobile, otp) => {
  try {
    const res = await axios.get("https://www.fast2sms.com/dev/bulkV2", {
      params: {
        authorization: process.env.FAST2SMS_API_KEY,
        variables_values: otp,
        route: "otp",
        numbers: mobile,
      },
    });
    console.log("✅ OTP sent via Fast2SMS:", res.data);
  } catch (error) {
    console.error("❌ OTP sending failed:", error.response?.data || error.message);
    throw error;
  }
};

// POST /send-otp
router.post('/send-otp', (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ success: false, message: 'Phone number is required' });
  }

  // Generate random 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[phone] = otp;

  sendOTP(phone, otp)
    .then(() => {
      console.log(`🔐 OTP sent to ${phone}: ${otp}`);
      res.json({ success: true, message: 'OTP sent successfully' });
    })
    .catch(() => {
      res.status(500).json({ success: false, message: 'Failed to send OTP' });
    });
});

// POST /verify-otp
router.post('/verify-otp', (req, res) => {
  const { phone, otp } = req.body;

  if (!phone || !otp) {
    return res.status(400).json({ success: false, message: 'Phone and OTP required' });
  }

  if (otpStore[phone] !== otp) {
    return res.status(401).json({ success: false, message: 'Invalid OTP' });
  }

  delete otpStore[phone]; // Clear OTP after use

  // Check or create user in DB
  db.query('SELECT * FROM users WHERE phone = ?', [phone], (err, results) => {
    if (err) return res.status(500).json({ success: false, error: err });

    if (results.length === 0) {
      db.query('INSERT INTO users (phone) VALUES (?)', [phone], (insertErr) => {
        if (insertErr) return res.status(500).json({ success: false, error: insertErr });
        return res.json({ success: true, message: 'User created and OTP verified' });
      });
    } else {
      return res.json({ success: true, message: 'OTP verified. User exists' });
    }
  });
});

module.exports = router;


