"use client"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../reducer/todo'
function Test() {
  const [input , setInput]= useState('')
  const dispatch = useDispatch();
  const data = useSelector(state => state.todos)
  console.log('data',data);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
  }

  return (
    <div>
      Test Page
      {data.map((item)=>{
        return <h1 key={item.id}>{item.text}</h1>
      })}
      <div>
        <form  onSubmit={handleClick}>
          <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} /> 
          <button type='submit' >click</button>
        </form>
      </div>
    </div>
  )
}

export default Test
