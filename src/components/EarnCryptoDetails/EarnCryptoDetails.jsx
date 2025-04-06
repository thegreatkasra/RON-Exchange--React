import React, { useEffect, useState } from 'react';
import './EarnCryptoDetails.css';

import btc from './img/btc.png';
import indicator from './img/indicator.png';
import line from './img/line.png';

const EarnCryptoDetails = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'
        );
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error('Failed to fetch Bitcoin data:', err);
      }
    };

    fetchCrypto();
    const interval = setInterval(fetchCrypto, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  const marketData = data?.market_data;

  return (
    <div className='earn-crypto-details'>
      <div className="earn-crypto-detail-name">
        <img src={btc} alt="btc" />
        <h2>Bitcoin</h2>
      </div>

      <div className="earn-crypto-details-first">
        <div className="earn-crypto-details-price">
          <p>Price</p>
          <h3>${marketData?.current_price.usd?.toLocaleString() || '--'}</h3>
        </div>

        <div><img src={line} alt="line" /></div>

        <div className="earn-crypto-details-yesterdayprice">
          <p>Yesterday Price</p>
          <h3>
            ${marketData
              ? (marketData.current_price.usd /
                (1 + marketData.price_change_percentage_24h / 100)).toFixed(2)
              : '--'}
          </h3>
        </div>

        <div><img src={line} alt="line" /></div>

        <div className="earn-crypto-details-marketcap">
          <p>Market Cap</p>
          <h3>${marketData?.market_cap.usd?.toLocaleString() || '--'}</h3>
        </div>
      </div>

      <div className="earn-crypto-details-second">
        <div className="change">
          <p>24h Changes</p>
          <h3>${marketData?.price_change_24h?.toFixed(2) || '--'}</h3>
        </div>
        <div className="change">
          <p>Changing Percent</p>
          <h3>{marketData?.price_change_percentage_24h?.toFixed(2) || '--'}%</h3>
        </div>
      </div>

      <div className="earn-crypto-details-third">
        <div className="indicator">
          <img src={indicator} alt="indicator" />
        </div>
        <div className="indicator-price">
          <div className="indicator-price-left">
            <p>Low</p>
            <p>${marketData?.low_24h.usd?.toLocaleString() || '--'}</p>
          </div>
          <div className="indicator-price-right">
            <p>High</p>
            <p>${marketData?.high_24h.usd?.toLocaleString() || '--'}</p>
          </div>
        </div>
        <div className="indicator-description">
          <p>Chart Above is about Price Performance</p>
        </div>
      </div>
    </div>
  );
};

export default EarnCryptoDetails;
