import React, { useState } from 'react'
import './todo.css'

const Todo=()=> {
  const [text, setText] = React.useState("")
  const [todo, setTodo] = React.useState([])
  const handleChange=(e)=>{
    setText(e.target.value)
  }
  const handleClick=()=>{
    const newTodo={
      id : Math.random()+text+Date.now(),
      todo: text
    }
    const addTodo=[...todo, newTodo]
    setTodo(addTodo)
  }
  return (
    <>
      <h2 className='mainHeading'>Add Todos</h2>
      <div id="navDiv">
        <input className='inp' type="text" onChange={handleChange} value={text} placeholder='Write here...'/>
        <button className='addButton' onClick={handleClick}>Add</button>
      </div>
      <div id="todoList">
        {
          todo.map((todoItem)=>(
            <li type='1' className='todoItem' key={todoItem.id}>{todoItem.todo}</li>
          ))
        }
      </div>
    </>
  )
}
export default Todo
