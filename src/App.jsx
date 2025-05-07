import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Location from './components/Location';
import Home from './components/Home';
import GoGreen from './components/GoGreen';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Info from './components/Info';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/location" element={<Location />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gogreen" element={<GoGreen />} />
        <Route path="/menu/:vendor" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/info" element={<Info />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;