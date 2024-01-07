import { useState } from 'react';
import classes from './index.module.css'
function Register({ registerState }) {
    return (
        <div className={classes.login}>
            <h3>Register to your Account</h3>
            <form className={classes.login_form}>
                <input type="name" className={classes.input_field} placeholder="Type your name here" />
                <input type="email" className={classes.input_field} placeholder="Type your email here" />
                <input type="password" className={classes.input_field} placeholder="Type your password here" />
                <input type="password" className={classes.input_field} placeholder="Confirm your password" />
                <input type="Submit" className={classes.input_btn} value={"Register"} />
            </form>
            <p>Already have an account? {""}
                <span onClick={registerState} className={classes.login_switch}>Log In</span>
            </p>
        </div>
    )
}



export default Register;