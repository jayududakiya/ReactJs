import React,{useState} from 'react'
import { Link } from 'react-router-dom'
function Navbar() {

  const [open , setOpen] = useState(false) 
  return (
    <div className="justify-center w-full mx-auto bg-gray-100 fixed top-0">
    <div className="flex flex-col w-full px-8 py-2 mx-auto md:px-12 md:items-center md:justify-between md:flex-row lg:px-32">
      <div className="flex flex-row items-center justify-between text-black">
        <a className="inline-flex items-center gap-3 text-xl font-bold tracking-tight text-black" href="/">
          <span> ❖ </span>
          <span>Wind static</span>
        </a>
        <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" 
         onClick={()=>setOpen(!open)}
        >
          <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path className={open ? "hidden" : "inline-flex"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path className={open ? "inline-flex" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav className={open ? "flex flex-col items-center flex-grow gap-3 px-5 text-sm font-medium text-gray-500 md:px-0 md:pb-0 md:flex md:justify-start md:flex-row lg:p-0 md:mt-0 " : "hidden flex-col items-center flex-grow gap-3 p-4 px-5 text-sm font-medium text-gray-500 md:px-0 md:pb-0 md:flex md:justify-start md:flex-row lg:p-0 md:mt-0 " }>
        <div className='flex items-center justify-center gap-4 ml-auto'>
          <Link to="/singup" className="inline-flex items-center justify-center w-full h-8 gap-3 px-5 py-3 text-xs font-medium text-white duration-200 bg-gray-900 rounded-lg md:w-auto hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black" href="#_" role="button">
            Formik Form
          </Link>
          <Link to="/register" className="inline-flex items-center justify-center w-full h-8 gap-3 px-5 py-3 text-xs font-medium text-white duration-200 bg-gray-900 rounded-lg md:w-auto hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black" href="#_" role="button">
             JS Form
          </Link>
        </div>
      </nav>
    </div>
  </div>
  )
}

export default Navbar
