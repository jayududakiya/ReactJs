import {BrowserRouter , Routes ,Route} from 'react-router-dom'

import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";
import WoodenHome from './Pages/Home page/WoodenHome'
import ContactPages from './Pages/Contact page/ContactPages';
import ShopPages from './Pages/Shop page/ShopPages'
import {ShopDetails1 , ShopPage2 } from './Pages/Shop page/ShopPages'
import ErrorPage from './Components/Page Type/Error Page/ErrorPage';
import RegistrationPage from './Pages/Layout Pages/RegistrationPage'
import WishListPage from './Pages/Types Pages/WishListPage'

function App() {
  return (
    <div className="App mt-[124px] xl:mt-0">

       <BrowserRouter>
      
        <NavBar/>

        <Routes>
          <Route path="/" element={<WoodenHome/>}/>
          <Route path="/shop" element={<ShopPages/>}/>
          <Route path="/shop2" element={<ShopPage2/>}/>
          <Route path="/shop-details" element={<ShopDetails1/>}/>
          <Route path="/contact" element={<ContactPages/>}/>
          <Route path="/sign-in" element={<RegistrationPage/>}/>
          <Route path="/login" element={<RegistrationPage/>}/>
          <Route path="/wishlist" element={<WishListPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        
        <Footer/>
     
      </BrowserRouter> 
    </div>
  );
}

export default App;

