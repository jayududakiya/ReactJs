import React, { useState } from 'react'
    
function Sum (){
    const [sum , setSum] = useState(10);
    console.log("call sum func",sum);
    return(<>
        <button onClick={()=>setSum(sum => sum  * 10)} > Click {sum} </button>
    </>)
};

export default Sum
