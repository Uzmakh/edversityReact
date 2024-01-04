import './index.css'
function SignIn({signInState}) {
    // const { signinState } = props;
    // console.log(signinState);
    return (
        <div className='signin'>
            <h3>Sign-In to your Account</h3>
            <form className='signin_form'>
                <input type="email" className='input_field' placeholder="Type your email here" />
                <input type="password" className='input_field' placeholder="Type your password here" />
                <input type="Submit" className='input_btn' value={"SignIn"}/>
            </form>
            <p>Don't have an account? {""}
                <span onClick={signInState} className='signin_switch'>Sing Up</span></p>
        </div>
    )
}

export default SignIn;