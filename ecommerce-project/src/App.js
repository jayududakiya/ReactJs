import {BrowserRouter , Routes ,Route} from 'react-router-dom'

import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";
import WoodenHome from './Pages/Home page/WoodenHome'
import ContactPages from './Pages/Contact page/ContactPages';
import ShopPages from './Pages/Shop page/ShopPages'
import ErrorPages from './Pages/Error page/ErrorPages';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      
        <NavBar/>
        <Routes>
          <Route path="/" element={<WoodenHome/>}/>
          <Route path="/shop" element={<ShopPages/>}/>
          <Route path="/contact" element={<ContactPages/>}/>
          <Route path="*" element={<ErrorPages/>}/>
        </Routes>
        <Footer/>
     
      </BrowserRouter> 
    </div>
  );
}

export default App;

