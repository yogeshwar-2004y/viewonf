import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="header">
        <img src="src/assets/logo.png" alt="Viewon Logo" className="logo" />
        <h1>About Us</h1>
        <button className="menu-button">☰</button>
      </header>

      <div className="about-content">
        <h1>ViewOn</h1>
        <p>
          Welcome to ViewOn, your ultimate destination for discovering and reviewing the best food and hotels in the city. Our mission is to provide you with the most comprehensive and reliable reviews, helping you make informed choices about where to dine and stay.
        </p>
        <p>
          At ViewOn, we believe that great food and comfortable accommodations are essential for a memorable experience. That's why we strive to bring you honest reviews and recommendations from real customers. Whether you're looking for a new restaurant to try, a cozy hotel to stay in, or exclusive offers, we've got you covered.
        </p>
        <p>
          Thank you for choosing ViewOn as your trusted source for food and hotel reviews. We hope you enjoy exploring our site and discovering the best that the city has to offer.
        </p>
      </div>

      <footer className="footer">
        <p>© viewon.ptv</p>
        <div className="social-icons">
          <button>Instagram</button>
          <button>Facebook</button>
          <button>LinkedIn</button>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
