import React from 'react'
import './MarketTable.css'

import BtnTableTag from '../BtnTableTag/BtnTableTag'
import MarketTableDetails from '../MarketTableDetails/MarketTableDetails'

const MarketTable = () => {
  return (
    <div className='MarketTable-container'>
      
    <div className="top">
        <div className="title">
            <h2>Market</h2>
        </div>
        <div className="search">
            <input type="text" placeholder="Search"/>
        </div>
    </div>

    <div className="middle">
        <BtnTableTag btnName = 'All' />
        <BtnTableTag btnName = 'NFT' />
        <BtnTableTag btnName = 'Categories' />
        <BtnTableTag btnName = 'Token Unlocks' />
        <BtnTableTag btnName = 'Air Drops' showFire={true}/>
        <BtnTableTag btnName = 'Gaming' showFire={true}/>
    </div>
    <div className="market-table-details">
        <MarketTableDetails />
    </div>
    
    </div>
  )
}

export default MarketTable
