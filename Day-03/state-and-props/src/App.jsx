import { useState } from "react";
import Counter from './components/Counter'
import Institute from './components/Institute'

import './App.css'

function App() {
  // for counter updation, we use useState hook
  const [count, setCount] = useState(0)
  // for institute instance,
  const info = [
  {
    instructor: "Arsalan",
    course: "ReactJs",
    isStarted: true
    },
  {
    instructor: "Saad",
    course: "AngularJs",
    isStarted: true
    },
  {
    instructor: "Hamza",
    course: "VueJs",
    isStarted: false
    },
  {
    instructor: "Umar",
    course: "Vanilla Js",
    isStarted: true
    }
 ]
    return (
    <>
        <Counter count={count} setCount={setCount} />
        
        {info.map((item, index) => {
          if (item.isStarted == true) {
            return (
              <Institute key={index} instructor={item.instructor} course={item.course} />
            );
          } else {
            return;
          }
          })}
    </>
  )
}

export default App
