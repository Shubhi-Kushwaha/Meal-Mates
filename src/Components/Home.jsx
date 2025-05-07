import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // Ensure this path is correct
import CanteenMenu from '../Menu/CanteenMenu';
import BrioMenu from '../Menu/BrioMenu';
import AvisCafeMenu from '../Menu/AvisCafeMenu';

function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('canteen');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo" width="40" height="40" />
          <h5 className="ms-2 mb-0">MealMates</h5>
        </div>

        <div className="ms-auto">
          <button className="btn btn-outline-success me-2" onClick={() => navigate('/gogreen')}>Go Green</button>
          <button className="btn btn-outline-warning me-2" onClick={() => navigate('/cart')}>Cart</button>
          <div className="dropdown">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              width="35"
              height="35"
              className="rounded-circle dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: 'pointer' }}
            />
            <ul className="dropdown-menu dropdown-menu-end">
              <li className="px-3 py-2">
                <strong>Edit Info</strong>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control my-1"
                  defaultValue={localStorage.getItem('userName') || ''}
                  onBlur={(e) => localStorage.setItem('userName', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="form-control"
                  defaultValue={localStorage.getItem('phone') || ''}
                  disabled
                />
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li><button className="dropdown-item">Order History</button></li>
              <li><button className="dropdown-item">Feedback</button></li>
              <li><button className="dropdown-item">Contact Us</button></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Menu Tabs */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Campus Food Ordering</h2>

        {/* Bootstrap Nav Tabs */}
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'canteen' ? 'active' : ''}`}
              onClick={() => setActiveTab('canteen')}
            >
              Canteen
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'brio' ? 'active' : ''}`}
              onClick={() => setActiveTab('brio')}
            >
              Brio
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'avisCafe' ? 'active' : ''}`}
              onClick={() => setActiveTab('avisCafe')}
            >
              Avi's Cafe
            </button>
          </li>
        </ul>

        {/* Render Menus Based on Active Tab */}
        {activeTab === 'canteen' && <CanteenMenu addToCart={addToCart} />}
        {activeTab === 'brio' && <BrioMenu addToCart={addToCart} />}
        {activeTab === 'avisCafe' && <AvisCafeMenu addToCart={addToCart} />}

      </div>
    </div>
  );
}

export default Home;
