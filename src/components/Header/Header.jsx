import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

import logo from './Svg/logo.png';
import bell from './Svg/bell.svg';
import profilePic from './Svg/profilePic.png';
import arrow from './Svg/arrow.svg';
import menu from './Svg/menu.png';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header'>
      <div className="logo">
      <Link to="/" ><img src={logo} alt="Logo" /></Link>
      </div>

      <div className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" className='header-nav-text'>Home</Link></li>
          <li><Link to="/market" className='header-nav-text'>Market</Link></li>
          <li><Link to="/earn" className='header-nav-text'>Earn</Link></li>
          <li><Link to="/portfolio" className='header-nav-text'>Portfolio</Link></li>
          <li><Link to="/wallet" className='header-nav-text'>Wallet</Link></li>
          <li><Link to="/transfer" className='header-nav-text'>Transfer</Link></li>
        </ul>
      </div>

      <div className="profile">
        <div className='notification' id='notif'>
          <img src={bell} alt="notification" />
        </div>
        <div>
          <Link to="/signin" className='profile-detail'>
            <img className='profilepic' src={profilePic} alt="profile" />
            <p>Ana Williams</p>
            <img className='arrow' src={arrow} alt="arrow" />
          </Link>
        </div>
        <div className='notification' id='menu' onClick={toggleMenu}>
          <img src={menu} alt="menu" />
        </div>
      </div>
    </div>
  );
}

export default Header;