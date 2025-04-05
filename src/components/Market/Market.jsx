import React from 'react';
import './Market.css';

import Header from '../Header/Header';
import MarketTable from '../MarketTable/MarketTable';
import MarketWallet from '../MarketWallet/MarketWallet'
import TotalOverview from '../TotalOverview/TotalOverview'
import BtcOverview from '../BtcOverview/BtcOverview'
import Footer from '../Footer/Footer';

const Market = () => {
  return (
    <div className='market-page'>
      <Header />
      <div className="all">

        <div className="left">
          <MarketWallet />
          <TotalOverview />
          <BtcOverview />
        </div>

        <div className="right">
          <MarketTable />
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Market







