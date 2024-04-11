import StaticUser from "./Components/StaticUser";
import DynamicUser from "./Components/DynamicUser";

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-blue-500 font-semibold text-3xl my-5">StaticUser Data With Props </h1>
      <StaticUser/>
      <h1 className="text-center text-blue-500 font-semibold text-3xl my-5">DynamicUser Data With Props </h1>
      <DynamicUser/>
    </div>
  );
}

export default App;
