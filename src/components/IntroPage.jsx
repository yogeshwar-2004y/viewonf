import React from 'react';
import './IntroPage.css';

const IntroPage = () => {
  return (
    <div className="intro-page">
      <div className="intro-header">
        <img src="path/to/logo.png" alt="Viewon Logo" className="logo" />
        <h1>VIEWON</h1>
      </div>
      <div className="intro-content">
        <div className="food-truck">
          <img src="path/to/food-truck.png" alt="Food Truck" />
        </div>
        <div className="buttons">
         <a href="/signup">
          <button className="signup-button">Signup</button>
         </a>
         <a href="/login">
          <button className="login-button">Login</button>
         </a>
        </div>
        <div className="food-review">
          <img src="path/to/food-review.png" alt="Food Review" />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
