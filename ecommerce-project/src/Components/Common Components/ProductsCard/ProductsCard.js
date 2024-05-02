import React from 'react'
import { Link } from 'react-router-dom'

// icons import
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { LuArrowDownUp } from "react-icons/lu";
import { ImEye } from "react-icons/im";
import { CiHeart } from "react-icons/ci";

import './ProductsCard.css'

function ProductsCard({firstProductImg,secondeProductImg,productName,Price,className}) {
    let  Classes = className += "ProductCard w-[20rem] h-[26rem]"
  return (
    <div id='PRODUCTCARD' className={Classes}>
        <div className='ProductCard-Head mx-3.5 my-3 relative'>
            <Link id='ProductCard-link' to='/shop' className='block rounded-md overflow-hidden relative '>
                <img src={firstProductImg} alt={productName + "image"} className='black object-contain w-full h-full mx-auto ' />
                <img src={secondeProductImg} alt={productName + "image"} className='black object-contain mx-auto absolute top-0 z-[1]' />
            </Link>
            <div className='ProductCard-Buttons mx-auto flex items-stretch justify-center rounded-md absolute '>
                    <ul className='bg-white w-full flex items-center justify-evenly rounded-md'>
                    <li className='flex items-center justify-center'>
                        <button className='flex items-center justify-center hover:text-[#D51243] transition-all'>
                            <CiShoppingBasket  className='text-2xl' />
                        </button>
                    </li>
                    <li className='flex items-center justify-center'>
                        <button className='flex items-center justify-center hover:text-[#D51243] transition-all'>
                        <LuArrowDownUp className='text-2xl rotate-90' />
                        </button>
                    </li>
                    <li className='flex items-center justify-center'>
                        <button className='flex items-center justify-center hover:text-[#D51243] transition-all'>
                            <ImEye className='text-2xl' />
                        </button>
                    </li>
                    <li className='flex items-center justify-center'>
                        <button className='flex items-center justify-center hover:text-[#D51243] transition-all'>
                            <CiHeart className='text-2xl' />
                        </button>
                    </li>
                    </ul>
            </div>
        </div>
        <div className='ProductCard-body mx-3.5'>
            <Link to="/shop" className='text-[1rem] capitalize block text-gray-400 ' >{productName}</Link>
            <p className='text-[1.1rem] font-bold mt-1'>{Price}</p>
        </div>
        <div className='ProductCard-Review flex items-center justify-between mt-1 px-3.5'>
            <ul className='ProductCard-Colors'>
                <li className='flex items-center'>
                    <Link to="/shopDetails" className='flex items-center mr-1 border border-transparent text-[#99C4FF] rounded-full'>
                        <span className='w-[14px] h-[14px] bg-[#99C4FF] block rounded-full transition-all mx-auto'></span>
                    </Link>
                    <Link to="/shopDetails" className='flex items-center mr-1 border border-transparent text-[#D51243] rounded-full'>
                        <span className='w-[14px] h-[14px] bg-[#D51243] block rounded-full transition-all mx-auto'></span>
                    </Link>
                    <Link to="/shopDetails" className='flex items-center mr-1 border border-transparent text-[#FF7373] rounded-full'>
                        <span className='w-[14px] h-[14px] bg-[#FF7373] block rounded-full transition-all mx-auto'></span>
                    </Link>
                    <Link to="/shopDetails" className='flex items-center mr-1 border border-transparent text-[#BE9AFF] rounded-full'>
                        <span className='w-[14px] h-[14px] bg-[#BE9AFF] block rounded-full transition-all mx-auto'></span>
                    </Link>
                </li>
            </ul>
            <p className='ProductCard-Star flex  justify-start items-center'>
                <Link to='/' className='flex items-center '>
                    <FaStar className='text-red-950' />
                    <FaStar className='text-red-950' />
                    <FaStar className='text-red-950' />
                    <FaStar className='text-red-950' />
                    <CiStar/>
                </Link>
                <span className="inline-flex items-center text-xs">
                    (81)
                </span>
            </p>
        </div>
    </div>
  )
}

export default ProductsCard
