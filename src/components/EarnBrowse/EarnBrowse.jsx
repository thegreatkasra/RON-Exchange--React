import React from 'react'
import './EarnBrowse.css'

import btc from './img/btc.png'
import eth from './img/eth.png'
import bnb from './img/bnb.png'
import xrp from './img/xrp.png'

const EarnBrowse = () => {
  return (
    <div className='earn-browse-all'>
        <div className="title">
            <h2>Browse Cryptocurrencies</h2>
        </div>

        <div className="earn-browse-cards">

            <div className="earn-browse-card">
                <div className="browse-card-left">
                    <div className="browse-card-left-left">
                        <img src={btc} alt="btc" />
                    </div>
                    <div className="browse-card-left-right">
                        <p>Bitcoin</p>
                        <p>BTC</p>
                    </div>
                </div>
                <div className="browse-card-right">
                    <p>$ 87,207.32</p>
                    <p>(1.2%) +128.456</p>
                </div>
            </div>

            <div className="earn-browse-card">
                <div className="browse-card-left">
                    <div className="browse-card-left-left">
                        <img src={eth} alt="eth" />
                    </div>
                    <div className="browse-card-left-right">
                        <p>Ethereum</p>
                        <p>ETH</p>
                    </div>
                </div>
                <div className="browse-card-right">
                    <p>$2,064.83</p>
                    <p>(1%) +128.456</p>
                </div>
            </div>
            <div className="earn-browse-card">
                <div className="browse-card-left">
                    <div className="browse-card-left-left">
                        <img src={bnb} alt="bnb" />
                    </div>
                    <div className="browse-card-left-right">
                        <p>Binance coin</p>
                        <p>BNB</p>
                    </div>
                </div>
                <div className="browse-card-right">
                    <p>$633.44</p>
                    <p>(0.9%) +15.00</p>
                </div>
            </div>
            <div className="earn-browse-card">
                <div className="browse-card-left">
                    <div className="browse-card-left-left">
                        <img src={xrp} alt="xrp" />
                    </div>
                    <div className="browse-card-left-right">
                        <p>XRP</p>
                        <p>XRP</p>
                    </div>
                </div>
                <div className="browse-card-right">
                    <p>$2.44</p>
                    <p>(0.48%) +0.8</p>
                </div>
            </div>

        </div>

        <div className="earn-browse-button">
            <button>MORE</button>
        </div>
    </div>
  )
}

export default EarnBrowse
