// server/routes/user.js
const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Update location and name
router.post('/update', (req, res) => {
  const { phone, name, location } = req.body;
  db.query('UPDATE users SET name = ?, location = ? WHERE phone = ?', [name, location, phone], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true });
  });
});

// Get user by phone
router.get('/:phone', (req, res) => {
  db.query('SELECT * FROM users WHERE phone = ?', [req.params.phone], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
});
// Save user location
router.post('/save-location', (req, res) => {
  const { phone, location } = req.body;

  if (!phone || !location) {
    return res.status(400).json({ success: false, message: 'Phone and location are required' });
  }

  db.query(
    'INSERT INTO user_locations (phone, location) VALUES (?, ?)',
    [phone, location],
    (err, result) => {
      if (err) {
        console.error('DB error:', err);
        return res.status(500).json({ success: false, message: 'Database error' });
      }
      res.json({ success: true, message: 'Location saved successfully' });
    }
  );
});


module.exports = router;
