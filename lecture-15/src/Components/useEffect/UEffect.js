import React,{useState,useEffect} from 'react'

function UEffect() {
    const [ increment  , setIncrement ] = useState(1);
    const [ decrement  , setDecrement ] = useState(1);


    // this is call every time when page is render 
    // useEffect(()=>{
    //     setIncrement(10)
    //     // alert("new value set in Increment ",increment)
    // })

    // this is call First time when page is render 
    // useEffect(()=>{
    //     setDecrement(-10)
    // },[])

    const Increment = ()=>{
        // total = Sum(increment,increment);
        setIncrement(increment + 1)
    }


    const Decrement = ()=>{
        setDecrement(decrement - 1)
    }
    
    let total = 0;
    const Sum = (num1,num2)=>{
        return num1 * num2;
    }
    total = Sum(increment,increment);
    

    useEffect(()=>{
        console.log("hello call for Total ");
    },[total])

    useEffect(()=>{
        console.log("U call For Increment");
        setIncrement(0)
    },[decrement])
    useEffect(()=>{
        console.log("U call For Decrement");
        setDecrement(0)
    },[increment])

    

  return (
    <div>
        <button onClick={Increment} className='bg-orange-400 text-red-950 px-3 py-2 block my-1 mx-auto rounded-3xl text-xl'>Increment <b>{increment}</b></button> 
        <button onClick={Decrement} className='bg-orange-400 text-red-950 px-3 py-2 block my-1 mx-auto rounded-3xl text-xl'>decrement <b>{decrement}</b></button> 
        <button onClick={Sum} className='bg-orange-400 text-red-950 px-3 py-2 block my-1 mx-auto rounded-3xl text-xl'>Sum <b>{total}</b></button> 
    </div>
  )
}

export default UEffect
