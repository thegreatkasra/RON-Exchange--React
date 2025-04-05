import React, { useState, useEffect } from 'react';
import './BtnTableTag.css';

import fire from './img/Fire.png';

const BtnTableTag = ({ btnName, showFire = false }) => { 
    const [buttonName, setButtonName] = useState('');

    useEffect(() => {
        setButtonName(btnName);
    }, [btnName]); 

    return (
        
            <button className='marketCatBtn'>
                <div className="market-btn-detail">
                    {showFire && <img src={fire} alt="Fire" />} 
                    {buttonName}
                </div>
            </button>

    );
}

export default BtnTableTag;