import React, { useMemo, useState } from 'react'
// import From from '../Components/From'
function Umemo() {
    const [count , setCount] = useState(0);
    const [sum , setSum] =useState(10);
    
    const newFun = useMemo(Items,[count])

    function Count (){
        return setCount(count + 1)
    }

    function Sum (){
        return setSum(sum  * 10)
    }

    function Items (){
        console.log("call Items func");
        return count;
    }

  return (
    <div>
        <button onClick={Count} > Click {count} </button>
        <button onClick={Sum} > Click {sum} </button>
        <h1>{newFun}</h1>
        <button onClick={Items}>item</button>
    </div>
  )
}

export default Umemo
