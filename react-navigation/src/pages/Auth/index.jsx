 import {Link} from 'react-router-dom'


function Auth() {
    return (
        <>
        <h1>This is an auth page.</h1> 
            {/* <a href="/">Take me to home page.</a> */}
            <Link to="/">Take me to Home</Link>
         
            <Link to="/products">Take me to Products</Link>
        </>
    )
}
export default Auth