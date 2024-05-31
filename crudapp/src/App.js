import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './components/Home';
import Edit from './components/Edit';
import Create from './components/Create';
import Login from './components/Login';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/edit/:id' element={<Edit/>} />
           <Route path='/create' element={<Create/>} />
           <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
