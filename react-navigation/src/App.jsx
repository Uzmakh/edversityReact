import {useState} from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'
import './App.css'


function App() {
  const [authenticated, setUserAuthentication] = useState(true)
  
  const toggleAuth = () => {
    setUserAuthentication(!authenticated)
  }
  return (
    <>
      <button onClick={toggleAuth}>Toggle Authentication</button>
      <p>Current Auth Status: {authenticated.toString()}</p>

    <Routes>
      <Route path="/home" element={authenticated ? <Home/> : <Navigate replace to="/auth"/>} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/products" element={<Products />} />
      </Routes>
      </>
  )
}

export default App
