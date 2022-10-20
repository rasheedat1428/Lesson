import React,{useReducer, useState} from 'react'
const initialState = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
  ];

const reducer = (state, action) => {
    switch(action.type) {
        case "COMPLETE": {
            return state.map((todo) => {
                if (todo.id===action.id) {
                    return {...todo, complete: !todo.complete}
                }
                else {
                    return todo;       
                } 
            })

        }
    }
}



const CustomUseReducer = () => {
    const [todos, dispatch] = useReducer(reducer, initialState)
  
    const handle = (todo)=> {
        dispatch({type: "COMPLETE", id: todo.id});
    }
    return (
    <div>
   {todos.map((todo) => (<p key={todo.id}>
    <label>
        <input type="checkbox"
        checked={todo.complete}
        onChange={()=>handle(todo)} />
        {todo.title}
    </label>
   </p>))}
    {JSON.stringify(todos)}
    
    </div>
  )
}

export default CustomUseReducer;