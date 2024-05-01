import React , { useState } from 'react'

import TopShopLink from './Top Shop Link/TopShopLink';
import NavRow1 from './Nav Row 1/NavRow1';
import NavRow2 from './Nav Row 2/NavRow2';
import OnScrollNavBar from './On Scroll NavBar/OnScrollNavBar';
import MobileMenu from './On Scroll NavBar/MobileMenu'

import './On Scroll NavBar/OnScrollNavBar.css'


window.addEventListener('scroll',()=>{
  const OnNavBar = document.querySelector("#OnScrollNavBar-warp");
  const OnMenu = document.querySelector("#mobile-menu-warp");
  if(window.scrollY > 80){
    OnNavBar.classList.add("On-Scroll-Nav");
    OnMenu.classList.add("MenuOn");
  }
  else{
    OnNavBar.classList.remove("On-Scroll-Nav");
    OnMenu.classList.remove("MenuOn");
  }
})


function NavBar() {
      // const [Class , setClass] = useState(true);

    // let Classes = "col-span-12 ";

    // Class ? Classes += "bg-black" : Classes += "text-red-500";
  return (
    <div className="">
      <div className='Off-Scroll-NavBar'>
        <TopShopLink/>
        <NavRow1/>
        <NavRow2/>
      </div>
      <div id='OnScrollNavBar-warp' className='Set-On-NavBar Off-Scroll-Nav '>
        <OnScrollNavBar/>
      </div>
      <div id='mobile-menu-warp' className='mobile-bg-warp '>
        <MobileMenu/>
      </div>
    </div>
  )
}

export default NavBar
