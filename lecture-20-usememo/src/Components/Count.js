import React, { useState } from "react";


export default function Count (){
    const [count , setCount] = useState(0);

    console.log("call count func",count);

    return(
    <>
        <button onClick={()=>setCount(prevVal => prevVal + 1)} > Click {count} </button>
    </>)
}

