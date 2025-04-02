import React from 'react'
import Spline from '@splinetool/react-spline';
import './ThreeD.css'


const ThreeD = () => {

  return (
    <>
    <div className='threeD'>
      <Spline scene="https://prod.spline.design/inc1WD8tq5QZdUoA/scene.splinecode" />
    </div>
    
    <div className="text">
      <p>SECURE</p>
      <p>FAST</p>
      <p>INTELLIGENT</p>
      <p>FUTURE-READY</p>
    </div>
    </>
  )
}

export default ThreeD

