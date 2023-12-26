function Counter(props) {
  let count = props.count
  let setCount = props.setCount
  console.log(props.count)
  // const [count, setCount] = useState(0)


  function increaseCounter() {
    let currentCount = count; // 0
    currentCount++; // 0 + 1 = 1
    setCount(currentCount);
  }
  return (
    <>
     
      <button onClick={increaseCounter}>Increase the number</button>
      <p>This value is  {count} </p>
    </>
)
  }


export default Counter;