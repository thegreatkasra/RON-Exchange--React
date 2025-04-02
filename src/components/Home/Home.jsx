import React from 'react'
import './home.css'

import Header from '../Header/Header'
import ThreeD from '../ThreeD/ThreeD'
import TradeNow from '../TradeNow/TradeNow'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <ThreeD />
      <TradeNow />
      
    </div>
  )
}

export default Home;
