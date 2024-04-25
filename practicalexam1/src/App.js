import './App.css';
import {BrowserRouter,Routes , Route} from 'react-router-dom'
import Home from './Components/Page/Home'
import About from './Components/Page/About';
import NavBar from './Components/NavBar/Navbar';
import Contact from './Components/Page/Contact';


function App() {
  return (
    <div className="App bg-[#E0FFFF] pt-[3rem] min-h-[100vh]">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
