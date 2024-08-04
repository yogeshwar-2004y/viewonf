import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <p>&copy; {new Date().getFullYear()} Food Review Site. All rights reserved.</p>
      </div>
      <nav className="footer__nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/offers">Offers Zone</Link></li>
          <li><Link to="/new-launches">New Launch Hotels</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
