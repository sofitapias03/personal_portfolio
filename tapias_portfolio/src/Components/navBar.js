import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/MobileNavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container">
  <div className="nav-menu">
  <div className="menu-text">Menu</div>
  <button className="nav-toggle" onClick={toggleNav} style={{ fontSize: '80px', color:'#efe49f', marginRight:'-150px' }}>
    &#9776; {/* Hamburger icon */}
  </button>
</div>

  <div className={`nav-links ${isOpen ? 'active' : ''}`}>
    <Link to="/aboutMe" className="nav-item" onClick={toggleNav}>
      About Me
    </Link>
    <Link to="/Projects" className="nav-item" onClick={toggleNav}>
      Projects
    </Link>
    <Link to="/Contact" className="nav-item" onClick={toggleNav}>
      Contact
    </Link>
    <Link to="/" className="nav-item" onClick={toggleNav}>
      Home
    </Link>
  </div>
</div>

  );
};

export default NavBar;


