const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Create new order with eco-option
router.post('/create', (req, res) => {
  const { user_id, items: cartItems, total, noExtraPackaging, isBulk } = req.body;

  // Insert order
  db.query(
    'INSERT INTO orders (user_id, items, total, status, no_extra_packaging, is_bulk) VALUES (?, ?, ?, ?, ?, ?)',
    [user_id, JSON.stringify(cartItems), total, 'Pending', noExtraPackaging, isBulk],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });

      const orderId = result.insertId;

      // Insert each item into order_items
      const insertItems = cartItems.map(item => {
        return new Promise((resolve, reject) => {
          db.query(
            'INSERT INTO order_items (order_id, item_id, item_name, price, quantity) VALUES (?, ?, ?, ?, ?)',
            [orderId, item.id, item.name, item.price, item.quantity || 1],
            (err) => {
              if (err) reject(err);
              else resolve();
            }
          );
        });
      });

      Promise.all(insertItems)
        .then(() => res.json({ success: true, orderId }))
        .catch(err => res.status(500).json({ error: 'Failed to insert order items' }));
    }
  );
});

// Get order history
router.get('/history/:user_id', (req, res) => {
  db.query('SELECT * FROM orders WHERE user_id = ?', [req.params.user_id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

module.exports = router;

