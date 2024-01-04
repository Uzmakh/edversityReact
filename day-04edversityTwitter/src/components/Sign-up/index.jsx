import './index.css'
function SignUp({ signUpState }) {
    return (
            <div className='signin'>
                <h3>Sign-Up to your Account</h3>
                <form className='signin_form'>
                    <input type="name" className='input_field' placeholder="Type your name here" />
                    <input type="email" className='input_field' placeholder="Type your email here" />
                    <input type="password" className='input_field' placeholder="Type your password here" />
                    <input type="password" className='input_field' placeholder="Confirm your password" />
                <input type="Submit" className='input_btn' value={"SignUp"} />
                </form>
        <p>Already have an account? {""}
          <span onClick={signUpState}className='signin_switch'>Sing In</span>
                </p>
            </div>
        )
    }

   

export default SignUp;