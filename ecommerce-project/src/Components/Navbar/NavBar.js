import React from 'react'

import TopShopLink from './Top Shop Link/TopShopLink';
import NavRow1 from './Nav Row 1/NavRow1';
import NavRow2 from './Nav Row 2/NavRow2';


function NavBar() {
  return (
    <>
      <div className='Off-Scroll-NavBar'>
        <TopShopLink/>
        <NavRow1/>
        <NavRow2/>
      </div>
      {/* <div className='On-Scroll-NavBar'>
      </div> */}
    </>
  )
}

export default NavBar
