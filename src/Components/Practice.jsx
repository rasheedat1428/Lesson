import React from 'react'

const Practice = ({coin}) => {
const {name, price, symbol:{n2}} = coin;

  return (
    <div>
       <p> Name: {name} </p>
        <p>Price:{price}</p>
        <p>Symbol:{n2}</p>
    </div>
  )
}

export default Practice;