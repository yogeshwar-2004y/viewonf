import React from 'react';
import './OffersZonePage.css';

const OffersZonePage = () => {
  return (
    <div className="offers-zone-page">
      <header className="header">
        <img src="path/to/logo.png" alt="Viewon Logo" className="logo" />
        <button className="menu-button">☰</button>
      </header>

      <div className="offers-header">
        <h1>Offers Zone</h1>
      </div>

      <div className="offers-categories">
        <div className="category">
          <h2>Singam Singles</h2>
          <p>Exclusive offers for singles looking to enjoy a night out. Whether it's a solo dining experience or a fun activity, we've got you covered.</p>
        </div>
        
        <div className="category">
          <h2>Cute Couples</h2>
          <p>Romantic deals for couples. Enjoy a special dinner or a cozy getaway with your significant other.</p>
        </div>
        
        <div className="category">
          <h2>Forever Family</h2>
          <p>Family-friendly offers for a fun day out with your loved ones. From dining to entertainment, find the best deals for families.</p>
        </div>
        
        <div className="category">
          <h2>Midnight Vibes</h2>
          <p>Offers for night owls who enjoy the city's nightlife. Discover the best deals for late-night dining and entertainment.</p>
        </div>
        
        <div className="category">
          <h2>In Center Pubs</h2>
          <p>Content for above 18+. Find the hottest deals at the city's best pubs and bars. Enjoy exclusive discounts on drinks and more.</p>
        </div>
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

export default OffersZonePage;
