import {BrowserRouter , Routes ,Route} from 'react-router-dom'

import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";
import WoodenHome from './Pages/Home page/WoodenHome'
import ContactPages from './Pages/Contact page/ContactPages';
import ShopPages from './Pages/Shop page/ShopPages'
import ErrorPages from './Pages/Error page/ErrorPages';
import RegistrationPage from './Pages/Registration Page/RegistrationPage'

function App() {
  return (
    <div className="App mt-[90px] xl:mt-0">

       <BrowserRouter>
      
        <NavBar/>

        <Routes>
          <Route path="/" element={<WoodenHome/>}/>
          <Route path="/shop" element={<ShopPages/>}/>
          <Route path="/contact" element={<ContactPages/>}/>
          <Route path="/signIn" element={<RegistrationPage/>}/>
          <Route path="*" element={<ErrorPages/>}/>
        </Routes>
        
        <Footer/>
     
      </BrowserRouter> 
    </div>
  );
}

export default App;

