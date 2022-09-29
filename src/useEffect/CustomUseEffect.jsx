import React, {useEffect, useState} from 'react'

const CustomUseEffect = () => {
    const [loading, setLoading] = useState(true);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setLoading(!loading); 
}, [clicked]);
  return (
    <div>
         {loading ? <p>Loading...</p> : <p>Loaded</p> }
         <button onClick={() =>setClicked(!clicked) }>
            {clicked ? "Stop Loading" : "Load Again"}
         </button>
    </div>
  )
}

export default CustomUseEffect