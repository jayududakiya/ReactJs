import Footer from './Components/Footer/Footer'
import NavBar from './Components/Navbar/NavBar';
import Header from './Components/Home/Header/Header'
import TopCategories from './Components/Home/Main/TopCategories'
import PopularProducts from './Components/Home/Main/PopularProducts'
import OfferSection from './Components/Home/Main/OfferSection';
import FollowOnSection from './Components/Home/Main/FollowOnSection'


// import './Components/style/main.css';


function App() {
  return (
    <div className="App min-h-[100vh] min-w-[100%]">
      {/* <NavBar/> */}
      <Header/>
      <TopCategories/>
      <PopularProducts/>
      {/* <OfferSection/> */}
      {/* <FollowOnSection/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;

