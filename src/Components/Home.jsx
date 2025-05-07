// components/Home.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // make sure this image exists
import CanteenMenu from '../Menu/CanteenMenu';
<CanteenMenu onAddToCart={handleAddToCart} />
import BrioMenu from '../Menu/BrioMenu';
<BrioMenu onAddToCart={handleAddToCart} />
import AvisCafeMenu from '../Menu/AvisCafeMenu';
<AvisCafeMenu onAddToCart={handleAddToCart} />


function Home() {
  const navigate = useNavigate();

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

      {/* Menu Options */}
      <div className="container text-center mt-4">
        <h2>Menu</h2>
        <div className="row">
          {['canteen', 'brio', 'maggie'].map((vendor, i) => (
            <div className="col-md-4 my-3" key={vendor}>
              <div
                className="card"
                onClick={() => navigate(`/menu/${vendor}`)}
                style={{ cursor: 'pointer' }}
              >
                <img src={`/images/${vendor}.jpg`} className="card-img-top" alt={vendor} />
                <div className="card-body">
                  <h5 className="card-title text-capitalize">{vendor.replace('-', ' ')}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
