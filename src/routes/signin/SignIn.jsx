import React from 'react'
import './signin.css'
import {auth, signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'
const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user);
        const userDocReference = await createUserDocFromAuth(user);
        console.log(userDocReference)
    }


  return (
    <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign IN</button>
    </div>
  )
}

export default SignIn