import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Location from './components/Location';
import GoGreen from './components/GoGreen';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Info from './components/Info';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import ManageMenu from './components/admin/ManageMenu';
import ManageOrders from './components/admin/ManageOrders';
import ManageUsers from './components/admin/ManageUsers';
import Payments from './components/admin/Payments';
import CanteenMenu from './Menu/CanteenMenu';
import BrioMenu from './Menu/BrioMenu';
import AvisCafeMenu from './Menu/AvisCafeMenu';
import StationaryMenu from './Menu/StationaryMenu';
import About from './Pages/About.jsx'; 
import RefundPolicy from './Pages/RefundPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';// or '../Pages/About.jsx'
//import AdminLogin from './Pages/admin/AdminLogin.jsx';
//import AdminDashboard from './Pages/admin/AdminDashboard.jsx';
import ContactUs from './Pages/ContactUs';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/location" element={<Location />} />
      <Route path="/gogreen" element={<GoGreen />} />
      <Route path="/menu/:vendor" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/info" element={<Info />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/menu" element={<ManageMenu />} />
      <Route path="/admin/orders" element={<ManageOrders />} />
      <Route path="/admin/users" element={<ManageUsers />} />
      <Route path="/admin/payments" element={<Payments />} />
      <Route path="/canteen" element={<CanteenMenu />} />
      <Route path="/brio" element={<BrioMenu />} />
      <Route path="/aviscafe" element={<AvisCafeMenu />} />
      <Route path="/stationary" element={<StationaryMenu />} />
      <Route path="/about" element={<About />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
      <Route path="/contact" element={<ContactUs />} />
      
      
    </Routes>
  );
}

export default App;


