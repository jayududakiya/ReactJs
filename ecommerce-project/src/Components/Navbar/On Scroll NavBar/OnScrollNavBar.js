import React from 'react'
import {Link} from 'react-router-dom'
import NavLinks from "../Nav Links/NavLinks";
import NavButton from "../Nav Button/NavButton";
import { IoIosSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import './OnScrollNavBar.css'

import NavLogo from '../../../Assets/Logos Img/logo.png'

function OnScrollNavBar() {
    
  return (
    <div id='OnScrollNavBar' className='sm:container mx-auto grid grid-cols-12'>
        <div className='OnScroll-Logo-box flex items-center col-span-7 md:col-span-3 xl:col-span-2  justify-between md:justify-start'>
            <div className='menuButton flex xl:hidden pr-5'>
                <button className='text-[2rem] flex pt-2'>
                    <IoMdMenu className='block'/>
                </button>
            </div>
            <div className='logo-Box'>
                <Link to='/'>
                    <img src={NavLogo} alt="Nav Log" />
                </Link>
            </div>
        </div>
        <div className='col-span-6 OnScroll-navLink flex items-stretch'>
            <NavLinks className="" />
        </div>
        <div className='col-span-5 md:col-span-9 xl:col-span-4 grid grid-cols-12'>

            <NavButton className="order-2  xl:order-1 col-start-8 col-end-[-1] md:col-span-2 xl:col-span-6 "/>

            <div className='navSearch-wrap col-span-10 xl:col-span-6 order-1 xl:order-2 hidden md:flex items-center'>

                <div className='navSearchBar w-[80%] xl:w-auto bg-[#f3f4f7] xl:bg-white flex items-center border p-2.5 rounded-md'>

                    <label htmlFor="onSearch-Filed">

                    <IoIosSearch className='text-[1.4rem]' />

                    </label>

                    <input 
                    type="search" 
                    id="onSearch-Filed" 
                    className='py-1.5 px-1 outline-none block w-full bg-inherit'
                    placeholder='Search products...'
                    />

                </div>
            </div>
        </div>
    </div>
  )
}

export default OnScrollNavBar
