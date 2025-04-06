import React from 'react'
import './EarnNews.css'

import BtnTableTag from '../BtnTableTag/BtnTableTag'
import news1 from './img/news1.png'
import news2 from './img/news2.png'

const EarnNews = () => {
  return (
    <div className='earn-news'>

    <div className="title">
        <h2>News</h2>
        <div className="earn-trade-btn">
            <BtnTableTag showFire={false} btnName='Top' />
            <BtnTableTag showFire={false} btnName='Lastest'/>
        </div>
    </div>



    <div className='earn-news-posts'>

        <div className="earn-news-post">
            <img src={news1} />
            <h4>
            Bitcoin Could Hit $110,000 Before Dropping to $76,500 as Fed Policy Shifts, Says Arthur Hayes  
            </h4>
        </div>

        <div className="earn-news-post">
            <img src={news2} />
            <h4>
            Michael Saylor's Firm Hits 500,000 BTC Milestone With Recent $584 Million Purchase
            </h4>
        </div>


    <div className="earn-news-buy-btn">
        <button>MORE</button>
    </div>

    </div>
    </div>
  )
}


export default EarnNews
