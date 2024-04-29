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
      className="sm:container mx-auto grid grid-cols-12 gap-x-5 "
    >

    <div className="col-span-5 sm:col-span-4 md:col-span-2">
      <Categories/>
    </div>

    <div className="col-span-7 hidden lg:flex ">
      <NavLinks />
    </div>

    <div className="col-span-3 hidden lg:flex ">
    <ul className="content-links flex items-center ml-auto ">
        <li className="flex items-center mr-6">
          <i className="fa-solid fa-phone fa-rotate-270  mr-4"></i>
          <a
            href="tel:980.029.666.99"
            className="block text-[1.2rem] uppercase font-semibold"
          >
            980.029.666.99
          </a>
        </li>
        <li className="flex items-center">
          <i className="fa-solid fa-location-dot mr-4"></i>
          <Link to="/contact" className="block text-[1.2rem] font-semibold">
            Find Store
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default NavRow2;
