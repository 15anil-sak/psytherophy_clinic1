import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo-link">
        <div className="logo-container">
          <img src="/images/clinic_logo.webp" alt="Clinic Logo" />
          <span className="logo-text">Teja's Physiotherapy and Pain Relief Clinic</span>
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
      <Link to="/appointments">
        <button id="navBookBtn" className="cta-button">Book Appointment</button>
      </Link>
    </header>
  );
};

export default Header;
