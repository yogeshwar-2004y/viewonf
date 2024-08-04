import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">Food Review Site</Link>
      </div>
      <nav className="header__nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/offers">Offers Zone</Link></li>
          <li><Link to="/new-launches">New Launch Hotels</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <div className="header__auth">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </header>
  );
}

export default Header;
