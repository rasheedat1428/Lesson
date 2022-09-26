
import React, {useState} from 'react'

const HookState = () => {
    const [arr, setArr] = useState(["Toyota", "Saab","BMW"]);
    const [score, setScore] = useState({
        name: "Lateef",
        mark: 0,
        subject: "Math",
        total: 100
    });
    const [text, setText] = useState("");

    
    const addArr = (name) => setArr((prev) => [...prev, name]);
    const remArr = (name) => setArr((prev) => prev.filter((a)=> a!==name));
    const obj = (mark) => setScore({...score, mark});

  return (
      <div>
        {arr.map((car, i)=>(<p key={i}>{car}</p>))}
        <button onClick={()=> addArr("Honda")}>Add Honda</button>
        <button onClick={()=> addArr("Benz")}>Add Benz</button>
        <button onClick={()=> remArr("Honda")}>Rem Honda</button>
        <button onClick={()=> remArr("Benz")}>Rem Benz</button>

        <p> Name: {score.name}</p>
        <p> Subject: {score.subject}</p>
        <p> Total: {score.total}</p>
        <p> Percentage: {(100 * score.mark) / score.total}%</p>
        <button onClick={() => obj(50)}>Mark</button>
    <br/> <br/>
        <input type="text" value={text}  onChange ={(e) => setText(e.target.value)}/>
        <h2>Text value</h2>
        <p>{text}</p>


    </div>
  )
}

export default HookState