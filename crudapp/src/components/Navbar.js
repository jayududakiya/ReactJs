import React, { useContext, useEffect, useState} from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../App";


const menuItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Sign Up",
    to: "/signup",
  },
  {
    name: "LogIn",
    to: "/login",
  },
];

export default function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setSearchData = useContext(Context);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [data,setData]=useState([])
  const [search , setSearch]=useState("")

  useEffect(()=>{
    async function FetchData () {
      await axios.get("http://localhost:4000/users")
      .then((response)=>(setData(response.data)))
      .catch(error=>(console.log(error)))
    }
    // Call Function 
    FetchData();
  },[])
  

  function HandelSearch (even) {
    setSearch(even.target.value.toLowerCase());
    setSearchData(data.filter(X => X.name.toLowerCase().includes(search)))
  }


  return (
    <div className="relative w-full bg-white shadow-md mx-auto">
      <div className="mx-auto flex items-center justify-between py-5 px-14">
        <div className="inline-flex items-center space-x-2">
          <a href="/" className="font-bold text-2xl">
            MUI
          </a>
        </div>
        <div className="grow items-start lg:flex justify-end">
          {/* Search  */}
          <div className="hidden sm:flex grow justify-end mr-6 lg:mr-0">
            <input
              className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="search"
              onChange={(even)=>HandelSearch(even)}
              placeholder="Search"
            ></input>
          </div>

          <ul className="ml-12 hidden lg:flex items-center h-10 gap-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold">MUI</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  {/* Search  */}
                  <div className="flex sm:hidden grow justify-end mb-2">
                    <input
                      className="flex h-10 w-full rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="search"
                      placeholder="Search"
                    ></input>
                  </div>
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
