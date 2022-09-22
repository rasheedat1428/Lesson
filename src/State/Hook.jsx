import { useState } from "react"
import React from 'react'

const Hook = () => {
    const [count, setCount] = useState(0);

    const add = () => count < 10 && setCount(count +1);
    const sub = () => count > 0 && setCount(count -1);
    
    return (
    <div className="div" style={{marginLeft: 400, backgroundColor: "pink"}}>
        <h3>Counting number</h3>
        <p id="myId">{count}</p>
        <div>
        <button onClick={add}>+</button> 
        <button onClick={sub}>-</button>
        </div>
    </div>
  )
}

export default Hook