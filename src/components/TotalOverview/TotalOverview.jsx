import React from 'react'
import './TotalOverview.css'

import TotalOverviewCards from '../TotalOverviewCards/TotalOverviewCards'

const TotalOverview = () => {
  return (
    <div className='total-all'>
      <div className="title">
        <h2>Total Overview</h2>
      </div>
      <div className="total-cards">
        <TotalOverviewCards className="card"/>
      </div>
    </div>
  )
}
import './TotalOverview.css'

export default TotalOverview;
