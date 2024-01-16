import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Followers from './pages/Followers/index.jsx'
import Setting from './pages/Setting/index.jsx'

function App() {
   return (
    <Routes>
      <Route path="/" eleement={<Auth />} />
      <Route path="/auth" eleement={<Home />}/>
     <Route path="/setting" eleement={<Setting />}/> 
     <Route path="/followers" eleement={<Followers />} />
</Routes>
   )
}

export default App
