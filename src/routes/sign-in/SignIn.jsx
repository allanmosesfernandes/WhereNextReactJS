import {React, useState} from 'react'
import './signin.scss'
import FormInput from '../../components/form-input-component/FormInput'
import {auth, signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'
const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user);
        const userDocReference = await createUserDocFromAuth(user);
        console.log(userDocReference)
    }

    const defaultFormFields = {
    email: '',
    password: '',
}

const [formFields, setFormFields] = useState(defaultFormFields);
const resetFormFields = () => {
    setFormFields(defaultFormFields)
}
const formSubmit = (event) => {
  event.preventDefault();
}
  return (
    <div className='sign-up-container'>
        <h2>I already have an account</h2>
        <span>Sign in with your email & password.</span>
        <form onSubmit={formSubmit}>
                    
        </form>
    </div>
  )
}

export default SignIn