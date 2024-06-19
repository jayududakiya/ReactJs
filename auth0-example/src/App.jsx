import { Routes , Route, useNavigate } from "react-router-dom"

import Navbar from "./Components/Navbar"
import HomePage from "./pages/HomePage"
import Footer from "./Components/Footer"
import AboutPage from "./pages/AboutPage"
import BlogPage from "./pages/BlogPage"
import ContactPage from "./pages/ContactPage"
import ErrorPage from "./pages/ErrorPage"
import SignUpPage from "./pages/SignUpPage"

import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"

function App() {
  

  return (
    <div>
      <Navbar/>    
      <Routes>
          <Route path="/"  element={<HomePage/> }/>
          <Route path="/about"  element={<AboutPage/>}/>
          <Route path="/contact"  element={<ContactPage/>}/>  
          <Route path="/blog"  element={<BlogPage/>}/>  
          <Route path="/sign-up"  element={<SignUpPage/>}/>  
          <Route path="*"  element={<ErrorPage/>}/>  
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
