import React from 'react'

const Name = () => {
    const addition = (x, y) => x + y;
    const subtraction = (x, y) => x - y;
    const division = (x, y) => x / y;
      return (
    <div>
       <code>{addition(30, 10)}</code> 
       <br/>
       <code>{subtraction(30, 10)}</code> 
       <br/>
       <code>{division(30, 10)}</code>  
    </div>
  );
};

export default Name;