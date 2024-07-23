import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from '../src/components/Navbar'
import './App.css'
import Home from './components/pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" exact  Component={Home}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
