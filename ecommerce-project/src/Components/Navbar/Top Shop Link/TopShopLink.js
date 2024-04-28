import React from 'react'

function TopShopLink() {
  return (
    <div className='TopShopLink bg-[#F3EEE7] py-1'>
      <div className='sm:container mx-auto'>
      <p className='font-semibold text-[1rem] text-left flex items-center '>
        Welcome to our international shop! Enjoy free shipping on orders $100 up
        <a href="#" className='text-[#D51243] border-b-[2px] border-[#D51243] ml-2 flex items-center justify-start'>Shop Now <i className="fa-solid fa-arrow-right-long block mt-1 ml-2"></i></a>      </p>
      </div>
    </div>
  )
}

export default TopShopLink
