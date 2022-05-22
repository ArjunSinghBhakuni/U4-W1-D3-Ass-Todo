import React, { useState } from 'react'

export const TodoInput = ({addTodo}) => {
const [value, SetValue] = useState("")

  return (
    <div>
     <input 
     value={value}
     type="text" placeholder='New Todo Item' onChange={(e)=>SetValue(e.target.value)}  />
     <button onClick={()=>{
      console.log(value)
      addTodo(value)
      SetValue("")
     }}>
Add
     </button>
    </div>
  )
}
