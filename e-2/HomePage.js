import React, { useState } from 'react';
import './HomePage.css';

const images = [
  'path/to/grand-opening1.png',
  'path/to/grand-opening2.png',
  'path/to/grand-opening3.png'
];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="home-page">
      <header className="header">
        <img src="path/to/logo.png" alt="Viewon Logo" className="logo" />
        <div className="search-bar">
          <input type="text" placeholder="Enter hotel names" />
          <button>Search</button>
        </div>
        <div className="header-icons">
          <button>Icon1</button>
          <button>Icon2</button>
        </div>
      </header>

      <div className="image-slider">
        <button className="prev" onClick={prevImage}>❮</button>
        <img src={images[currentImageIndex]} alt="Grand Opening" className="slider-image" />
        <button className="next" onClick={nextImage}>❯</button>
      </div>

      <nav className="nav-buttons">
        <button>Play</button>
        <button>Blogs</button>
        <button>New Launch</button>
        <button>Offers</button>
        <button>View Post</button>
        <button>About</button>
      </nav>

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

export default HomePage;
