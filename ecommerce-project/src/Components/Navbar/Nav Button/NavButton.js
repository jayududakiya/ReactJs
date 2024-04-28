import React from 'react'

import './NavButton.css'

function NavButton() {
  return (
    <ul className="navButton w-full flex items-center justify-evenly ">
        <li>
          <button type="button" id="cartBtn">
            <i className="fa-solid fa-cart-shopping"></i>
            <span id="cartCount" className="flex items-center justify-center ">
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
            <span id="likeCount" className="flex items-center justify-center ">
              0
            </span>
          </button>
        </li>
      </ul>
      
  )
}

export default NavButton
