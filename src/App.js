import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPageBody from './components/LandingPageBody';
import { BrowserRouter } from 'react-router-dom';

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <LandingPageBody />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

