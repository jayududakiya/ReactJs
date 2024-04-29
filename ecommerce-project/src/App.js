import {BrowserRouter , Routes ,Route} from 'react-router-dom'

import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/NavBar";
import WoodenHome from './Components/Home/WoodenHome'
import Error from './Components/Error Page/ErrorPage'
import Contact from './Components/Contact/Contact'
import Shop from './Components/Shop/Shop';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<WoodenHome/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

