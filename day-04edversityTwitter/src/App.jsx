import { useState } from 'react'
import Auth from './pages/Auth'
import Home from './pages/Home'


function App() {
  const [isAuth, setAuth] = useState(false);
  const toggleState = () => {
    setAuth(!isAuth);
}
  return (
    <div>
      <button onClick={toggleState}>Toggle Auth State</button>
     {isAuth ? <Home /> : <Auth />}
    </div>
  )
}

export default App
