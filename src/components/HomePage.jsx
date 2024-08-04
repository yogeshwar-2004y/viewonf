import React, { useState, useEffect } from 'react';
import "./HomePage.css";
import Header from './Header';

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

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <Header>
        <header className="header">
          <img src="src/assets/logo.png" alt="Viewon Logo" className="logo" />
        </header>
      </Header>

      <div className="image-slider">
        <button className="prev" onClick={prevImage}>❮</button>
        <img src={images[currentImageIndex]} alt="Slider" className="slider-image fade-in" />
        <button className="next" onClick={nextImage}>❯</button>
      </div>

      <nav className="nav-buttons">
        <a href="http://www.youtube.com/">
          <button className="nav-button">Play</button>
        </a>
        <a href="/blogs">
          <button className="nav-button">Blogs</button>
        </a>
        <a href="/new-launches">
          <button className="nav-button">New Launch</button>
        </a>
        <a href="/offers">
          <button className="nav-button">Offers</button>
        </a>
        <a href="/view-post">
          <button className="nav-button">View Post</button>
        </a>
        <a href="/about">
          <button className="nav-button">About</button>
        </a>
      </nav>

      <footer className="footer">
      </footer>
    </div>
  );
};

export default HomePage;
