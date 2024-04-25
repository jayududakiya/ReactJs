import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import ReactRouterDom from './ReactRouterDom/ReactRouterDom';
import About from './Components/Pages/About/About';
import ClientReview from './Components/Pages/Client Review/ClientReview';
import Home from './Components/Pages/Home/Home';
import Contact from './Components/Pages/Contact/Contact';
import ShopPage from './Components/Pages/ShopNow/ShopPage';

import NavBar from './Components/Navbar/NavBar';
import {NavbarBottom} from './Components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      {/* <ReactRouterDom/> */}
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/About' element={<About/>}/> 
          <Route path='/Contact' element={<Contact/>}/> 
          <Route path='/ClientReview' element={<ClientReview/>}/> 
          <Route path='/ShopPage' element={<ShopPage/>}/> 
        </Routes>
          <NavbarBottom/>
      </BrowserRouter>
    </div>
  );
}

export default App;
