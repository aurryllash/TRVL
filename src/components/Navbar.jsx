import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  // const showButton = () => {
  //   if(window.innerWidth <= 960) {
  //     setButton(false)
  //   } else {
  //     setButton(true)
  //   }
  // }

  // window.addEventListener('resize', showButton)
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' >
                  TRVL <i className='fab fa-typo3'></i>
                </Link>
                <div className="menu-icon" onClick={() => setClick(!click)}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                  <li className="nav-item">
                    <Link to='/Home' className='nav-links' onClick={() => setClick(false)}>
                    Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/services' className='nav-links' onClick={() => setClick(false)}>
                    Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/products' className='nav-links' onClick={() => setClick(false)}>
                    Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/sign' className='nav-links-mobile' onClick={() => setClick(false)}>
                    Sign Up
                    </Link>
                  </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar