import React from 'react'
import './Btcbar.css'



const Btcbar = () => {
    return (

        <div className="btc-bar">

            <div className="bar-box">
                <p>73%</p>
                <div id='bar1'></div>
            </div>
           
            <div className="bar-box">
                <p>81%</p>
                <div id='bar2'></div>
            </div>
        
            <div className="bar-box">
                <p>30%</p>
                <div id='bar3'></div>
            </div>
        
       
            <div className="bar-box">
                <p>21%</p>
                <div id='bar4'></div>
            
            </div>
        
            <div className="bar-box">
                <p>49%</p>
                <div id='bar5'></div>
            </div>
       
        
            <div className="bar-box">
                <p>50%</p>
                <div id='bar6'></div>
            </div>
        
       
            
        </div>


      )
    }

export default Btcbar


