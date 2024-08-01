import React from 'react'
import Button from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        
        <video src="/public/vecteezy_natural-scenery-of-beautiful-erawan-waterfalls-in-a-tropical_11731185.mp4" autoPlay loop muted ></video>
        <h1>ADVANTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
                GET STARTED
            </Button>
            <Button
                className='btns'
                buttonSize='btn--large'
            >
                WATCH TRAILER 
                <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection