import React, { useState, useEffect, useRef  } from 'react'
import './SignUpForm.css'
import Button from './Button'
import { v4 as uuidv4 } from 'uuid';

const MustBeFilledError = ({ name }) => {
    return <p 
    style={{ color: 'rgb(253, 82, 82)', fontSize: '15px', marginTop: '5px' }}
    >{name}</p>
}

const SignUpForm = () => {

    const [error, setError] = useState({
        name: '',
        lastName: '',
        email: '',
        password: ''
    })
    const [isEmpty, setIsEmpty] = useState({
        name: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [btnDisabled, setBtnDisabled] = useState(false)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        // setError(prevErrors => ({
        //     ...prevErrors, 
        //     [name]: value === '' ? `${name}` : ''
        // }))
        setError(prevErrors => {
            const newState = { ...prevErrors }

            if(value === '') {
                newState[name] = `${name} must be filled!` 
                
            } else if(name === 'password') {
                newState[name] = `${name} must be at least 5 characther`
            } else {
                newState[name] = ''
            }

            return newState
        })

        setIsEmpty(prevErrors => ({
            ...prevErrors, 
            [name]: value
        }))
    }

    const handleSubmit = async () => {
        try {
            const newState = {
                ...isEmpty,
                id: uuidv4()
            }

            setIsEmpty(newState)

            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newState)
            })
            console.log(response)
        } catch(error) {
            console.log(error)
        }
        
    }
    
    useEffect(() => {
        const { name, lastName, email, password } = isEmpty
        setBtnDisabled(name == '' || lastName == '' || email == '' || password == '')
    }, [isEmpty])

  return (
    <div className='sign-up-container'>
        <h1 style={{ marginTop: '50px' }}>Sign Up Please</h1>
        <form className="sign-up-form">
            <div className="input-field">
                <label>Name: <sup>*</sup> </label>
                <input type="text" name='name' placeholder='john...' onBlur={handleInputChange} />
                { error.name && <MustBeFilledError name={error.name} /> }
            </div>
            <div className="input-field">
                <label>LastName: <sup>*</sup> </label>
                <input type="text" name='lastName' placeholder='Yanker...' onBlur={handleInputChange} />
                { error.lastName && <MustBeFilledError  name={error.lastName} /> }
            </div>
            <div className="input-field">
                <label>Email: <sup>*</sup> </label>
                <input type="email" name='email' placeholder='john@gmail.com' onBlur={handleInputChange} />
                { error.email && <MustBeFilledError  name={error.email} /> }
            </div>
            <div className="input-field">
                <label>Password: <sup>*</sup> </label>
                <input type="password" name='password' placeholder='Fh56h7hj/!' onBlur={handleInputChange} />
                { error.password && <MustBeFilledError  name={error.password} /> }
            </div>
            <div className="button-container">
                <Button 
                style={{ width: '200px' }}
                type='submit'
                buttonStyle='btn--outline' 
                buttonSize='btn--large' 
                disabled={ btnDisabled }
                onClick={handleSubmit}>Sign Up</Button>
            </div>
        </form>
    </div>
  )
}

export default SignUpForm
