import React, { useEffect } from 'react';
import './EarnOverviewChart.css';

import BtnTableTag from '../BtnTableTag/BtnTableTag';

const EarnOverviewChart = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        width: "100%",
        height: 400,
        symbol: "BINANCE:BTCUSDT", // Change to preferred pair
        interval: "60", // 1 hour
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_top_toolbar: false,
        save_image: false,
        container_id: "tv-chart-container",
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className='earn-chart'>
      <div className="title">
        <h2>Overview</h2>
        <div className="earn-chart-btns">
          <BtnTableTag showFire={false} btnName='1 Hour' />
          <BtnTableTag showFire={false} btnName='4 Hour' />
          <BtnTableTag showFire={false} btnName='1 D' />
          <BtnTableTag showFire={false} btnName='1 W' />
          <BtnTableTag showFire={false} btnName='Month' />
        </div>
      </div>

      <div className="earn-chart-api">
        <div id="tv-chart-container" />
      </div>
    </div>
  );
};

export default EarnOverviewChart;
