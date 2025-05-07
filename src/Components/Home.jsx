import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import "../styles/HeaderStyle.css";
import canteenImg from '../assets/canteen.jpeg';
import brioImg from '../assets/brio.jpeg';
import avisCafeImg from '../assets/avisCafe.jpeg';
import StationaryImg from '../assets/stationary.jpeg';
import CanteenMenu from '../Menu/CanteenMenu';
import BrioMenu from '../Menu/BrioMenu';
import AvisCafeMenu from '../Menu/AvisCafeMenu';
import StationaryMenu from '../Menu/StationaryMenu';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  


  //const handleMenuClick = (vendor) => {
  //  setActiveTab(vendor);
  //};
  const handleMenuClick = (vendor) => {
    navigate(`/${vendor}`);
  };
  

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo" width="40" height="40" />
          <h5 className="ms-2 mb-0">MealMates</h5>
        </div>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to ="/">Home</Nav.Link>
            <Nav.Link as={Link} to ="/about" >About</Nav.Link>
            <Nav.Link as={Link} to ="/contact" >Contact</Nav.Link>
            <Nav.Link as={Link} to ="/GoGreen" ><button className="btn btn-outline-success me-2" onClick={() => navigate('/gogreen')}>Go Green</button></Nav.Link>
            <Nav.Link as={Link} to ="/cart" ><div className="cart"><button className="btn btn-outline-warning me-2" onClick={() => navigate('/cart')}><i class="bi bi-bag fs-5"></i></button></div></Nav.Link>
            <Nav.Link as={Link} to="/login">
              <button className="btn btn-primary">Login / Signup</button>
           </Nav.Link>
            <Nav.Link as={Link} to ="/info" ><div className="ms-auto">
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
        </div></Nav.Link>
        
            
          </Nav>
        </Navbar.Collapse>
        
      </nav>

      {/* Menu Options */}
      <div className="container text-center mt-4" style={{ backgroundColor: 'MediumAquaMarine' }}>
        <h2>Menu</h2>
        <div className="row" >
          <div className="col-md-4 my-3">
            <div
              className="card"
              onClick={() => handleMenuClick('canteen')}
              style={{ cursor: 'pointer' }}
            >
              <img src={canteenImg} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="Canteen" />
              <div className="card-body">
                <h5 className="card-title">Canteen</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <div
              className="card"
              onClick={() => handleMenuClick('brio')}
              style={{ cursor: 'pointer' }}
            >
              <img src={brioImg} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="Brio" />
              <div className="card-body">
                <h5 className="card-title">Brio</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <div
              className="card"
              onClick={() => handleMenuClick('avisCafe')}
              style={{ cursor: 'pointer' }}
            >
              <img src={avisCafeImg} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="Avis Cafe" />
              <div className="card-body">
                <h5 className="card-title">Avis Cafe</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <div
              className="card"
              onClick={() => handleMenuClick('stationary')}
              style={{ cursor: 'pointer' }}
            >
              <img src={StationaryImg} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="Stationary" />
              <div className="card-body">
                <h5 className="card-title">Stationary</h5>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Home;








