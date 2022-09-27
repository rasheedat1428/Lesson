import React,{useState} from 'react'

const Form1 = () => {
    const [det, setDet] = useState({name: "", age:""});
    const [err, setErr] = useState("")

    const Details = (e) => setDet({...det, [field]: e.target.value});
    const Error = (e) => {
      e.changeDefault();
      if (det.name && det.age) {
        setErr("");
        console.log(det);
      } else setErr("All fields are mandatory");
    };

  return (
    <div>
      <p style={{ color: "red" }}>{err}</p>
      <form onSubmit={Error}>
      <label label-for="name">Name:</label>
      <input type="text" id='name' name='name' value={det.name}
       onChange = {(e) => Details(e, "name")} /> <br /><br />
       <label label-for="name">Name:</label>
      <input type="text" id='age' name='age' value={det.age}
       onChange = {(e) => Details(e, "age")} /> <br /><br />
       <input type="submit" value="Submit" />
      </form>
      Name: {det.name}<br /><br />
      Age: {det.age}<br /><br />
      <p> {JSON.stringify (det)} </p>
    </div>
  )
}

export default Form1;