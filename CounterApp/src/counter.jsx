import React, { useState } from 'react'
import './counter.css'
const Counter = () => {
    const [count, setCount]=React.useState(0)
    const handleClick=()=>{
        setCount(count+1)
    }
  return (
    <div id='mainDiv'>
      <h1 className='head'>Count is : {count}</h1>
      <button className='btn' onClick={handleClick}>Click Me</button>
    </div>
  )
}
export default Counter
