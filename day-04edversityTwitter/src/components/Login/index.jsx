import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import classes from './index.module.css'


function Login({ loginState }) {
  // const { loginState } = props;
  // console.log(loginState);

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const onLogin = async (e) => {
    e.preventDefault();
    let errMessage = "";
    const validEmail = email.trim();

    if (validEmail.length == 0) {
      errMessage = "Please write your email!";
    } else if (password.length == 0) {
      errMessage = "Please write your password";
    }

    setErrorMessage(errMessage);

    // As the above errorMessage is async, I am using this
    if (!errMessage) {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        console.log(res.user.uid);
        navigate("/home");
      } catch (error) {
        // console.log(error.code);
        // console.log(error.message);
        if (error.code == "auth/invalid-credential") {
          setErrorMessage("Invalid Credentails!");
        }
      }
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      } else {
        console.log("User is not logged in!");
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <div className={classes.login}>
      <h3>Login to your Account</h3>
      {errorMessage ? <p className={classes.error}>{errorMessage}</p> : ""}
      <form
        onSubmit={(e) => { onLogin(e) }}
        className={classes.login_form}>
        
        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className={classes.input_field} placeholder="Type your email here" />
        <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className={classes.input_field} placeholder="Type your password here" />
        <input type="submit" className={classes.input_btn} value={"Login"} />
      </form>
      <p>Don't have an account? {""}
        <span onClick={
          loginState} className={classes.login_switch}>Register</span></p>
    </div>
  )
}

export default Login;