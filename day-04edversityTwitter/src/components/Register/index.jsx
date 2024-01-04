import './index.css'
function Register({ registerState }) {
    return (
            <div className='login'>
                <h3>Register to your Account</h3>
                <form className='login_form'>
                    <input type="name" className='input_field' placeholder="Type your name here" />
                    <input type="email" className='input_field' placeholder="Type your email here" />
                    <input type="password" className='input_field' placeholder="Type your password here" />
                    <input type="password" className='input_field' placeholder="Confirm your password" />
                <input type="Submit" className='input_btn' value={"Register"} />
                </form>
        <p>Already have an account? {""}
          <span onClick={registerState} className='login_switch'>Log In</span>
                </p>
            </div>
        )
    }

   

export default Register;