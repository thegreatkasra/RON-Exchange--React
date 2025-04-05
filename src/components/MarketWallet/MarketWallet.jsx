import React from 'react'
import './MarketWallet.css'

const MarketWallet = () => {
  return (
    <div className='wallet'>
      <div className="top">
        <h2>My Wallet</h2>
        <p>Total Value</p>
      </div>
      <div className="down">
        <div className="details">
            <div className="cash">$ 2,657,236.12</div>
            <div className="percent">% 2.3</div>
        </div>
        <div className="dec">
            <p>2.67 Growth in 24 Hours Ago</p>
        </div>
      </div>

    </div>
  )
}

export default MarketWallet
