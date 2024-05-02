import React from "react";

import ProductsData from "../../Data/ProductsData";
import ProductsCard from '../../Common Components/ProductsCard/ProductsCard'

import '../Style/Home.css'
import '../Style/HomeResponsive.css'


function PopularProducts() {
  return (
    
    <section className="">

      <div className="Popular-Products-Heading mb-5 grid grid-cols-1 sm:grid-cols-12 pt-[7rem]">
       
        <h1 className="Section-Heading col-auto sm:col-span-2 pl-0 md:pl-10">
          Popular
          <span>Products</span>
        </h1>

        <ul className="PopProducts-link col-start-auto sm:col-start-6 lg:col-start-8 xl:col-start-9 sm:col-end-[-1] flex items-center justify-around">
          <li>
            <a href="#All" className="text-[1.3rem] font-semibold">
              All
            </a>
          </li>
          <li>
            <a href="#Popular" className="text-[1.3rem] font-semibold">
              Popular
            </a>
          </li>
          <li>
            <a href="#onSale" className="text-[1.3rem] font-semibold">
              On Sale
            </a>
          </li>
          <li>
            <a href="#bastRated" className="text-[1.3rem] font-semibold">
              Bast Rated
            </a>
          </li>
        </ul>
      </div>

      <div className="PopProducts-wrapper pt-16 pb-24">

        
        <div className="mx-auto flex flex-wrap items-center justify-center ">

          {ProductsData.map((Product,ind)=>{
            return(
              <ProductsCard  key={ind} firstProductImg={Product.FirstImg} secondeProductImg={Product.SecondeImg}  productName={Product.name} Price={Product.price} />
            )
          })}

        </div> {/* END OF GRID */}

      </div>

    </section>
  );
}

export default PopularProducts;
