import { Route, Routes, Navigate} from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Followers from './pages/Followers/index.jsx'
import Followings from './pages/Followings/index.jsx'
import Setting from './pages/Setting/index.jsx'
import './App.css'

function App() {
   return (
    <Routes>
      <Route path="/" eleement={<Auth />} />
      <Route path="/auth" eleement={<Home />}/>
     <Route path="/setting" eleement={<Setting />}/> 
     <Route path="/followers" eleement={<Followers />} />
     <Route path="/followings" eleement={<Followings />} />
</Routes>
   )
}

export default App
