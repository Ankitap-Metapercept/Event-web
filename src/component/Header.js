import React, { useState } from 'react';
import './Header.css';
import Logo from '../Images/logo-white.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>

          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">News</a></li>
              <li><button type="button">Buy Ticket</button></li>
            </ul>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
    </>
  );
}
