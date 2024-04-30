import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "../Nav Links/NavLinks";
import Categories from "../Categories List/Categories";

import '../Style/NavBar.css'
import '../Style/NavBarResponsive.css'

function NavRow2() {

  return (
    <div
      id="Row-2"
      className="sm:container mx-auto grid grid-cols-12 items-stretch"
    >

    <div className="col-span-2">
      <Categories/>
    </div>
 
    <div className="col-span-7 flex items-center ">
      <NavLinks />
    </div>

    <div className="col-span-3 flex items-center ">
    <ul className="content-links flex items-center justify-around w-full">
        <li className="flex items-center ">
          <i className="fa-solid fa-phone fa-rotate-270 mr-2"></i>
          <a
            href="tel:980.029.666.99"
            className="block text-[1.1rem] uppercase font-medium"
          >
            980.029.666.99
          </a>
        </li>
        <li className="flex items-center">
          <i className="fa-solid fa-location-dot mr-2"></i>
          <Link to="/contact" className="block text-[1.1rem] font-medium">
            Find Store
          </Link>
        </li>
    </ul>
    </div>
    </div>
  );
}

export default NavRow2;
