// server/routes/menu.js
const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Get all items by vendor
router.get('/:vendor', (req, res) => {
  const { vendor } = req.params;
  db.query('SELECT * FROM menu WHERE vendor = ?', [vendor], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

// Admin - Add item
router.post('/add', (req, res) => {
  const { vendor, name, price } = req.body;
  db.query('INSERT INTO menu (vendor, name, price) VALUES (?, ?, ?)', [vendor, name, price], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true });
  });
});

// Admin - Delete item
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM menu WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true });
  });
});

module.exports = router;
