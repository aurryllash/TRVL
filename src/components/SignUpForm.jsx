import React, { useState, useEffect } from 'react'
import './SignUpForm.css'
import Button from './Button'

const MustBeFilledError = () => {
    return <p style={{ color: 'rgb(253, 82, 82)', fontSize: '15px', marginTop: '5px' }}>Section must be filled!</p>
}

const SignUpForm = () => {

    const [error, setError] = useState({
        name: false,
        lastName: false,
        email: false,
        password: false
    })
    const [isEmpty, setIsEmpty] = useState({
        name: true,
        lastName: true,
        email: true,
        password: true
    })

    const [btnDisabled, setBtnDisabled] = useState(false)

    const CheckIfIsFilled = (event) => {
        const { name, value } = event.target

        setError(prevErrors => ({
            ...prevErrors, 
            [name]: value === ''
        }))

        setIsEmpty(prevErrors => ({
            ...prevErrors, 
            [name]: value === ''
        }))
    }

    const validation = () => {
        const { name, lastName, email, password } = isEmpty

        return (name || lastName || email || password)
    }
    
    useEffect(() => {
        setBtnDisabled(validation())
    }, [isEmpty])

  return (
    <div className='sign-up-container'>
        <h1 style={{ marginTop: '50px' }}>Sign Up Please</h1>
        <form className="sign-up-form">
            <div className="input-field">
                <label>Name: <sup>*</sup> </label>
                <input type="text" name='name' placeholder='john...' onBlur={CheckIfIsFilled} />
                { error.name && <MustBeFilledError /> }
            </div>
            <div className="input-field">
                <label>LastName: <sup>*</sup> </label>
                <input type="text" name='lastName' placeholder='Yanker...' onBlur={CheckIfIsFilled} />
                { error.lastName && <MustBeFilledError /> }
            </div>
            <div className="input-field">
                <label>Email: <sup>*</sup> </label>
                <input type="email" name='email' placeholder='john@gmail.com' onBlur={CheckIfIsFilled} />
                { error.email && <MustBeFilledError /> }
            </div>
            <div className="input-field">
                <label>Password: <sup>*</sup> </label>
                <input type="password" name='password' placeholder='Fh56h7hj/!' onBlur={CheckIfIsFilled} />
                { error.password && <MustBeFilledError /> }
            </div>
            <div className="button-container">
                <Button 
                style={{ width: '200px' }}
                type='submit'
                buttonStyle='btn--outline' 
                buttonSize='btn--large' 
                disabled={ btnDisabled }>Sign Up</Button>
            </div>
        </form>
    </div>
  )
}

export default SignUpForm
