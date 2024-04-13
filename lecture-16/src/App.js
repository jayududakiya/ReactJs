import React, { createContext } from "react";
import Compo1 from "./UseContexts/Compo1";
const Context = createContext();
const Context1 = createContext();
const Profile1 = createContext();

const profile = {
  FName: "John",
  LName: "Wick",
  Age: "23",
  Profession: "Fighter",
};
const fname = "jayan";
const lname = "Dudakiya";

function App() {
  return (
    <div className="App">
      <h1 className="text-center my-5 text-3xl font-sans font-bold text-slate-600">Example OF UseContexts </h1>
      <Profile1.Provider value={profile}>
        <Context.Provider value={fname}>
          <Context1.Provider value={lname}>
            <Compo1 />
          </Context1.Provider>
        </Context.Provider>
      </Profile1.Provider>
    </div>
  );
}

export { Context, Context1 ,Profile1 };
export default App;
