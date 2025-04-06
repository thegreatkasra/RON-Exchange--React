import React from 'react'
import './EarnAnalytic.css'

import info from './img/info.png'
import first from './img/first.svg'
import second from './img/second.svg'
import third from './img/third.svg'
import fourth from './img/fourth.svg'


const EarnAnalytic = () => {
  return (
    <div className='earn-analytic-full'>
        <div className="title">
            <h2>Bitcoin analytics</h2>
        </div>
        <div className="earn-analytics">

            <div className="earn-analytic">
                <div className="title">
                    <h4>Addresses by Holdings</h4><img src={info} />
                </div>
                <div className="earn-analytic-chart">
                    <img src={first} />
                </div>
            </div>

            <div className="earn-analytic">
                <div className="title">
                    <h4>Whale Holdings</h4><img src={info} />
                </div>
                <div className="earn-analytic-chart">
                    <img src={second} />
                </div>
            </div>

            <div className="earn-analytic">
                <div className="title">
                    <h4>Addresses by Time Held</h4><img src={info} />
                </div>
                <div className="earn-analytic-chart">
                    <img src={third} />
                </div>
            </div>

            <div className="earn-analytic">
                <div className="title">
                    <h4>Bitcoin Average Transaction Fees (30d)</h4><img src={info} />
                </div>
                <div className="earn-analytic-chart">
                    <img src={fourth} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default EarnAnalytic
