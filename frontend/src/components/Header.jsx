import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <Link to="/" className="logo-link" onClick={closeMenu}>
        <div className="logo-container">
          <img src="/images/clinic_logo.webp" alt="Clinic Logo" />
          <span className="logo-text">Teja's Physiotherapy Clinic</span>
        </div>
      </Link>

      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <nav className={isMenuOpen ? 'nav-active' : ''}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>Services</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
          <li>
            <Link to="/blogs" onClick={closeMenu}>Blogs</Link>
          </li>
          <li className="mobile-only">
            <Link to="/appointments" onClick={closeMenu}>
              <button className="cta-button">Book Appointment</button>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="desktop-only">
        <Link to="/appointments">
          <button id="navBookBtn" className="cta-button">Book Appointment</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
