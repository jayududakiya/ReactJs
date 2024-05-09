import {BrowserRouter , Routes ,Route} from 'react-router-dom'

import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";
import WoodenHome from './Pages/Home page/WoodenHome'
import ContactPages from './Pages/Contact page/ContactPages';
import ShopPages from './Pages/Shop page/ShopPages'
import {ShopPage2 ,ShopDetails1 ,  ShopDetails2 , ShopLocation} from './Pages/Shop page/ShopPages'
import CartPage from './Pages/Layout Pages/CartPage'
import CheckoutPage from './Pages/Layout Pages/CheckoutPage'
import ErrorPage from './Components/Page Type/Error Page/ErrorPage';
import TrackPage from './Components/Page Type/Product Track/Track';
import RegistrationPage from './Pages/Layout Pages/RegistrationPage'
import AboutPage from './Pages/Layout Pages/AboutPage'
import WishListPage from './Pages/Types Pages/WishListPage'

import ScrollToTop from './Components/Common Components/Scroll To Top/ScrollToTop'

function App() {
  return (
    <div className="App mt-[124px] xl:mt-0">
       <BrowserRouter>
        <ScrollToTop/>
        <NavBar/>

        <Routes>
          <Route path="/" element={<WoodenHome/>}/>
          <Route path="/shop" element={<ShopPages/>}/>

          <Route path="/shop2" element={<ShopPage2/>}/>
          <Route path="/shop-filterV2" element={<ShopPage2/>}/>

          <Route path="/shop-details" element={<ShopDetails1/>}/>
          <Route path="/shop-sidebar" element={<ShopDetails1/>}/>

          <Route path="/shop-details2/:id" element={<ShopDetails2/>}/>
          <Route path="/shop-right-sidebar/:id" element={<ShopDetails2/>}/>

          <Route path="/shop-location" element={<ShopLocation/>}/>
          <Route path="/shop-listview" element={<ShopLocation/>}/>

          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
          <Route path="contact" element={<ContactPages/>}/>
          <Route path="/sign-in" element={<RegistrationPage/>}/>
          <Route path="/login" element={<RegistrationPage/>}/>
          <Route path="/wishlist" element={<WishListPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/product-track" element={<TrackPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        
        <Footer/>
     
      </BrowserRouter> 
    </div>
  );
}

export default App;

