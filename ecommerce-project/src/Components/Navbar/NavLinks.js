import React from 'react'
import './navLinks.css'

function NavLinks() {
  return (
    <section
    id="NavLink-wrapper"
    className="flex flex-row items-stretch min-h-[inherit]"
  >
    {/* Link box 1  */}
    <div id="home" className="Nav-link">
      <a
        href="#home"
        className="head-link poppins-regular flex items-center transition-all"
      >
        
        Home <i className="ml-2 fa-solid fa-angle-down text-[1.1rem]"></i>
      </a>
      <ul className="links-warp link-box ">
        <li>
          <a href="#">Wooden Home</a>
        </li>
        <li>
          <a href="#">Fashion Home</a>
        </li>
        <li>
          <a href="#">Furniture Home</a>
        </li>
        <li>
          <a href="#">Cosmetics Home</a>
        </li>
        <li>
          <a href="#">Food Grocery</a>
        </li>
      </ul>
    </div>

    {/* link box 2 */}

    <div id="shop" className="Nav-link">
      <a
        href="#shop"
        className="head-link poppins-regular flex items-center transition-all"
      >
        Shop <i className="ml-2 fa-solid fa-angle-down text-[1.1rem]"></i>
      </a>
      <ul className="links-warp link-box">
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">shop 2</a>
        </li>
        <li>
          <a href="#">Shop details</a>
        </li>
        <li>
          <a href="#">Shop details 2</a>
        </li>
        <li>
          <a href="#">Shop Location</a>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
        <li>
          <a href="#">sign in</a>
        </li>
        <li>
          <a href="#">checkout</a>
        </li>
        <li>
          <a href="#">whishList</a>
        </li>
        <li>
          <a href="#">Product Track</a>
        </li>
      </ul>
    </div>

    {/* link box 3 */}

    <div id="pages" className="Nav-link">
      <a
        href="#pages"
        className="head-link poppins-regular flex items-center transition-all"
      >
        Pages <i className="ml-2 fa-solid fa-angle-down text-[1.1rem]"></i>
      </a>
      <div className="link-box ">
        {/* Page layout 2  */}
        <ul className="links-warp">
          <li>
            <h3>PAGE LAYOUT</h3>
          </li>
          <li>
            <a href="#">Shop Filter V1</a>
          </li>
          <li>
            <a href="#">Shop Filter V2</a>
          </li>
          <li>
            <a href="#">Shop Sidebar</a>
          </li>
          <li>
            <a href="#">Shop Right Sidebar</a>
          </li>
          <li>
            <a href="#">Shop list View</a>
          </li>
        </ul>
        {/* Page layout 2  */}
        <ul className="links-warp">
          <li>
            <h3>PAGE LAYOUT 2</h3>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <a href="#">Checkout</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
        </ul>

        {/* Page Layout 3 */}

        <ul className="links-warp">
          <li>
            <h3>PAGE TYPE </h3>
          </li>
          <li>
            <a href="#">Product Track</a>
          </li>
          <li>
            <a href="#">Wishlist</a>
          </li>
          <li>
            <a href="#">404 / Error</a>
          </li>
          <li>
            <a href="#">Coming Soon</a>
          </li>
        </ul>
      </div>
    </div>

    {/* link box 4 */}

    <div id="blog" className="Nav-link">
      <a
        href="#blog"
        className="head-link poppins-regular flex items-center transition-all"
      >
        Blog <i className="ml-2 fa-solid fa-angle-down text-[1.1rem]"></i>
      </a>
      <ul className="links-warp link-box ">
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Blog Details</a>
        </li>
      </ul>
    </div>

    {/* link box 5 */}

    <div id="contact" className="Nav-link">
      <a
        href="#contact"
        className="head-link poppins-regular flex items-center transition-all"
      >
        Contact
      </a>
    </div>
  </section>
  )
}

export default NavLinks
