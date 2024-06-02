import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/homeStyles.css'; // Import the CSS file

const NavBar = () => {
  return (
    <div className="nav-container">
      <Link to="/aboutMe" className="nav-tile">
        <div className='nav-tile-content'>About Me</div>
        <div className='nav-tile-number'>10</div>
      </Link>
      <Link to="/Projects" className="nav-tile">
        <div className='nav-tile-content'>Projects</div>
        <div className='nav-tile-number'>14</div>
      </Link>
      <Link to="/Contact" className="nav-tile">
        <div className='nav-tile-content'>Contact</div>
        <div className='nav-tile-number'>9</div>
      </Link>
      <Link to="/" className="nav-tile">
        <div className='nav-tile-content'>Home</div>
        <div className='nav-tile-number'>8</div>
      </Link>
    </div>
  );
};

export default NavBar;


