import React, { useState } from 'react';
import './Header.css';

import logo from './Svg/logo.png';
import bell from './Svg/bell.svg';
import profilePic from './Svg/profilePic.png';
import arrowDown from './svg/arrowDown.svg';

const Header = () => {
  
  const [selected, setSelected] = useState(null);

  const handleSelect = (item) => {
    setSelected(item);
  };

  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="Logo"/>
      </div>

      <div className="nav">
        <ul>
          <li className={selected === 'Home' ? 'selected' : ''} onClick={() => handleSelect('Home')}>Home</li>
          <li className={selected === 'Market' ? 'selected' : ''} onClick={() => handleSelect('Market')}>Market</li>
          <li className={selected === 'Earn' ? 'selected' : ''} onClick={() => handleSelect('Earn')}>Earn</li>
          <li className={selected === 'Portfolio' ? 'selected' : ''} onClick={() => handleSelect('Portfolio')}>Portfolio</li>
          <li className={selected === 'Wallet' ? 'selected' : ''} onClick={() => handleSelect('Wallet')}>Wallet</li>
          <li className={selected === 'Transfer' ? 'selected' : ''} onClick={() => handleSelect('Transfer')}>Transfer</li>
        </ul>
      </div>

      <div className="profile">
        <div className='notification'>
          <img src={bell} alt="notification" />
        </div>
        <div className='profile-detail'>
          <img className='profilepic' src={profilePic} alt="profile" />
          <p>Ana Williams</p>
          <img className='arrow' src={arrowDown} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Header;