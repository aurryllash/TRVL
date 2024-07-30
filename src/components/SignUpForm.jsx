import React from 'react'
import './SignUpForm.css'

const SignUpForm = () => {
  return (
    <div className='sign-up-container'>
        <h1 style={{ marginTop: '50px' }}>Sign Up Please</h1>
        <form className="sign-up-form">
            <div className="input-field">
                <label>Name: </label>
                <input type="text" placeholder='john...' />
            </div>
            <div className="input-field">
                <label>LastName: </label>
                <input type="text" placeholder='Yanker...' />
            </div>
            <div className="input-field">
                <label>Email: </label>
                <input type="email" placeholder='john@gmail.com' />
            </div>
            <div className="input-field">
                <label>Password: </label>
                <input type="password" placeholder='Fh56h7hj/!' />
            </div>
        </form>
    </div>
  )
}

export default SignUpForm
