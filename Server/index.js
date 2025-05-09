// server/index.js
// index.js
const express = require('express');
//const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Middleware
const cors = require('cors');
app.use(cors()); // <-- Add this to allow all origins temporarily for testing

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// Logger (optional)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');
const adminRoutes = require('./routes/admin');
const paymentRoutes = require('./routes/payment');


app.get('/', (req, res) => {
  res.send('Campus Food Ordering Backend is running!');
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/payments', paymentRoutes);
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Middleware
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Logger (optional)
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);

// Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');
const adminRoutes = require('./routes/admin');
const paymentRoutes = require('./routes/payment');

app.get('/', (req, res) => {
  res.send('Campus Food Ordering Backend is running!');
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/payments', paymentRoutes);

// Catch-all (optional)
const notFound = (req, res) => {
  res.status(404).send('Route not found');
};

app.use(notFound);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Catch-all (optional)
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
