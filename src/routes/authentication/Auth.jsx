import React from 'react'
import './auth.scss'
import SignUpForm from '../../components/signup-form/SignUpForm'
import SignInForm from '../../components/signin-form/SignIn'
const Auth = () => {
  return (
    <div className='authentication-container'>
        <SignInForm />
        <SignUpForm />
    </div>
  )
}

export default Auth