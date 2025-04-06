import React from 'react'
import './TradeNow.css'
import { Link } from 'react-router-dom';

import arrow from './img/arrow-right.png'

const TradeNow = () => {
  return (
    <div className='trade-now-container'>
      <div className="trade-now-text">
        <h1>RON</h1>
        <h3> The Future of Crypto Trading</h3>
        <p>Trade smarter, faster, and safer with next-gen crypto technology.</p>
        <h2>Ready to start?</h2>
      </div>
      <div className="trade-now-btn">
        <Link to="/earn" ><button>Trade Now <img src={arrow} alt="arrow" /> </button></Link>
      </div>
    </div>
  )
}

export default TradeNow;
