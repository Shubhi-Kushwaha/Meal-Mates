// server/routes/order.js
const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Create new order
router.post('/create', (req, res) => {
  const { user_id, items, total } = req.body;
  db.query('INSERT INTO orders (user_id, items, total, status) VALUES (?, ?, ?, ?)',
    [user_id, items, total, 'Pending'],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ success: true });
    });
});

// Get order history
router.get('/history/:user_id', (req, res) => {
  db.query('SELECT * FROM orders WHERE user_id = ?', [req.params.user_id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

module.exports = router;
