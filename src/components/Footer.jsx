import React from 'react'
import Button from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className="footer-subscription-heading">
                Join the Adventure newletter to receive out best 
                vacation deals
            </p>
            <p className="tooter-subscription-text">
                You can unsubscribe at any time. 
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name='email' placeholder='Your Email'
                    className='footer-input' />
                    <Button buttonStyle='btn--outline'>SUBSCRIBE</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up' >How it works</Link>
                    <Link to='/' >Testimonials</Link>
                    <Link to='/' >Careers</Link>
                    <Link to='/' >Investors</Link>
                    <Link to='/' >Terms Of Services</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact</h2>
                    <Link to='/sign-up' >How it works</Link>
                    <Link to='/' >Testimonials</Link>
                    <Link to='/' >Careers</Link>
                    <Link to='/' >Investors</Link>
                    <Link to='/' >Terms Of Services</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up' >How it works</Link>
                    <Link to='/' >Testimonials</Link>
                    <Link to='/' >Careers</Link>
                    <Link to='/' >Investors</Link>
                    <Link to='/' >Terms Of Services</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact</h2>
                    <Link to='/sign-up' >How it works</Link>
                    <Link to='/' >Testimonials</Link>
                    <Link to='/' >Careers</Link>
                    <Link to='/' >Investors</Link>
                    <Link to='/' >Terms Of Services</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link className='social-logo'>
                    TRVL <i className="fa-solid fa-route"></i>
                    </Link>
                </div>
                <small className='website-rights'>TRVL © 2024</small>
                <div className="social-icons">
                    <Link 
                        className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'>
                            <i className='fab fa-facebook-f' />
                    </Link>
                    <Link 
                        className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'>
                            <i className='fab fa-instagram' />
                    </Link>
                    <Link 
                        className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'>
                            <i className='fab fa-youtube' />
                    </Link>
                    <Link 
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'>
                            <i className='fab fa-twitter' />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer