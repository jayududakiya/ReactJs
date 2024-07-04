import { useCallback, useState } from "react"
import ShowID from "./Components/ShowID"

function App() {
  const [show , setShow] = useState(false)
  
  const generateID = useCallback((id=10) => {
    return ~~(Math.random() * 10);
  },[])

  const style = {
    margin:'auto',
    border : '1px solid red'
  }

  return (
    <div style={style}>
      hello
      <ShowID generateID={generateID} />
      <p>this is Re-Render Function : {generateID()}</p>
      <p>{show ? 'key Was Show' : '**********'}</p>
      <button onClick={()=>setShow(!show)}>{show ? 'Show' : 'Hide'}</button>
    </div>
  )
}

export default App
