import React from 'react'
import ShopPage1 from '../../Components/Shop/ShopPage1'
import { ShopPage2 } from '../../Components/Shop/ShopPage2'
import {ShopDetails1 } from '../../Components/Shop/ShopDetails1'
import {ShopDetails2 } from '../../Components/Shop/ShopDetails2'
import {ShopLocation } from '../../Components/Shop/Shop Location/ShopLocation'
function ShopPages() {
  return (
    <div>
      <ShopPage1/>  
    </div>
  )
}

export default ShopPages

export { ShopPage2 , ShopDetails1 , ShopDetails2 , ShopLocation }
