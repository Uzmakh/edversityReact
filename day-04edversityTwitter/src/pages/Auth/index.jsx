import { useState } from 'react'
import SignIn from '../../components/Sign-in'
import SignUp from '../../components/Sign-up'
import './index.css'

function Auth() {
    const [isSignUp, setIsSignUp] = useState(true);
    const switchState = () => {
        const currentSignUpState = !isSignUp;
        setIsSignUp(currentSignUpState);
    };
    return (
        <div className='container'>
            {
                isSignUp == true ? (<SignIn switchState={switchState} />) : (<SignUp switchState={switchState} />)
            }
          
        </div>
    )
}
export default Auth;