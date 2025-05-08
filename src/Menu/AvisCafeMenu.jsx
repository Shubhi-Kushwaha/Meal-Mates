import React from 'react';
import { useNavigate } from 'react-router-dom';
const addToCart = (item) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${item.name} added to cart!`);
};


const avisCafeMenu = [
  //Momos
  { name: "Veg Momos (Steam)", price: 40 },
  { name: "Paneer Momos (Steam)", price: 50 },
  { name: "Veg Momos (Fried)", price: 50 },
  { name: "Paneer Momos (Fried)", price: 60 },
  { name: "Tandoori Veg Momos", price: 70 },
  { name: "Tandoori Paneer Momos", price: 80 },
  { name: "Peri Peri Veg Momos", price: 70 },
  { name: "Peri Peri Paneer Momos", price: 80 },
  { name: "Kurkure Veg Momos", price: 70 },
  { name: "Kurkure Paneer Momos", price: 80 },
  { name: "Kurkure Peri Peri Momos", price: 100 },

  //Maggi
  { name: "Plain Maggi", price: 40 },
  { name: "Veg Maggi", price: 50 },
  { name: "Paneer Maggi", price: 60 },
  { name: "Cheese Veg Maggi", price: 60 },
  { name: "Cheese Paneer Maggi", price: 70 },

  // Pizza
  { name: "Veg Cheese Pizza", price: 75 },
  { name: "Onion-Capsicum-Tomato Pizza", price: 85 },
  { name: "Veg Onion & Capsicum Pizza", price: 85 },
  { name: "Cheese and Corn Pizza", price: 95 },
  { name: "Overloaded Veggie Cheese Pizza", price: 125 },
  { name: "Tandoori Paneer Pizza", price: 105 },

  // French Fries
  { name: "French Fries", price: 45 },
  { name: "Peri Peri French Fries with Extra Dip", price: 55 },

  // Sweet Corn
  { name: "Sweet Corn Butter", price: 40 },
  { name: "Sweet Corn Butter Masala", price: 50 },

  // Pop Corn
  { name: "Butter Pop Corn (Small)", price: 15 },
  { name: "Butter Pop Corn (Large)", price: 30 },

  // Bun
  { name: "Bun Maska Butter", price: 30 },
  { name: "Tandoori Bun Maska", price: 40 },

  // Burger
  { name: "Aloo Tikki Burger", price: 40 },
  { name: "Veggie Crunch Burger", price: 50 },
  { name: "Paneer Burger", price: 65 },
  { name: "Schezwan Burger", price: 80 },
  { name: "Tandoori Paneer Burger", price: 90 },

  // Sandwich
  { name: "Veg Grilled Sandwich", price: 50 },
  { name: "Paneer Grilled Sandwich", price: 60 },
  { name: "Cheese Grilled Sandwich", price: 60 },
  { name: "Cheese Corn Grilled Sandwich", price: 70 },
  { name: "Pizza Style Grilled Sandwich", price: 75 },

  // Patties
  { name: "Aloo Patties", price: 30 },
  { name: "Aloo Paneer Masala Patties", price: 35 },
  { name: "Paneer Patties", price: 40 },
  { name: "Momos Patties", price: 35 },
  { name: "Cheese Patties", price: 40 },
  { name: "Aloo Cheese Patties", price: 35 },
  { name: "Paneer Cheese Patties", price: 45 },
  { name: "Aloo Momos Patties", price: 30 },
  { name: "Paneer Momos Patties", price: 40 },

  // Rolls
  { name: "Spring Roll (1 Pc)", price: 25 },
  { name: "Spring Roll (2 Pc)", price: 40 },
  { name: "Paneer Roll", price: 50 },
  { name: "Cheese Corn Roll", price: 40 },
  { name: "Kurkure Roll", price: 70 },

  // Pasta
  { name: "White Sauce Pasta", price: 80 },
  { name: "Red Chilli Pasta", price: 80 },

  // Snacks
  { name: "Spiral Tornado Potato", price: 50 },

  // Golgappa
  { name: "Golgappa - 6 Pcs", price: 20 },
  { name: "Golgappa - 12 Pcs", price: 35 },
  { name: "Golgappa - 18 Pcs", price: 50 },
  { name: "Golgappa - 40 Pcs", price: 100 }
];

const AvisCafeMenu = () => {

  const navigate = useNavigate();
  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate('/')}>
        Back to Home
      </button>
      <h5 className="mb-3">Avi's Cafe Menu</h5>
      <div className="row">
        {avisCafeMenu.map((item, index) => (
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

export default AvisCafeMenu;
