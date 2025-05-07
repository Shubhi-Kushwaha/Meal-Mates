// client/src/menus/CanteenMenu.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // ✅ your context

const canteenMenu = [
  // Snacks
  { name: "Samosa", price: 10 },
  { name: "Chola Samosa", price: 30 },
  { name: "Bread Pakoda", price: 10 },
  { name: "Patties (Aloo)", price: 20 },
  { name: "Patties (Paneer)", price: 30 },
  { name: "Poha", price: 30 },
  { name: "Bread Butter", price: 30 },
  { name: "Grilled Sandwich (with 250ml Coke)", price: 80 },
  { name: "Cheese Sandwich", price: 60 },
  { name: "Paneer Sandwich", price: 60 },
  { name: "Aloo Sandwich", price: 50 },
  { name: "Egg Sandwich", price: 70 },
  { name: "Paneer Pakoda", price: 100 },
  { name: "Onion Pakoda", price: 50 },
  { name: "Chola Chawal", price: 40 },
  { name: "Chola Bhatura", price: 60 },
  { name: "Vada Pav", price: 30 },
  { name: "Khasta", price: 20 },
  { name: "Chole Puri", price: 40 },

  // Chinese
  { name: "Veg Chowmein", price: 50 },
  { name: "Paneer Chowmein", price: 80 },
  { name: "Egg Chowmein", price: 80 },
  { name: "Veg Fried Rice", price: 50 },
  { name: "Egg Fried Rice", price: 70 },
  { name: "Chow Rice", price: 80 },
  { name: "Paneer Fried Rice", price: 70 },
  { name: "Veg Biryani", price: 60 },
  { name: "Pav Bhaji (with 250ml Coke)", price: 70 },
  { name: "Manchurian", price: 80 },
  { name: "Chilli Paneer", price: 100 },
  { name: "Chilli Potato", price: 70 },
  { name: "French Fries", price: 70 },
  { name: "Pasta", price: 70 },
  { name: "White Sauce Pasta", price: 80 },
  { name: "Macroni", price: 70 },
  { name: "Honey Chilli Potato", price: 70 },
  { name: "Momos (Steam)", price: 60 },
  { name: "Fried Momos", price: 70 },
  { name: "Kurkure Momos", price: 70 },

  // Maggi
  { name: "Plain Maggi", price: 40 },
  { name: "Veg Maggi", price: 50 },
  { name: "Masala Maggi", price: 60 },
  { name: "Paneer Maggi", price: 70 },
  { name: "Egg Maggi", price: 60 },

  // South Indian
  { name: "Paper Dosa", price: 50 },
  { name: "Masala Dosa (with 250ml Coke)", price: 80 },
  { name: "Paneer Dosa", price: 100 },
  { name: "Idly", price: 40 },
  { name: "Veg Uttapam", price: 80 },
  { name: "Paneer Uttapam", price: 100 },
  { name: "Onion Uttapam", price: 80 },

  // Pizza
  { name: "Veg Pizza", price: 80 },
  { name: "Paneer Pizza", price: 120 },

  // Beverages
  { name: "Tea", price: 10 },
  { name: "Coffee", price: 10 },
  { name: "Cold Coffee", price: 40 },
  { name: "Lassi", price: 30 },

  // Paratha
  { name: "Paneer Paratha", price: 80 },
  { name: "Aloo Paratha", price: 60 },
  { name: "Onion Paratha", price: 60 },
  { name: "Egg Paratha", price: 70 },
  { name: "Plain Paratha", price: 20 },
  { name: "Keema Paratha", price: 90 },
  { name: "Keema Rumali", price: 100 },

  // Rolls
  { name: "Egg Roll", price: 50 },
  { name: "Paneer Roll", price: 70 },
  { name: "Veg Roll", price: 30 },
  { name: "Kabab Roll", price: 100 },
  { name: "Egg Chowmein Roll", price: 50 },
  { name: "Spring Roll", price: 50 },

  // Burger
  { name: "Cheese Burger", price: 60 },
  { name: "Paneer Burger", price: 80 },
  { name: "Egg Burger", price: 60 },

  // Egg
  { name: "Omelette", price: 50 },
  { name: "Half Fry", price: 50 },
  { name: "Boiled Egg", price: 15 },
  { name: "Egg Pakoda", price: 25 },
  { name: "Egg Bhurji", price: 50 },
  { name: "Egg Curry", price: 60 },

  // Combos
  { name: "Manchurian + Fried Rice", price: 120 },
  { name: "Manchurian + Chowmein", price: 120 },
  { name: "Chow Rice", price: 80 },
  { name: "Chilli Paneer + Fried Rice", price: 150 },
  { name: "Chilli Paneer + Chowmein", price: 150 },
  { name: "Special Combo", price: 200 },
  { name: "Burger (with 250ml Coke)", price: 70 },
  { name: "Spring Roll (with 250ml Coke)", price: 70 },

  // Soups
  { name: "Corn Cup", price: 40 },
  { name: "Manchow Soup", price: 40 },
  { name: "Hot & Sour Soup", price: 40 },
  { name: "Tomato Chatpata Soup", price: 40 },

  // Desserts
  { name: "Rasgulla", price: 15 },
  { name: "Gulab Jamun", price: 15 },
  { name: "Gujiya", price: 15 },
];

const CanteenMenu = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // ✅ fix this
  return (

    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate('/')}>
        Back to Home
      </button>
      <h5 className="mb-3">Canteen Menu</h5>
      <div className="row">
        {canteenMenu.map((item, index) => (
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

export default CanteenMenu;
