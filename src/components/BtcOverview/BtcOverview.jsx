import React from 'react'
import './BtcOverview.css'
import Btcbar from '../Btcbar/Btcbar';

const BtcOverview = () => {
  return (
    <div className='btc-overview-all'>
      <div className="title">
        <h2>BTC Overview</h2>
        <div className="btc-overview-select">
        <select name="timePeriod" id="timePeriod">
            <option value="day" className="btc-overview-option">Day</option>
            <option value="week" className="btc-overview-option">Week</option>
            <option value="month" selected className="btc-overview-option">Month</option>
            <option value="year" className="btc-overview-option">Year</option>
        </select>
        </div>
      </div>
      <div>
        <Btcbar />
      </div>
      <div className='btc-overview-indicator'>
        <div className="dash"></div>
        <p>NOW</p>
      </div>
    </div>
  )
}

export default BtcOverview;
