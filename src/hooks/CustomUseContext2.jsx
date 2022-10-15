import React, {useContext, useState, createContext} from 'react'

 const UserContext = createContext();

 const initialState = ["cars","foods","electronics"];

const CustomUseContext2 = () => {
    const [array, setArray] = useState(initialState);
    return (
    <div>
 <UserContext.Provider value={{array, setArray}}>
    <h1>Array Context</h1>
    <h3>{array.map((id, i) => (<p key={i}>{id}</p>))}</h3>
    <ShowArray />
 </UserContext.Provider>
    </div>
  )
};
const ShowArray = () => {
  const {array, setArray}= useContext(UserContext)
    return (
      <>
    <h1> Show Details </h1>
    <h3> {JSON.stringify(array)}</h3>
    <button onClick={() => setArray([...array, "Ra"])}>Add</button>
    <Show />
    </>
  )
};
const Show = () => {
  return(
    <>
    <h1>Cont</h1>
    < Component3 />
    </>
  )
};
const Component3 = () => {
  const array = useContext(UserContext)
  return(
    <>
    <h1>Continuation</h1>
    <p>{`The array is: ${JSON.stringify(array)}`}</p>
    </>
  )
};
export default CustomUseContext2