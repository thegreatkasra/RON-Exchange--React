import React from 'react'
import './Footer.css'

import logo from './svg/logo.svg'
import telegram from './svg/telegram.png'
import x from './svg/x.png'
import discord from './svg/discord.png'
import linkedin from './svg/linkedin.png'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="footer-info">
        <div className="footer-info-logo">
            <img src={logo} alt="footer-logo" />
        </div>
        <h3>RON © Crypto Exchange Compony</h3>
        <p>United States of America</p>
      </div>

      <div className="footer-links">
        <h4>Quick Links</h4>
        <a href="#">Home</a>
        <a href="#">Dashboard</a>
        <a href="#">Coin List</a>
        <a href="#">Security</a>
        <a href="#">Support</a>
      </div>

      <div className="footer-legal">
        <h4>Legal</h4>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Risk Disclaimer</a>
      </div>

      <div className="footer-contact">
        <h4>Stay Connected</h4>
        <p>Follow us for the latest updates and market insights.</p>
        <div className='footer-contact-images'>
            <a href="#"><img src={telegram} alt="telegram"/></a>
            <a href="#"><img src={x} alt="x"/></a>
            <a href="#"><img src={discord} alt="discord"/></a>
            <a href="#"><img src={linkedin} alt="linkedin"/></a>
        </div>
      </div>


    </div>
  )
}

export default Footer
