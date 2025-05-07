// server/routes/admin.js
const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Admin login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM admin WHERE username = ? AND password = ?', [username, password], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length > 0) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});

// Get all users
router.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

// Get all orders
router.get('/orders', (req, res) => {
  db.query('SELECT * FROM orders', (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

module.exports = router;
