import React from 'react';
import './OffersZonePage.css';
import Header from './Header';

const OffersZonePage = () => {
  return (
    <div className="offers-zone-page">
      <header className="header">
        <img src="src/assets/logo.png" alt="Viewon Logo" className="logo" />
      </header>
      <div className="offers-header">
        <h1>Offers Zone</h1>
      </div>

      <div className="offers-categories">
        <div className="category">
         <a href="/singles">
          <button>Singam Singles</button>
         </a>
          <p>Exclusive offers for singles looking to enjoy a night out. Whether it's a solo dining experience or a fun activity, we've got you covered.</p>
        </div>
        
        <div className="category">
          <a href="/couples">
          <button>Cute Couples</button>
          </a>
          <p>Romantic deals for couples. Enjoy a special dinner or a cozy getaway with your significant other.</p>
        </div>
        
        <div className="category">
          <a href="/family">
          <button>Forever Family</button>
          </a>
          <p>Family-friendly offers for a fun day out with your loved ones. From dining to entertainment, find the best deals for families.</p>
        </div>
        
        <div className="category">
          <a href="/mid">
          <button>Midnight Vibes</button>
          </a>
          <p>Offers for night owls who enjoy the city's nightlife. Discover the best deals for late-night dining and entertainment.</p>
        </div>
        
        <div className="category">
          <a href="/pubs">
          <button>In Center Pubs</button>
          </a>
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
