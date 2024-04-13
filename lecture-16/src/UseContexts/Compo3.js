import React,{ useContext } from 'react'
import {Context, Context1 , Profile1} from '../App';

function Compo3() {
 const name =  useContext(Context)    
 const name2 =  useContext(Context1)  
 const {FName , LName , Age , Profession} = useContext(Profile1)  

  return (
    <div>
      <h1 className='text-center'>{`My Name is ${name} ${name2}`}</h1>
      <ul className='my-3 bg-slate-950 text-slate-300 list-disc list-inside p-3 '>
        <li className='text-left'>Name : {FName} {LName}</li>
        <li className='text-left'>Age : {Age}</li>
        <li className='text-left'>Profession : {Profession}</li>
      </ul>
    </div>
  )
}

export default Compo3
