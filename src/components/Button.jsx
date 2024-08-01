import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--large', 'btn--medium', 'btn--xxl']
const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    style,
    disabled
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
  
  return (
    <Link to='/sign-up' className='btn-mobile'>
        <button 
        style={style}
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${ disabled ? 'disabled' : '' }`}
        onClick={onClick}
        type={type}
        disabled={disabled}>
            { children }
        </button>
        
    </Link>
  )
}

export default Button