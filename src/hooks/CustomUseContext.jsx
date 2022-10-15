import React, {useState, createContext, useContext} from 'react'



const Lateef = createContext();

const CustomUseContext = () => {
    const [user, setUser] = useState("Happy");

  return (
    <div>
        <Lateef.Provider value={user}>
            <h1>First Heading</h1>
            <h3>{`I am ${user}!`} </h3>
            <p>{user}</p>
            <Component1  />
            
        </Lateef.Provider>
    </div>
  );
}
const Component1= () => {
       return (
        <>
        <h1>Component3</h1>
        
        <Component4 />
        </>
    )
}
const Component4 = () => {
    const user = useContext(Lateef);
    return (
        <>
        <h1>Component5</h1>
         <h3>{`They are  ${user}`}</h3>
        </>
    )
}

console.log("Hurray")
export default CustomUseContext