import React from 'react';

const brioMenu = [
  // Cold Press Juices
  { name: "Sweet Lime (Mousambi)", price: 55 },
  { name: "Pineapple", price: 55 },
  { name: "Sweet Lime + Pineapple", price: 55 },
  { name: "Watermelon", price: 55 },

  // Chill Out This Summer
  { name: "Nariyal Pani (Tender Coconut)", price: 70 },
  { name: "Shikanji", price: 40 },
  { name: "Jeera Masala Chass", price: 25 },
  { name: "Aam Pana/Panna", price: 40 },
  { name: "Virgin Mojito", price: 30 },
  { name: "Refreshing Lassi", price: 65 },
  { name: "Mango Lassi", price: 75 },
  { name: "Power Smoothie", price: 80 },

  // Shakes
  { name: "Banana Shake", price: 55 },
  { name: "Banana + Peanut + Honey Shake", price: 65 },
  { name: "Papaya Shake", price: 55 },
  { name: "Mango Shake", price: 65 },
  { name: "Sattu Shake", price: 55 },
  { name: "Oreo Shake", price: 65 },
  { name: "Choco Coffee Shake", price: 65 },
  { name: "Kitkat Shake", price: 75 },
  { name: "Kaju Badam Shake", price: 80 },

  // Tasty Break Bowls
  { name: "Plain Cornflakes Bowl", price: 40 },
  { name: "Choco Cornflakes Bowl", price: 50 },
  { name: "Butter Sweet Corn", price: 40 },
  { name: "Butter Masala Sweet Corn", price: 45 },

  // Sandwiches
  { name: "Brown Bread Butter", price: 35 },
  { name: "Desi Safed Makkhan Bread", price: 35 },
  { name: "Garlic Bread Butter", price: 40 },
  { name: "Peanut Butter Jam Sandwich", price: 55 },
  { name: "Grilled Veg Sandwich", price: 65 },
  { name: "Grilled Paneer Sandwich", price: 75 },

  // Beverages
  { name: "BRIO Special Coffee", price: 30 },
  { name: "BRIO Cappuccino", price: 50 },
  { name: "BRIO Cold Coffee", price: 80 },
  { name: "BRIO Lemon Tea", price: 20 },
  { name: "BRIO Green Tea", price: 20 },
  { name: "Bubbled Ice Tea", price: 45 },
  { name: "BRIO Special Chaha", price: 20 },
  { name: "BRIO Special Chaha Kulhad", price: 25 },
  { name: "BRIO Special Kadha", price: 25 },

  // Milk Products
  { name: "Hot/Cold Milk", price: 30 },
  { name: "Healthy Haldi Milk (Hot)", price: 35 },
  { name: "Bournvita Milk Hot/Cold", price: 40 },
  { name: "Choco Milk Hot/Cold", price: 40 },
  { name: "Kesar Thandai Badam Milk", price: 65 },

  // Healthy Meals
  { name: "BRIO Special Poha", price: 45 },
  { name: "Healthy Bhelpuri", price: 50 },
  { name: "Masala Oats Bowl", price: 40 },
  { name: "Dry Fruit Banana Milk Oats Bowl", price: 45 },
  { name: "BRIO Atta Noodles", price: 50 },
  { name: "Veggie Butter Atta Noodles", price: 70 },
  { name: "BRIO Plain Maggi", price: 40 },
  { name: "Veggie Butter Maggi", price: 55 },
  { name: "Plain Maggi + Virgin Mojito Combo", price: 65 },

  // Fruit Palette / Chat
  { name: "Seasonal Fruits Palette", price: 45 }
];

const BrioMenu = ({ addToCart }) => {
  return (
    <div className="container mt-4">
      <h5 className="mb-3">Brio Menu</h5>
      <div className="row">
        {brioMenu.map((item, index) => (
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

export default BrioMenu;
