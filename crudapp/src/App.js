import {BrowserRouter , Routes , Route } from 'react-router-dom'
import { createContext, useState } from 'react';
import Home from './components/Home';
import Edit from './components/Edit';
import Create from './components/Create';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp'

const Context = createContext()
const Context2 = createContext()


function App() {
  const  [searchData,setSearchData] = useState([]);
  return (
    <div className="App">
      <Context.Provider value={setSearchData}>  
        <Context2.Provider value={searchData}>  
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/edit/:id' element={<Edit/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
          </Routes>
        </BrowserRouter>
        </Context2.Provider>
      </Context.Provider>
    </div>
  );
}

export default App;
export {Context,Context2}
