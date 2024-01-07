import { useState } from 'react'
import Auth from './pages/Auth'
import Home from './pages/Home'


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const toggleState = () => {
    setIsAuth(!isAuth);
  }
  return (
    <div>
      <button onClick={toggleState}>Toggle Auth State</button>
     {isAuth ? <Home /> : <Auth />}
     
     
    </div>
  )
}


export default App
