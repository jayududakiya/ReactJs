import React from 'react'
import Header from './Header/Header'
import TopCategories from './Section 1/TopCategories'
import PopularProducts from './Section 2/PopularProducts'
import OfferBanner from './Section 3/OfferBanner'
import FollowOnSwiper from './Section 4/FollowOnSwiper'

function WoodenHome() {
  return (
    <div className='sm:container mx-auto'>
      <Header/>
      <TopCategories/>
      <PopularProducts/>
      <OfferBanner/>
      <FollowOnSwiper/>
    </div>
  )
}

export default WoodenHome
