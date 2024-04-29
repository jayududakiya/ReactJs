import React from "react";
import ProductCard from '../../Common Components/ProductCard'


import Product1 from '../../../Assets/Products Img/product1.jpg'
import Product2 from '../../../Assets/Products Img/product3.jpg'
import Product3 from '../../../Assets/Products Img/product5.jpg'
import Product4 from '../../../Assets/Products Img/product7.jpg'
import Product5 from '../../../Assets/Products Img/product9.jpg'
import Product6 from '../../../Assets/Products Img/product11.jpg'
import Product7 from '../../../Assets/Products Img/product13.jpg'
import Product8 from '../../../Assets/Products Img/product15.jpg'
import Product9 from '../../../Assets/Products Img/product17.jpg'
import Product10 from '../../../Assets/Products Img/product19.jpg'


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

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          <ProductCard ProductImg={Product1}  productName="Bradley Burgess 2" Price="$20.00"  />
          <ProductCard ProductImg={Product2}  productName="Allie Sharp" Price="$30.00"  />
          <ProductCard ProductImg={Product3}  productName="Nathaniel Baldwin" Price="$40.00"  />
          <ProductCard ProductImg={Product4}  productName="Effie Rios" Price="$40.00"  />
          <ProductCard ProductImg={Product5}  productName="Carolyn Goodwin" Price="$50.00"  />
          <ProductCard ProductImg={Product6}  productName="Evelyn Patton" Price="$60.00"  />
          <ProductCard ProductImg={Product7}  productName="Sally Ray" Price="$70.00"  />
          <ProductCard ProductImg={Product8}  productName="Ora Bowman" Price="$80.00"  />
          <ProductCard ProductImg={Product9}  productName="Frederick Valdez" Price="$90.00"  />
          <ProductCard ProductImg={Product10}  productName="Terry Byrd" Price="$100.00"  /> 

        </div> {/* END OF GRID */}

      </div>

    </section>
  );
}

export default PopularProducts;
