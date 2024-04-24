import React from "react";
import NavLinks from "./NavLinks";
import Categories from "./Categories";

function NavRow2() {

  return (
    <div
      id="Row-2"
      className="container  mx-auto flex flex-wrap items-center"
    >

      <Categories/>

      <NavLinks />

      <ul className="flex items-center ml-auto content-links">
        <li className="flex items-center mr-6">
          <i className="fa-solid fa-phone fa-rotate-270 text-[1.5rem] mr-4"></i>
          <a
            href="tel:"
            className="block poppins-semibold text-[1.2rem] uppercase"
          >
            980.029.666.99
          </a>
        </li>
        <li className="flex items-center">
          <i className="fa-solid fa-location-dot  text-[1.5rem] mr-4"></i>
          <a href="#" className="block poppins-semibold text-[1.2rem]">
            Find Store
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavRow2;
