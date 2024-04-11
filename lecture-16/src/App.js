import { createContext } from "react";
import Compo1 from "./Components/Compo1";
const Context = createContext();
const Context1 = createContext();

function App() {
  const fname = "jayan";
  const lname = "dddd"
  return (
    <div className="App">
      <Context.Provider value={fname} >
        <Context1.Provider value={lname} >
          <Compo1/>
        </Context1.Provider>
      </Context.Provider>
    </div>
  );
}

export {Context, Context1};
export default App;
