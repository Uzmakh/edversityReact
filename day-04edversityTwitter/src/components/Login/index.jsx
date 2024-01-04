import './index.css'
function Login({loginState}) {
    // const { loginState } = props;
    // console.log(loginState);
    return (
        <div className='login'>
            <h3>Login to your Account</h3>
            <form className='login_form'>
                <input type="email" className='input_field' placeholder="Type your email here" />
                <input type="password" className='input_field' placeholder="Type your password here" />
                <input type="Submit" className='input_btn' value={"Login"}/>
            </form>
            <p>Don't have an account? {""}
                <span onClick={
                    loginState} className='login_switch'>Register</span></p>
        </div>
    )
}

export default Login;