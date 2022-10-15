import React, {useContext, useState, createContext} from 'react'

export const UserContext = createContext();

export const StudentContext = {
    name: "Derayo",
    score: 84,
    height: 1.89,
};
const CustomUseContext3 = () => {

    const [student, setStudent] = useState(StudentContext)
    return (
    
 <UserContext.Provider value={{student, setStudent}}>
 <div>
    <h1>Student Context</h1>
    <h3>{JSON.stringify(student)}</h3>
    <ShowStudent />
    </div>
 </UserContext.Provider>
 
  )
};
const ShowStudent = () => {
  const {student, setStudent}= useContext(UserContext);
    return (
      <>
    <h1> Show Details </h1>
    <h3> {JSON.stringify(student)}</h3>
    <button onClick={() => setStudent({...student, Ra:"Ra"})}>Add</button>
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
  const student = useContext(UserContext)
  return(
    <>
    <h1>Continuation</h1>
    <p>{`The student is ${JSON.stringify(student)}`}</p>
    </>
  )
};
export default CustomUseContext3