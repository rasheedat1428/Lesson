import React,{useState} from 'react'

const Customform = () => {
    const [details, setDetails] = useState({});
    const [error, setError] = useState("");

    const Message = (e) => {
        e.preventDefault();
        if(details.fname && details.lname && details.age) {
            setError("");
            console.log(details);
        } else setError("All fields are mandatory");
    };
  return (
    <div>
        <form onSubmit={Message}>
            <p>{error}</p>
            <label label-for="fname">Firstname:</label> 
            <input type="text" 
            name='fname'
             id='fname' 
            value={details.fname} 
            onChange= {(e) => setDetails({...details, fname: e.target.value})}/> <br/><br/>
            <label label-for="lname">Lastname:</label> 
            <input type="text" name='lname' id='lname' value={details.lname} 
            onChange= {(e) => setDetails({...details, lname: e.target.value})}/><br/><br/>
            <label label-for="age">Age:</label> 
            <input type="text" name='age' id='age' value={details.age} 
            onChange= {(e) => setDetails({...details, age: e.target.value})}/> <br/><br/>
            <input type="submit" value="submit" /> <br/>
        </form>
        <p>First Name:{details.fname}</p>
        <p>Last Name:{details.lname}</p>
       <p> Age:{details.age}</p>
        <p>{JSON.stringify(details)}</p>
    </div>
  )
}

export default Customform