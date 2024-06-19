import { createContext, useState } from "react"
import { Routes , Route } from "react-router-dom"

import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import History from "./Pages/History"
import Projects from "./Pages/Projects"
import Services from "./Pages/Services"
import Blog from "./Pages/Blog"
import LoginForm from "./Components/LoginForm"
import Careers from "./Pages/Careers"

import ProtectedRoutes from "./Components/ProtectedRoutes"


  const Store = createContext()

function App() {

  const [userStatus , setUserStatus] = useState(false)

  return (
    <div className="App">
    <Store.Provider value={{userStatus , setUserStatus}}>
      <Navbar/>
      <Routes>
          {/* OPEN ROUTES */}
          <Route path="/" element={<Home/>} />
          
          {/* use With children */}
          <Route path="/about" element={<ProtectedRoutes isLoggedIn={userStatus}><About/></ProtectedRoutes>} />

          {/* use Withe OutLet */}
          <Route element={<ProtectedRoutes isLoggedIn={userStatus}></ProtectedRoutes>}>
            <Route path="/history" element={<History/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/careers" element={<Careers/>} />
          </Route>

          {/* OPEN ROUTES */}
          <Route path="/blog" element={<Blog/>} />
          <Route path="/login" element={<LoginForm/>} />
      </Routes>
    </Store.Provider>
    </div>
  )
}

export default App
export {Store}