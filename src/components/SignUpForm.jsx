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
        Name: '',
        LastName: '',
        Email: '',
        Password: ''
    })
    const [isEmpty, setIsEmpty] = useState({
        Name: '',
        LastName: '',
        Email: '',
        Password: ''
    })

    const [btnDisabled, setBtnDisabled] = useState(false)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setError(prevErrors => {
            const newState = { ...prevErrors }

            if(value === '') {
                newState[name] = `${name} must be filled!` 
            } else if(name === 'Password') {
                newState[name] = `${name} must be at least 5 characther`
            } else {
                newState[name] = ''
            }
            return newState
        })

        setIsEmpty(prev => ({
            ...prev, 
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
        const { Name, LastName, Email, Password } = isEmpty
        setBtnDisabled(Name == '' || LastName == '' || Email == '' || Password == '')
        console.log(btnDisabled)
    }, [isEmpty])

  return (
    <div className='sign-up-container'>
        <h1 style={{ marginTop: '50px' }}>Sign Up Please</h1>
        <form className="sign-up-form">
            <div className="input-field">
                <label>Name: <sup>*</sup> </label>
                <input type="text" name='Name' placeholder='john...' onBlur={handleInputChange} />
                { error.Name && <MustBeFilledError name={error.Name} /> }
            </div>
            <div className="input-field">
                <label>LastName: <sup>*</sup> </label>
                <input type="text" name='LastName' placeholder='Yanker...' onBlur={handleInputChange} />
                { error.LastName && <MustBeFilledError  name={error.LastName} /> }
            </div>
            <div className="input-field">
                <label>Email: <sup>*</sup> </label>
                <input type="email" name='Email' placeholder='john@gmail.com' onBlur={handleInputChange} />
                { error.Email && <MustBeFilledError  name={error.Email} /> }
            </div>
            <div className="input-field">
                <label>Password: <sup>*</sup> </label>
                <input type="password" name='Password' placeholder='Fh56h7hj/!' onBlur={handleInputChange} />
                { error.Password && <MustBeFilledError  name={error.Password} /> }
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
