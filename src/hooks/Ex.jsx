import React, {useState, useEffect} from 'react'

const Ex = () => {
    const [firt, setFirt] = useState(true);
    const [check, setCheck] = useState(false);
    const [error, setError] = useState("");

    const ch = () => setCheck(true);

    useEffect (() => {
        setFirt(!firt)
        setError("")
    },
        [check]);
  return (
    <div>
        {firt ? "Good" : "Bad"}<br />
        {error && <p>{error}</p>}
      <button onClick={ch}>{check ? "ok" : "Not ok"}</button>  
    </div>
  )
}

export default Ex