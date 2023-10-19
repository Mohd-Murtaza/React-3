import React, { useState } from 'react'
import './InputBox.css'
const InputBox = () => {
    const [text, setText]= React.useState("");
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const clearText=()=>{
        setText("")
    }
  return (
    <>
    <div id='mainDiv'>
      <input className='inp' type="text" onChange={handleChange} value={text} placeholder='Write here...'/>
      <button className='btn' onClick={clearText}>Clear</button>
    </div>
    <h2 className='text'>{text}</h2>
    </>
  )
}
export default InputBox
