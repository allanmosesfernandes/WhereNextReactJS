import {React, useState} from 'react'
import './sign-up.scss'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'
import { setDoc } from 'firebase/firestore'

import FormInput from '../form-input-component/FormInput'
const SignUpForm = () => {
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const [formFields, setFormFields] = useState(defaultFormFields);
const {displayName, email, password, confirmPassword} = formFields;

const handleChange = (event) => {
const {name, value} = event.target;
setFormFields({...formFields,[name]:value})
}

const resetFormFields = () => {
    setFormFields(defaultFormFields)
}
const formSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        alert('Andha hai kya lavde');
        return;
    }

    try {
        const {user} = await createAuthUserWithEmailAndPassword(email,password);
        await createUserDocFromAuth(user,{displayName});
        resetFormFields();
    }

    catch(error) {
        if(error.code === 'auth/email-already-in-use')
        {
            alert('Cannot create user, email already in use')
        }
    }
}

  return (
    <div className='sign-up--container'>
        <h1>Sign Up with your email & password</h1>
        <form onSubmit={formSubmit}>
            <FormInput 
                label='Display Name'
                type='text' 
                placeholder='John Doe'  
                name='displayName' 
                onChange={handleChange} 
                value={displayName}
            />
            <FormInput 
                label='Email'
                type='email' 
                placeholder='johndoe@gmail.com'  
                name='email' 
                onChange={handleChange} 
                value={email}
            />
            <FormInput 
                label='Password'
                type='password' 
                placeholder='******'  
                name='password' 
                onChange={handleChange} 
                value={password}
            />
            <FormInput 
                label='Confirm Password'
                type='password' 
                placeholder='******'  
                name='confirmPassword' 
                onChange={handleChange} 
                value={confirmPassword}
            />

            <button type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default SignUpForm