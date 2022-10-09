import React from 'react'

const CustomAsync = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const asyncFn = async() => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      console.log("Good Job")
      const res = await response.json()
      console.log(res)
      //setData(res)
    }
    asyncFn();
  }, []);
  
  return (
    <div>{data}</div>
  );
};
export default CustomAsync;