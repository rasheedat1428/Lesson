import React,{useEffect, useState, useRef} from 'react'

const CustomUseRef = () => {
    const [inputValue, setinputValue] = useState("")
    const prevValue= useRef();
    
    useEffect(() => {
        prevValue.current =  inputValue
    },[inputValue])
    
  return (
    <div>
        <input type="text"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}/>
        <h2>Current: {inputValue}</h2>
        <h2>Prev: {prevValue.current}</h2>
    </div>
  )
}

export default CustomUseRef