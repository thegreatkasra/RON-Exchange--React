import React, { useState, useEffect } from "react";
import axios from "axios";
import './MarketTableDetails.css';

const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState([]);

  // Function to fetch crypto data
  const fetchCryptoData = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 12,
          page: 1,
          sparkline: false,
        }
      });
      const data = response.data.map(coin => ({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol.toUpperCase(),
        price: `$${coin.current_price.toFixed(2)}`,
        change24h: coin.price_change_24h > 0 ? `+${coin.price_change_24h.toFixed(2)}` : coin.price_change_24h.toFixed(2),
        percentChange: `${coin.price_change_percentage_24h.toFixed(2)}%`,
        isNegative: coin.price_change_24h < 0,
      }));
      setCryptoData(data);
    } catch (error) {
      console.error("Error fetching crypto data", error);
    }
  };

  // Effect to fetch data every 10 seconds
  useEffect(() => {
    fetchCryptoData();
    const intervalId = setInterval(fetchCryptoData, 10000); // 10 seconds

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="table-full">
      <hr className="line"/>
      <table className="table">
        <thead>
          <tr className="table-details">
            <th>#</th>
            <th>Crypto</th>
            <th>Price</th>
            <th >24h Change</th>
            <th>% Change</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <tr key={crypto.id} className="table-row">
              <td>{index + 1}</td>
              <td>
                <span className="crypto-name">{crypto.name}</span> <span className="crypto-name-abb">{crypto.symbol}</span>
              </td>
              <td>{crypto.price}</td>
              <td className={crypto.isNegative ? "change-negative" : "change-positive"}>{crypto.change24h}</td>
              <td className={crypto.isNegative ? "change-negative" : "change-positive"}>{crypto.percentChange}</td>
              <td>
                <button className="crypto-detail">Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="crypto-view-more">
        <button className="view-more-btn">View More</button>
      </div>
    </div>
  );
}

export default CryptoTable;