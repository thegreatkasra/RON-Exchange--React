import React, { useEffect, useState } from 'react';
import './TotalOverviewCards.css';

const TotalOverviewCards = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCryptoData();
  }, []);


  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className='total-cards'>
      {cryptoData.slice(0, 6).map(crypto => (
        <div key={crypto.id} className='total-card'>
          <div className="total-card--name" >
            <h4 style={{ color: getRandomColor() }}>{crypto.symbol.toUpperCase()}</h4> 
          </div>
          <div className="total-card--detail">
            <h4>${crypto.current_price.toFixed(2)}</h4> 
            <p
              style={{
                color: crypto.price_change_percentage_24h < 0 ? '#C52323' : '#36D55B'
              }}
            >
              {crypto.price_change_percentage_24h.toFixed(2)}%
            </p> 
          </div>
        </div>
      ))}
    </div>
  );
  
}

export default TotalOverviewCards;