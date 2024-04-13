import React,{useState} from 'react'
import { FaPlus , FaMinus } from "react-icons/fa";

import './Style.css'


const Count = () => {
    const [Count,setCount] = useState(0);

    function increaseCount (){
        setCount(Count + 1)
    }
    function decreaseCount (){
        if(Count === 0){
            setCount(0)
        }else{
            setCount(Count - 1)
        }

    }
    
    
    
  return (
    <div className='h-[80vh] flex flex-col items-center justify-center'>
        <h1 id='text' className='text-box text-center  font-bold text-9xl mb-3'>{Count}</h1>    
        <div className='btn-box flex flex-wrap items-center justify-center'>
            <button onClick={increaseCount} className='Count-btn text-center text-3xl font-bold '><FaPlus /></button>
            <button onClick={decreaseCount} className='Count-btn decreaseCount text-center text-3xl font-bold '><FaMinus /></button>
        </div>
    </div>
  )
}

export default Count
