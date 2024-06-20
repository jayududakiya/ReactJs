import React from "react";

import { useDispatch } from "react-redux";
import {addTodo} from '../features/todo/todoSlice'
import { HANDELBTNS } from "../App";

const AddTodDo = () => {
  
  const dispatch = useDispatch()

  const [inputVal , setInputVal ] = React.useState('')

  const {btnState,setBtnState} = React.useContext(HANDELBTNS)
  
  const handleSubmit = (even) => {
    even.preventDefault()      
    dispatch(addTodo(inputVal))
    even.target[0].value = ""
    setInputVal('')
  }

  const handleEditTodo = () => {
    setBtnState(false)
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-stretch justify-between gap-2 w-full mb-4">
      <div className="relative border rounded-md w-[75%]">
        <label htmlFor="toDo" className="sr-only">
          ToDo
        </label>

        <input
          type="text"
          id="toDo"
          name="todo"
          placeholder="Add Your ToDo...."
          onChange={(even)=>setInputVal(even.target.value)}
          className="w-full rounded-md border-gray-200 pe-10 shadow-sm text-lg p-2"
        />
      </div>
      {
        ! btnState ?
        <button type="submit" className="border rounded-md p-2  bg-purple-700 text-slate-300">
          Add Todo
        </button> : 
        <button type="button" onClick={handleEditTodo} className="border rounded-md p-2  bg-purple-700 text-slate-300">
          Edit Todo
        </button>
      }
    </form>
  );
};

export default AddTodDo;
