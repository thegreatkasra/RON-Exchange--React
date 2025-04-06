import React from 'react'
import './EarnTrade.css'

import BtnTableTag from '../BtnTableTag/BtnTableTag'

const EarnTrade = () => {
  return (
    <div className='earn-trade'>

      <div className="title">
        <h2>Trade</h2>
      </div>
      
      <div className="earn-trade-btn">
        <BtnTableTag showFire={false} btnName='Buy' />
        <BtnTableTag showFire={false} btnName='Sell'/>
        <BtnTableTag showFire={true} btnName='Levrage'/>
      </div>

      <div className='earn-trade-inputs'>

        <div className="earn-trade-input">
            <h4>Amount</h4>
            <div className="earn-trade-input-first">
                <select name="Enter Amount">
                    <option value="" disabled selected>Enter Amount</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        </div>

        <div className="earn-trade-input">
            <h4>Price</h4>
            <div className="earn-trade-input-first">
                <select name="Enter Price">
                    <option value="" disabled selected>Enter Price</option>
                    <option value="1">10,000</option>
                    <option value="2">11,000</option>
                    <option value="3">12,000</option>
                    <option value="4">13,000</option>
                </select>
            </div>
        </div>
        <div className="earn-trade-buy-btn">
            <button>Buy Now</button>
        </div>

      </div>
    </div>
  )
}


export default EarnTrade
