import React from 'react'

const TodoCont = ({todo, fetchApi}) => {
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState([]);

    const intData = (res) => {
        setData(res);
        setLoading(false)
    };
    const intError = (err) => {
        setLoading(false)
    };
    const getId = () => {
    setLoading(true)
    fetchApi(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,
    intData,
    intError
    ); };
  return (
    <div className={`post ${todo.completed && "post1"}`} onClick={getId}>
      <p>User Id : {todo.userId}</p>
      <p>Title : {todo.title}</p>
      <p>Completed  {todo.completed ? "True" : "false"}</p>
      {loading && <p>Loading.....</p>}
      <p style={{ color: "purple" }}>{data?.title}</p>
    </div>
  )
}

export default TodoCont