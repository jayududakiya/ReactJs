import React, { Component } from 'react'

export default class ClassCount extends Component {
    constructor(){
        super()
        this.state = {
            count : 0,
        }
    }
    increment =  () => {  
        this.setState({count:this.state.count + 1})
    }
    decrement =  () => {
        this.setState({count:this.state.count - 1})
    }
  render() {
    return (
      <div className=''>
        <h1 className='text-3xl font-bold m-8'>{this.state.count}</h1>
        <div  className='flex flex-wrap items-center justify-evenly m-auto w-96'>
        <button className='bg-slate-400 p-2 rounded-2xl text-white' onClick={this.increment}>Increment</button>
        <button className='bg-slate-400 p-2 rounded-2xl text-white' onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    )
  }
}
