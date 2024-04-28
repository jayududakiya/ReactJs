import React from 'react'
import Logo from "../../Assets/Logos Img/logo.png";
import playStore from '../../Assets/Logos Img/PlayStore.jpg'
import appStore from '../../Assets/Logos Img/AppStore.jpg'
import logoBar from '../../Assets/Logos Img/LogoBar.png'

import './footer.css'

function Footer() {
  return (
    <footer className="footer-wrapper m-auto bg-[#F8F8F8]">
      <div className="sm:container py-10 mx-auto">

        <div className="mb-8 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 justify-stretch gap-[3rem]">
          <div className="lg:col-span-2">
            <a href="#" className="footer-logo mb-8">
              <img
                src={Logo}
                className="block w-full h-full object-contain"
                alt="logo"
              />
            </a>

            <p className="poppins-regular pr-[4rem]  text-[#8e8e8e] text-[1.2rem] text-left leading-8">
              Elegant pink origami design three dimensional view and decoration
              co-exist. Great for adding a decorative touch to any room's decor.
            </p>
          </div>

          <div className="columns">
            <h3 className="">Information</h3>
            <ul className="foot-list">
              <li>
                <a href="#">Custom Service</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Ordering Tracking</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
            </ul>
          </div>

          <div className="columns">
            <h3>My Account</h3>
            <ul className="foot-list">
              <li>
                <a href="#">Delivery Information</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Discount</a>
              </li>
              <li>
                <a href="#">Custom Service</a>
              </li>
              <li>
                <a href="#">Terms Condition</a>
              </li>
            </ul>
          </div>

          <div className="columns">
            <h3>Social Network</h3>
            <ul className="foot-list">
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-dribbble"></i>
                  Dribbble
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                  Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-behance"></i>
                  Behance
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                  Youtube
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[1.1rem] font-semibold underline mb-[2.5rem]">
              Get Newsletter
            </h3>

            <p className="poppins-regular text-[#8e8e8e] text-[1.2rem] text-left mb-8">
              Get on the list and get 10% off your first order!
            </p>

            <div className="footBtn ">
              <input
                type="email"
                name=""
                id="email-fild"
                placeholder="Enter email address"
              />
              <button className="Btn flex items-center justify-center px-2 py-4">
                Subscribe Now
                <i className="fa-solid fa-arrow-right-long block"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="contact-bar flex flex-wrap items-center justify-between ">

          <div className='contact-box flex items-center mb-6 sm:mb-0'>

            <span className=' flex items-center text-[1.3rem] mr-8'>
              <i className="fa-solid fa-phone -rotate-90"></i>
            </span>

            <p className='contact-text'>
              <a href="tel:" className='block poppins-semibold text-[1.2rem] uppercase'>980.029.666.99</a>
              <span className='block  poppins-light text-[0.9rem]'>Working 8:00-22:00</span>
            </p>

          </div>

          <div className='appInfo'>
            <ul className='flex flex-wrap items-center'>
              <li className=' mb-4 sm:mb-0'>
                <h3 className=' poppins-semibold text-[1.2rem]' >Download App on Mobile</h3>
                <p className=' poppins-light text-[0.8rem] text-[#8e8e8e]' >15% discount on your first purchase</p>
              </li>
              <li className='flex flex-wrap sm:flex-nowrap items-center ml-0 sm:ml-6'>
                <img src={playStore} className='inline-block w-[120px] sm:w-full mr-2'    alt="Android App" />
                <img src={appStore}  className='inline-block w-[120px] sm:w-full' alt="IOS App" />
              </li>
            </ul>
          </div>

        </div>


      </div>
      <div className="copyRight-bar">

        <div className='w-[90%] grid grid-cols-1 md:grid-cols-3 justify-between p-8 mx-auto '>
        <p className='poppins-regular md:col-span-2  mb-4 sm:mb-0 text-[1.2rem] text-[#8e8e8e]'>
          Copyright 2024 <a href="#"> ©Ninico.</a> All rights reserved. Developed by <a href="#">AliThemes.</a>
        </p>
          <img src={logoBar} className='block md:col-start-3 md:col-end-3 object-contain ' alt="Logo bar" />
        </div>
      </div>
    </footer>
  );
}

export default Footer
