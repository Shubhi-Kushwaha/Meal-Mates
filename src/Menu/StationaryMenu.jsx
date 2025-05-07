
  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  import { useCart } from '../context/CartContext';
  const stationaryMenu = [
    // Snacks
    { id: 1, name: "Notebook", price: 50 },
    { id: 2, name: "Pen", price: 10 },
    { id: 3, name: "Pencil", price: 5 },
  ];
  
  const StationaryMenu = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    return (
      <div className="container mt-4">
        <button className="btn btn-secondary mb-3" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
        <h5 className="mb-3">Stationary Menu</h5>
        <div className="row">
          {stationaryMenu.map((item, index) => (
            <div className="col-md-6 mb-3" key={index}>
              <div className="d-flex justify-content-between align-items-center border p-2 rounded">
                <div>
                  <strong>{item.name}</strong>
                  <div>₹{item.price}</div>
                </div>
                <button className="btn btn-sm btn-success" onClick={() => addToCart(item)}>
                  Add +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default StationaryMenu;
  