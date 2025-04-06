import React from 'react'
import './Earn.css'

import Header from '../Header/Header'
import EarnCryptoDetails from '../EarnCryptoDetails/EarnCryptoDetails'
import EarnTrade from '../EarnTrade/EarnTrade'
import EarnBrowse from '../EarnBrowse/EarnBrowse'
import EarnNews from '../EarnNews/EarnNews'
import EarnOverviewChart from '../EarnOverviewChart/EarnOverviewChart'
import EarnAnalytic from '../EarnAnalytic/EarnAnalytic'
import Footer from '../Footer/Footer'

const Earn = () => {
  return (
    <div className='earn-page'>
      <div>
        < Header />
      </div>
      <div className="earn-all">

        <div className="earn-left">

          <EarnCryptoDetails />
          <EarnOverviewChart/>
          <EarnAnalytic />

        </div>

        <div className="earn-right">

          <EarnBrowse />
          <EarnTrade />
          <EarnNews />

        </div>

      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Earn
