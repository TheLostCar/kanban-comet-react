import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPageBody from './components/LandingPageBody';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import './App.css'


const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <Header />

        <Switch>

          <Route exact path='/' component={LandingPageBody} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={LogIn} />

          <Redirect to='/' />
        </Switch>

        <Footer /></div>
    </BrowserRouter>
  )
}

export default App

