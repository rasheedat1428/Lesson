import React,{useEffect, useState} from 'react'
import TodoCont from './TodoCont';

const TodoExample = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    const fetchApi = (url, dFxn, eFxn) => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => dFxn(data))
        .then((err) => eFxn(err))
    };
        useEffect(() => {
          const intData = (dat) => {
            setData(dat);
            setError("");
            setLoading(false)
            };
          const intError = (err) => {
            setLoading(false)
            setError(err.message);
            };
           fetchApi(
            "https://jsonplaceholder.typicode.com/todos",
            intData,
            intError
           );
          }, []);
        
    
  return (
    <div className='posts'>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data.map((obj) => (
        <TodoCont key={obj.id} todo={obj} fetchApi={fetchApi} />))}
        
    </div>
  )
}

export default TodoExample