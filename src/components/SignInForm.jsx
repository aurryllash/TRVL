import React, { useState } from 'react'
import Button from './Button'
import './SignInForm.css'

const SignInForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className='sign-in-container'>
        <h1 style={{ marginTop: '50px' }}>Sign In Please</h1>
        <form className="sign-in-form">
            <div className="input-field">
                <label>Email: <sup>*</sup> </label>
                <input 
                type="email" 
                name='Email' 
                placeholder='john@gmail.com' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input-field">
                <label>Password: <sup>*</sup> </label>
                <input 
                type="password" 
                name='Password' 
                placeholder='Fh56h7hj/!' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="button-container">
                <Button 
                style={{ width: '200px' }}
                type='submit'
                buttonStyle='btn--outline' 
                buttonSize='btn--large' 
                onClick={handleSubmit}>Sign Up</Button>
            </div>
        </form>
    </div>
  )
}

export default SignInForm
