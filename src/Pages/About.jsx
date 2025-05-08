import React from 'react';
import logo from '../assets/logo.jpeg'; // Ensure this path is correct
//import '../styles/About.css'; // Optional: Create this CSS file for custom styles

function About() {
  return (
    <div className="container my-5">
      <div className="text-center">
        <img src={logo} alt="MealMates Logo" width="100" height="100" />
        <h2 className="mt-3">About MealMates</h2>
        <br/>
        <br/>
        <br/>
      </div>
      <p className="mt-4"><h1>
        The Meal Tastes Better When
        You Eat It With Your Friends</h1>
      </p>
      <p>
        Our mission is to provide a seamless and eco-friendly ordering experience. With features like the "Go Axis Green" initiative, we encourage users to opt for minimal packaging, contributing to a sustainable environment.
      </p>
      <p>
        Explore our diverse menus, add items to your cart, and enjoy quick and convenient deliveries to your  class location.
      </p>
    </div>
  );
}

export default About;
