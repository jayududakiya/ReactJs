import './App.css';
import HooksIntro from './Components/HooksIntro';
import Count from './Task-4/Count'
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>This Intro OF Hook </h1>

          <HooksIntro/>
          
          <h1 className='my-5'>This Task Count Button</h1>
          
          <Count/>
      </header>
    </div>
  );
}

export default App;
