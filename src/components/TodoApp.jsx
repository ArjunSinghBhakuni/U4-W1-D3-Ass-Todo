import React, { useState } from 'react'
import { TodoInput } from './TodoInput'
import {v4 as uuidv4} from 'uuid'
 
import  TodoList  from './TodoList'
 const TodoApp = () => {

  const [todos,setTodos] =useState([])

  const addTodo = (newTodo)=>{
setTodos([...todos,{
  id:uuidv4(),
  value:newTodo,
},
]);
  };

  const deleteTodo =(value)=>{
    setTodos(todos.filter((todo)=>todo !==value))
  }
  return (
    <div>

     <TodoInput addTodo={addTodo}/>
     {todos.map((todo)=>(
       
         
       <TodoList key={todo.id} todos={todo.value}  deleteTodo = {deleteTodo}/>
       
       
     ))}
    </div>
  )
}


export default TodoApp