import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../src/components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Route path=''>

        </Route>
      </Router>
    </div>
  )
}

export default App
