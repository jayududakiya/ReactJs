import {BrowserRouter , Routes ,Route} from 'react-router-dom'

import ErrorPage from './Components/Page Type/Error Page/ErrorPage';

import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";

import WoodenHome from './Pages/Home page/WoodenHome'

import ContactPages from './Pages/Contact page/ContactPages';

import AboutPage from './Pages/Layout Pages/AboutPage'

import RegistrationPage from './Pages/Layout Pages/RegistrationPage'

import ShopPages from './Pages/Shop page/ShopPages'

import {ShopPage2 ,ShopDetails1 ,  ShopDetails2 , ShopLocation} from './Pages/Shop page/ShopPages'

import CartPage from './Pages/Layout Pages/CartPage'

import WishListPage from './Pages/Types Pages/WishListPage'

import CheckoutPage from './Pages/Layout Pages/CheckoutPage'

import TrackPage from './Components/Page Type/Product Track/Track';

import ScrollToTop from './Components/Common Components/Scroll To Top/ScrollToTop'

import { Provider } from 'react-redux';
import Store from './store'

console.log(Store);
function App() {
  return (
    <div className="App mt-[124px] xl:mt-0">
      <Provider store={Store}>
       <BrowserRouter>
        <ScrollToTop/>
        <NavBar/>
        <Routes>

          <Route path="/" element={<WoodenHome/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/sign-in" element={<RegistrationPage/>}/>
          <Route path="/login" element={<RegistrationPage/>}/>
          <Route path="contact" element={<ContactPages/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/wishlist" element={<WishListPage/>}/>
          <Route path="/product-track" element={<TrackPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>

          <Route path="/shop" element={<ShopPages/>}/>
          <Route path="/shop2" element={<ShopPage2/>}/>
          <Route path="/shop-details" element={<ShopDetails1/>}/>
          <Route path="/shop-details2/:id" element={<ShopDetails2/>}/>
          <Route path="/shop-location" element={<ShopLocation/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter> 
      </Provider>
    </div>
  );
}

export default App;

