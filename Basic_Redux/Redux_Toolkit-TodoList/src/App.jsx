import { createContext, useState } from "react"
import AddTodDo from "./Components/AddTodDo"
import Todos from "./Components/Todos"

const HANDELBTNS = createContext()

function App() {

  const [btnState ,setBtnState] = useState(false)

  return (
    <div className="mx-auto max-w-lg p-10">
      <HANDELBTNS.Provider value={{btnState , setBtnState}}>
        <AddTodDo/>
        <Todos/>
      </HANDELBTNS.Provider>
      </div>
  )
}

export default App

export {HANDELBTNS} 
