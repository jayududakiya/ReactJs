import Footer from './Components/Footer/Footer'
import NavBar from './Components/Navbar/NavBar';
import Header from './Components/Home/Header/Header'
import TopCategories from './Components/Home/Main/TopCategories'


function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Header/>
      <TopCategories/>
      <Footer/>
    </div>
  );
}

export default App;

