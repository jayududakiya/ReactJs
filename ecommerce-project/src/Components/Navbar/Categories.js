import React from 'react'
import "./categories.css";

function Categories() {

    function handleClick() {
        const categoriesWrap = document.querySelector("#cateList");
        categoriesWrap.classNameList.toggle("hideList");
        // console.log(categoriesWrap);
      }

  return (
    <div id="categories-wrapper" className="mr-8">

    <button id="categoriesBtn" className="flex items-center justify-start" onClick={handleClick}>
      <i className="fa-solid fa-bars"></i>
      Categories
    </button>
    
    <ul id="cateList" className="showList">

      <li>
        <a href="#" className="cateLink flex items-center">
          <i className="fa-regular fa-user"></i>
          Candles
        </a>
      </li>

      <li>
        <a href="#" className="cateLink flex items-center">
        <i className="fa-solid fa-fan block"></i>
        <p className="text-[1.5rem]">
          Handmade  
        </p>
        <i className="fa-solid fa-arrow-right-long block ml-auto"></i>
        </a>
        <ul className="Handmade-list">
          <li><a href="#">Chair</a></li>
          <li><a href="#">Table</a></li>
          <li><a href="#">Wooden</a></li>
          <li><a href="#">Furniture</a></li>
          <li><a href="#">Clock</a></li>
          <li><a href="#">Gift</a></li>
          <li><a href="#">Cart</a></li>
        </ul>
      </li>

      <li>
        <a href="#" className="cateLink flex items-center">
        <i className="fa-solid fa-shoe-prints"></i>
        Gift Sets
        </a>
      </li>

      <li>
        <a href="#" className="cateLink flex items-center">
        <i className="fa-regular fa-face-smile"></i>
        Plastic Gifts
        </a>
      </li>

      <li>
        <a href="#" className="cateLink flex items-center">
        <i className="fa-regular fa-futbol"></i>
        Handy Cream
        </a>
      </li>

      <li>
        <a href="#" className="cateLink flex items-center">
        <i className="fa-solid fa-crown"></i>
        Cosmetics
        </a>
      </li>

      <li>
        <a href="#" className="cateLink flex items-center">
        <i className="fa-solid fa-gift"></i>
        Silk Accessories
        </a>
      </li>

      <li>
        <ul className="cate-sub-Link">
          <li><a href="#"  className="sub-link flex flex-col items-start justify-center">Value of the  Day</a></li>
          <li><a href="#"  className="sub-link flex flex-col items-start justify-center">Top 100 Offers</a></li>
          <li><a href="#"  className="sub-link flex flex-col items-start justify-center">New Arrivals</a></li>
        </ul>
      </li>

    </ul>

  </div>
  )
}

export default Categories
