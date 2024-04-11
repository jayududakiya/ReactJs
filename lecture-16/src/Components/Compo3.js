import React,{ useContext } from 'react'
import {Context, Context1} from '../App';

function Compo3() {
 const name =  useContext(Context)    
 const name2 =  useContext(Context1)    

  return (
    <div>
      {/* <h2 className='text-center'>HELLO MY NAME IS : {name} an dlname is  {name2}</h2> */}
      <h2 className='text-center'>{`my name is ${name} and my name is ${name2}`}</h2>

    </div>
  )
}

export default Compo3
