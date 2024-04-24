import React from 'react'
import './navRows.css'

function TopShopLink() {
  return (
    <div className='TopShopLink bg-[#F3EEE7] py-3'>
      <div className='container mx-auto'>
      <p className='font-semibold text-[1.6rem] text-left flex items-center'>
        Welcome to our international shop! Enjoy free shipping on orders $100 up
        <a href="#" className='text-[#D51243] ml-2 border-b-[2px] border-[#D51243] px-2 text-[1.8rem] flex items-center justify-start '>Shop Now <i className="fa-solid fa-arrow-right-long block ml-2"></i></a>
      </p>
      </div>
    </div>
  )
}

export default TopShopLink
