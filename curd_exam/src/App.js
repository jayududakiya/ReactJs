import { BrowserRouter , Routes , Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar';
import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/LoginPage';
import TablePage from './pages/TablePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        
        <Routes>

          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/tablePage' element={<TablePage/>} />
          <Route path='*' element={<ErrorPage/>} />

        </Routes>
          
      </BrowserRouter>

    </div>
  );
}

export default App;
