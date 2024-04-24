import React from 'react'
import NavRow1 from './NavRow1';
import NavRow2 from './NavRow2';
import TopShopLink from './TopShopLink';

function NavBar() {
  return (
    <div>
       <TopShopLink/>
        <NavRow1/>
        <NavRow2/>
    </div>
  )
}

export default NavBar
