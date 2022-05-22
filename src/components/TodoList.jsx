import React from 'react'

const TodoList = ({todos,deleteTodo}) => {

  return (
 
    <li>{todos}
    <button onClick={()=>deleteTodo(todos)}>
     Delete</button>  </li>
 
   
   
   
  )
}
export default TodoList;