import { BrowserRouter,Routes,Route } from "react-router-dom"
import Table from "./Components/Table"
import Register from "./Pages/Register"
import Navbar from "./Components/Navbar"
import SignUp from "./Pages/Signup "
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="mt-10">
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/singup" element={<SignUp/>} />
          <Route path="/" element={<Table/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
