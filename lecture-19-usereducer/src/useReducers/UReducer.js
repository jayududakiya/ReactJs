import React,{useReducer} from 'react'

let initialArg = 0;

const reduce =  (state,action) => {
    if(action.type === "increase"){
        return (state + 1)
    }
    if(action.type === "decrease"){
        return (state - 1)
    }
    if(action.type === "sum"){
        return (state += 1 * 2)
    }
    if(action.type === "random"){
        // let randomNum = Math.floor(Math.random()*100-50+1);
        let randomNum = Math.floor(Math.random()*50+1);
        console.log(randomNum);
        return (state = randomNum)
    }
    return state
}

function UReducer() {
const [state,dispatch] = useReducer(reduce,initialArg)
  return (
    <div>
      <h1>
        {state}
      </h1>
        <p>
            <button onClick={()=>{dispatch({type:"increase"})}}>+</button>
            &nbsp;
            &nbsp;
            <button onClick={()=>{dispatch({type:"decrease"})}} >-</button>
            &nbsp;
            &nbsp;
            <button onClick={()=>{dispatch({type:"sum"})}} >*2</button>
            &nbsp;
            &nbsp;
            <button onClick={()=>{dispatch({type:"random"})}} >random Num</button>
        </p>
    </div>
  )
}

export default UReducer
