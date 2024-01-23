import { useState } from 'react';
import classes from './index.module.css'

function Register({ registerState }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [showErrorMessage, setShowErrorMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("Name", name)
    // console.log("Email", email)
    // console.log("Password", password)
    // console.log("Confirm Password", confirmPassword)

    // basic validation
    /*
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setShowErrorMessage(true)
      // console.log("You must fill all the fields.")
      // alert("You Must fill all the fields")
    } else if (password != confirmPassword) {
      setShowErrorMessage(true)
      // return console.log("Passwords don't match")
    } else {
      console.log("Form Submitted!")
    }
    */
    
    const updatedErrorMessages = [];
    // Alternatively,
    if (!name.trim()) {
      // setShowErrorMessage(true)
      updatedErrorMessages.push("You must enter your name.")
    } else if (!email.trim()) {
      // setShowErrorMessage(true)
       updatedErrorMessages.push("You must enter your email.")
    } else if (!password.trim()) {
      // setShowErrorMessage(true)
      updatedErrorMessages.push("You must enter your password.")
    } else if (!confirmPassword.trim()) {
      // setShowErrorMessage(true)
      updatedErrorMessages.push("You must enter a confirmation password.")
    }
    else if (password != confirmPassword) {
      // setShowErrorMessage(true)
      updatedErrorMessages.push("Passwords don't match")
    }
    setErrorMessages(updatedErrorMessages);

    if (updatedErrorMessages.length == 0) {
      console.log("Form submitted!");
    }
  }

  return (
    <div className={classes.login}>
      <h3>Register your Account</h3>
      { 
        errorMessages.map((errorMessage, index) => {
          return (<p key={index} className={classes.error}>{errorMessage}</p>) 
        })  
      }
      <form onSubmit={(e) => submitHandler(e)} className={classes.login_form}>
        <input type="name" className={classes.input_field} value={name}
          onChange={(e) => setName(e.target.value)} placeholder="Type your name here" />
        <input type="email" className={classes.input_field} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Type your email here" />
        <input type="password" className={classes.input_field} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Type your password here" />
        <input type="password" className={classes.input_field} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" />
        <input type="Submit" className={classes.input_btn} value={"Register"} />
      </form>
      <p>Already have an account? {""}
        <span onClick={registerState} className={classes.login_switch}>Log In</span>
      </p>
    </div>
  )
}

export default Register