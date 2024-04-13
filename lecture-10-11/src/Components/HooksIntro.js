import React, { useState } from 'react'

function HooksIntro() {
    const [count , setCount ] = useState(0)
    const Increment = ()=>{
        setCount((prvCount)=>prvCount + 1)
    }
    return (
        <div className='h-[80vh] flex flex-col items-center justify-center'>
            <h1 className='mb-3 mx-auto'>{count}</h1> 
            <button onClick={Increment} className='border-[2px] py-1 px-4 rounded-3xl'>Increment</button>
        </div>
  )
}

export default HooksIntro
