import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from '../src/components/Navbar'
import './App.css'
import Home from './components/pages/Home'
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Futter from './components/Footer';


function App() {

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/products"  Component={Products} />
          <Route path="/services"  Component={Services} />
          <Route path="/sign-up"  Component={SignUp} />
        </Routes>
        <Futter />
      </Router>
    </div>
  )
}

export default App
