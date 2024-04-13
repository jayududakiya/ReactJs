import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(){
        super();
        this.state = {
            Name : "Jack",
            Age : 23,
            Info() {
                return (
                    <>{this.Name} And My Age is {this.Age}</>
                )
            }
        }
    }
    render() {
        return (
        <div>
          <h1>This is Class Component</h1>
          <h1>Hello I Am {this.state.Info()}</h1>
      </div>
    )
  }
}
