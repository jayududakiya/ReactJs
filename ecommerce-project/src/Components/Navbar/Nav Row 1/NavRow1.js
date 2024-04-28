import React from "react";

import Logo from "../../../Assets/Logos Img/logo.png";
import UKflag from "../../../Assets/Logos Img/United Kingdom.png";

import NavButton from "../Nav Button/NavButton";

import "../Style/NavBar.css";
import "../Style/NavBarResponsive.css";

function NavRow1() {
  return (
    <div id="Row-1" className="sm:container mx-auto grid grid-cols-12 gap-x-2 overflow-hidden sm:overflow-visible">
      <div className="logo col-span-2 flex items-center">
        <a href="#" className="inline-block">
          <img
            src={Logo}
            className="block object-contain"
            alt="Web Logo"
          />
        </a>
      </div>

      <div className="searchBox flex items-center justify-between col-span-8">

        <div className="searchBar mr-auto  rounded-[5px] outline outline-[1px] outline-gray-700 px-2.5 py-2 flex items-center w-[55%]">
          <label htmlFor="searchBtn" className="flex items-center mr-1.5">
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>

          <input
            type="text"
            name=""
            id="searchBtn"
            placeholder="Search products... "
          />
        </div>

        <div className="selectBtn flex items-center mr-auto">

          <div className="select-Lang flex items-center mx-2 relative p-1.5 rounded-[5px] outline outline-[1px] outline-gray-700 ">

            <a href="#" className="flex items-center justify-center ">

              <img
                src={UKflag}
                alt="Uk flag"
                className="block w-[34px] h-[30px] object-cover rounded-md"
              />

              <p className="font-bold text-[1rem] px-2 ">English</p>

              <span className="down-arrow transition-All">
              <i className="fa-solid fa-angle-down text-[1.1rem]"></i>
              </span>

            </a>

            <ul className="lang-list text-center w-full  absolute top-[100%] left-0 shadow-sm bg-white">

              <li className="py-2 text-[1.1rem] hover:opacity-70 transition cursor-pointer">
                Arabic
              </li>
              <li className="py-2 text-[1.1rem] hover:opacity-70 transition cursor-pointer">
                Spanish
              </li>
              <li className="py-2 text-[1.1rem] hover:opacity-70 transition cursor-pointer">
                Mandarin
              </li>
            </ul>

          </div>

          <div className="select-currency flex items-center  rounded-[5px] outline outline-[1px] outline-gray-700">
            <select
              name="currency"
              id="currency"
              className="block h-full text-[1.3rem] p-1.5"
            >
              <option defaultValue value="USD">
                USD
              </option>
              <option value="YEAN">YEAN</option>
              <option value="EURO">EURO</option>
            </select>
          </div>
        </div>

      </div>

      <div className="col-span-2 flex items-stretch">
        <NavButton/>
      </div>
    </div>
  );
}

export default NavRow1;
