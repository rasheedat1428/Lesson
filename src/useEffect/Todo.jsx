import React, {useEffect, useState} from 'react'
import Post from './Post';

const Todo = () => {
    const [Loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    const fetchApi = (url, ffxn, efxn)=> {
        fetch(url)
        .then((res) => res.json())
        .then((data) => ffxn(data))
        .then((err) => efxn(err));
    };
    
    useEffect(() => { 
        const load = () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setLoading(false)
                setError("")
                setData(json)
            })
            .catch((err) => {
                setError(err.message) 
                setLoading(false); 
            });
        }
    
        // const initialData =(data) => {
        //     setData(data);
        //     setLoading(false)
        //     setError("")
        // }
        // const initiateError = (err) => {
        //     setLoading(false)
        //     setError(err.message);
        // }
        
        load();
        // fetchApi("https://jsonplaceholder.typicode.com/posts",
        // initialData,
        // initiateError
        // );
    
}, []);

  return (
    <div>
        {Loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data.map((obj) => (<Post key={obj.id} post={obj}/> ))}
    </div>
  );
};

export default Todo;        

