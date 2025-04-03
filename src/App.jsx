import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home/home'
import Market from './components/Market/Market'
import Earn from './components/Earn/Earn';
import Portfolio from './components/Portfolio/Portfolio'
import Wallet from './components/Wallet/Wallet'
import Transfer from './components/Transfer/Transfer';
import Signin from './components/Signin/Signin'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  )
}

export default App
