import React from 'react'
import './buttons.styles.scss'
/* 
    default button
    inverted button
    google signin button
    Basically since we have three buttons what we can do is make an object
    with the two values, the default is already covered what remains is the 
    google and the inverted. So create a  button type and pass it as props

*/


/* 
   
*/

const buttonClassName = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonClassName, ...otherProps}) => {
  return (
    <button 
        className={`button-container ${buttonClassName[buttonClassName]}`}
        {...otherProps} 
    >
        {children}
    </button>
  )
}

export default Button