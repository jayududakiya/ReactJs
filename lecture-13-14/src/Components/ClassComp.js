import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(){
        super();
        this.state = {
            Name : "JD",
            Age : 24,
        }
    }
    
    Info = () => {
        return (
            <>{this.state.Name} And My Age is {this.state.Age}</>
        )
    }

    render() {
        return (
        <div>
          <h1>This is Into Class Component</h1>
          <h1>Hello I Am {this.Info()}</h1>
      </div>
    )
  }
}
