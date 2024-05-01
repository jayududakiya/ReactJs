import React from 'react'


//  
import { BsCart3 } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";

import './NavButton.css'

function NavButton({className}) {
  const Classes = "navButton w-full flex items-center justify-around " + className;
  return (
    <ul className={Classes}>
        <li>
          <button type="button" id="cartBtn">
            <BsCart3 className='react-i'/>
            <span id="cartCount" className="flex items-center justify-center ">
              0
            </span>
          </button>
        </li>

        <li>
          <button type="button">
            <HiOutlineUserCircle className='react-i'/>
          </button>
        </li>

        <li className='hidden md:block'>
          <button type="button" id="likeBtn">
            <CiHeart className='react-i'/>
            <span id="likeCount" className="flex items-center justify-center ">
              0
            </span>
          </button>
        </li>
      </ul>
      
  )
}

export default NavButton
