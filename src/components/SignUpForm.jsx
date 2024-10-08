import React, { useState, useEffect, useRer } from 'react'
import { Link } from 'react-router-dom'
import './SignUpForm.css'
import Button from './Button'
import { v4 as uuidv4 } from 'uuid';
import auth from './Firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

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
            } else if(name === 'Password' && value.length < 5) {
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

            // const response = await fetch('http://localhost:3000/users', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(newState)
            // })
            createUserWithEmailAndPassword(auth, isEmpty.Email, isEmpty.Password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
              });

        } catch(error) {
            console.log(error)
        }
        
    }
    
    useEffect(() => {
        const { Name, LastName, Email, Password } = isEmpty
        setBtnDisabled(Name == '' || LastName == '' || Email == '' || Password == '' || Password.length < 5)
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
                <input type="password" name='Password' placeholder='Fh56h7hj/!' onChange={handleInputChange} />
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
            <div className="options">
                <p>Already have an account? <Link to='/sign-in' className='sign-in-link'>Sign in</Link></p>
            </div>
        </form>
    </div>
  )
}

export default SignUpForm
