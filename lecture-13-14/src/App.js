import './App.css';
import ClassComp from './Components/ClassComp';
import FunctionComp from './Components/FunctionComp';
import ClassCount from './Task/ClassCount';

function App() {
  return (
    <div className="App App-header">
      <hr className='border-[2px] w-full border-white my-4'/>
      <ClassComp/>
      <hr className='border-[2px] w-full border-white my-4'/>
      <FunctionComp/>
      <hr className='border-[2px] w-full border-white my-4'/>
      <h1 className='font-bold text-center text-3xl'>This Count Task </h1>
      <ClassCount/>
    </div>
  );
}

export default App;
