import React,{useState,useEffect} from 'react'

function Timer() {
    const [Time , setTimer] = useState(0)
    const [Off, setOff] = useState(true)


    function off(){
      setOff(!Off)
      setTimer(0)
    }

    useEffect(()=>{
        const cleanID = setInterval(() => {
            // console.log("hello this is inside of setInterval ");
            setTimer((Time)=>Time + 1)
        }, 1000);

        // console.log('create setInterval id ' , cleanID);
        //
        console.log("hello");

        return ()=>{
            console.log('inside of return function id ' , cleanID);

            clearInterval(cleanID)
        }
    },[])
    return (
      <div>
      
        {(Off)?  <h1 className='text-center'>this is start in first rendered : {Time}</h1>:  <h1 className='text-center'>Timer is Off : </h1>}
      <button onClick={off} className="bg-orange-400 text-red-950 px-3 py-2 block my-1 mx-auto rounded-3xl text-xl">Click</button>
      </div>
    );
}

export default Timer
