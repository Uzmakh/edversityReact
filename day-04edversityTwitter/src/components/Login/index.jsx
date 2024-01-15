import { useState } from 'react';
import classes from './index.module.css'
function Login({ loginState }) {
  // const { loginState } = props;
  // console.log(loginState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    const validEmail = email.trim();

    if (!validEmail) {
      setErrorMessage("Please enter your email")
    } else {
      setErrorMessage("Please enter your password")
    }

    setErrorMessage('');
    //   console.log("Email -", email)
    // console.log("Password -", password)
  }
  // .addEventListener('onSubmit', (event) {

  // })
  const updateEmail = () => {

  }
  return (
    <div className={classes.login}>
      <h3>Login to your Account</h3>
      {errorMessage ? <p>{errorMessage}</p> : ""}
      <form
        onSubmit={(e) => { onLogin(e) }}
        className={classes.login_form}>
        
        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className={classes.input_field} placeholder="Type your email here" />
        <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className={classes.input_field} placeholder="Type your password here" />
        <input type="Submit" className={classes.input_btn} value={"Login"} />
      </form>
      <p>Don't have an account? {""}
        <span onClick={
          loginState} className={classes.login_switch}>Register</span></p>
    </div>
  )
}

export default Login;