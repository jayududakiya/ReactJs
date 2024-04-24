import {BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css';
import Page1 from './ReactRouterDom/Pages/Page1.js'
import Page2 from './ReactRouterDom/Pages/Page2.js'
import Page3 from './ReactRouterDom/Pages/Page3.js'
import Page4 from './ReactRouterDom/Pages/Page4.js'

function App() {
  return (
    <div className="App">
      <h1>Use Of react Router Dom </h1>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Page1/>} />
              <Route path='/page-2' element={<Page2/>} />
              <Route path='/page-3' element={<Page3/>} />
              <Route path='/page-4' element={<Page4/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
