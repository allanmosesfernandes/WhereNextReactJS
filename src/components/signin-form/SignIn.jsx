import {React, useState ,useContext } from 'react'
import { 
    createAuthUserWithEmailAndPassword, 
    createUserDocFromAuth,
    UserSignInWithEmailAndPassword,
    signInWithGooglePopup
 } from '../../utils/firebase/firebase.utils'
import './sigin-form.scss';
import Button from '../buttons/Button'
import FormInput from '../form-input-component/FormInput'

const SignUpForm = () => {
const defaultFormFields = {
    email: '',
    password: '',
}
const [formFields, setFormFields] = useState(defaultFormFields);
const {email, password} = formFields;


const handleChange = (event) => {
const {name, value} = event.target;
setFormFields({...formFields,[name]:value})
}

const resetFormFields = () => {
    setFormFields(defaultFormFields)
}

const signInWithGPopup = async () => {
    const {user}  = await signInWithGooglePopup();
    // await createUserDocFromAuth(user)
    createUserDocFromAuth(user);
}

const formSubmit = async (e) => {
    e.preventDefault();
    try {
        // const {user} = await createAuthUserWithEmailAndPassword(email,password);
        // await createUserDocFromAuth(user,{});
        const { user } = await UserSignInWithEmailAndPassword(email,password);
        resetFormFields();
    }
    catch(error) {

        switch(error.code) {
            case 'auth/wrong-password':
            alert('Wrong password for email');
            break;

            case 'auth/user-not-found':
            alert('User does not exist');
            break;

            default:
            console.log(error)
        }
    }
}

  return (
    <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email & password.</span>
        <form onSubmit={formSubmit}>
            <FormInput 
                label='Email'
                type='email' 
                name='email' 
                onChange={handleChange} 
                value={email}
                required
            />
            <FormInput 
                label='Password'
                type='password' 
                name='password' 
                onChange={handleChange} 
                value={password}
                required
            />
            <div className='buttons-container'>
            <Button buttonClassName='default' type='submit'> Sign In </Button>
            <Button type='button'
            buttonClassName='google-sign-in' 
            onClick={signInWithGPopup}
            >Google Sign In</Button>
            </div>

        </form>
    </div>
  )
}

export default SignUpForm