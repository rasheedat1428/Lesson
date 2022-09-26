import React, { useState } from 'react'

const ColorState = () => {
    const [color, setColor] = useState("");

    return (
      <div className='divi'>
          <h3 id='it'> Getting Color </h3>
          <p>My fav color is:{color.toUpperCase()}</p>
          <div style={{width: 30, height: 30, background: color}}></div><br />
          <div>
          {color !== "red" &&   (<button onClick={() => setColor("red")}>RED</button>)}
          {color !== "green" && (<button onClick={() => setColor("green")}>GREEN</button>)}
          {color !== "blue" &&  (<button onClick={() => setColor("blue")}>BLUE</button>)}
          {color !== "black" && (<button onClick={() => setColor("black")}>BLACK</button>)}
          </div>
      </div>
    )
  }

export default ColorState