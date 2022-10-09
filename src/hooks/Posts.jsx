import React, {useEffect, useState} from 'react'
import Post from './Post'


const Posts = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPost = () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
            setLoading(false);
                setData(json);                                                   
                setError("");
        }) 
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
        }
        fetchPost();
    }, []);

  return (
    <div className="posts">
     {loading && <p>Loading...</p>} 
     {error && <p>{error}</p>}
     {data.map((obj, i) => (<Post key={i}  post={obj} />))}  
    </div>
  )
}

export default Posts;