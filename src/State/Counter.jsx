import React, {useState} from 'react'

const Counter = () => {
const [count, setCount] = useState("");

const increment = () => count < 10 && setCount(count + 1);
const decrement = () => count > 1 && setCount(count - 1);
  return (
    <div className='div'>
    <h3> Set to Count</h3>
    <p style={{ fontWeight: 800, color: "red"}} >{count}</p>
    <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
    </div>
   
  )
}

export default Counter