import React from 'react'

const User = {
    Name : "JD",
    Age : 22,
    Info(){
        return(
            <>
            " {this.Name} " And My Age Is : " {this.Age} "
            </>
        )
    }
}


function FunctionComp() {

  return (
    <div>
        <h1>This is Into Function Component</h1>
        <h1>Hello I Am Hello {User.Info()}</h1>
    </div>
  )
}

export default FunctionComp
