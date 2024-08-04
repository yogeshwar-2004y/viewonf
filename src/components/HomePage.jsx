import React, { useState } from 'react';
import "./HomePage.css";

const images = [
  'src/assets/slider1.jpg',
  'src/assets/slider2.jpg',
  'src/assets/slider3.jpg'
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
        <img src="src/assets/logo.png" alt="Viewon Logo" className="logo" />
        <div className="search-bar">
          <input type="text" placeholder="Enter hotel names" />
          <button>Search</button>
        </div>
        <div className="header-icons">
        <a href="http://www.googlemaps.com/">
          <button>locate-me</button>
        </a>
        <a href="/account">
          <button>account</button>
        </a>
        <a href="/intro">
          <button>logout</button>
        </a>
        </div>
      </header>

      <div className="image-slider">
        <button className="prev" onClick={prevImage}>❮</button>
        <img src={images[currentImageIndex]} alt="Grand Opening" className="slider-image" />
        <button className="next" onClick={nextImage}>❯</button>
      </div>

      <nav className="nav-buttons">
        <a href="http://www.youtube.com/">
          <button>Play</button>
        </a>
        <a href="/blogs">
          <button>Blogs</button>
        </a>
        <a href="/new-launches">
          <button>New Launch</button>
        </a>
        <a href="/offers">
          <button>Offers</button>
        </a>
        <a href="/view-post">
          <button>View Post</button>
        </a>
        <a href="/about">
          <button>About</button>
        </a>
      </nav>
    </div>
  );
};

export default HomePage;
