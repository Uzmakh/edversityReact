import { useState, useEffect } from 'react'
import Auth from './pages/Auth'
import Home from './pages/Home'


function App() {
  // const [isAuth, setIsAuth] = useState(false);
  // const toggleState = () => {
  //   setIsAuth(!isAuth);
  // }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // console.log("use Effect - callonce")
    // API Call

    fetch('https://dummyjson.com/products')
      .then((res) => {
      return res.json();
      })
      .then((result) => {
        console.log(result.products);
          setProducts(result.products)
      }) ;

  }, []);
  // useEffect(() => {
  //   console.log("use Effect - update number")
  //   // API Call
  // }, [number])

  // const updateNumber = () => {
  //   const newNumber = number + 1;
  //   setNumber(newNumber);
  // }

  return (
    <div>
      {/* <button onClick={toggleState}>Toggle Auth State</button>
       {isAuth ? <Home /> : <Auth />} */}


      {/* <p>{number}</p>
      <button onClick={updateNumber}>Update Number</button> */}
      {products.map((products, index) => {
        return (
          <div key={index}>
            <img src={products.thumbnail} alt="" />
            <p> Title: {products.title}</p>
            <p> Description: {products.description}</p>
            <p> Price: {products.price}</p>
            <p> Brand: {products.brand}</p>
            </div>
        )
      })}
     
      {/* <Auth/> */}
      {/* <Home /> */}
    </div>

  )
}


export default App
