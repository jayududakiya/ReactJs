import "./navRows.css";
import Logo from "../../Assets/logo.png";
import UKflag from "../../Assets/United Kingdom.png";

import React from "react";

function Navbar() {
  return (
    <div id="Row-1" className="container mx-auto flex items-center justify-between">

      <div className="logo">
        <a href="#" className="block h-full">
          <img src={Logo} className="block w-full h-full object-contain" alt="Web Logo" />
        </a>
      </div>

      <div className="searchBox flex items-center justify-between">

        <div className="searchBar flex items-center">

          <label htmlFor="searchBtn" className="flex items-center ">
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>

          <input
            type="text"
            name=""
            id="searchBtn" 
            placeholder="Search products... "
          />
        </div>

        <div className="selectBtn flex items-center justify-end">
          <div className="select-Lang flex items-center relative pr-2 mr-8">
            <a href="#" className="flex items-center justify-center p-[.5rem]">
              <img
                src={UKflag}
                alt="Uk flag"
                className="block w-[34px] h-[30px] object-cover rounded-md"
              />
              <p className="font-bold text-[1.3rem] px-2 ">English</p>
            </a>

            <ul className="lang-list text-center w-full absolute">
              <li className="py-2 text-[1.8rem] hover:opacity-70 transition cursor-pointer">
                Arabic
              </li>
              <li className="py-2 text-[1.8rem] hover:opacity-70 transition cursor-pointer">
                Spanish
              </li>
              <li className="py-2 text-[1.8rem] hover:opacity-70 transition cursor-pointer">
                Mandarin
              </li>
            </ul>

            <span className="down-arrow">
              <i className="fa-solid fa-angle-down text-[1.6rem] text-gray-800"></i>
            </span>
          </div>

          <div className="select-currency flex items-center">
            <select
              name="currency"
              id="currency"
              className="block h-full text-[2rem] px-1"
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

      <ul className="navButton flex items-center">
        <li>
          <button type="button" id="cartBtn">
            <i className="fa-solid fa-cart-shopping"></i>
            <span id="cartCount" className="flex items-center justify-center">
              0
            </span>
          </button>
        </li>

        <li>
          <button type="button">
            <i className="fa-regular fa-user"></i>
          </button>
        </li>

        <li>
          <button type="button" id="likeBtn">
            <i className="fa-regular fa-heart"></i>
            <span id="likeCount" className="flex items-center justify-center">
              0
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
