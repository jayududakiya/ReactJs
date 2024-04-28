import React from "react";
import ProductCard from './ProductCard'

import Product1 from '../../../Assets/Popular Products Img/product1.jpg'
import Product2 from '../../../Assets/Popular Products Img/product3.jpg'
import Product3 from '../../../Assets/Popular Products Img/product5.jpg'
import Product4 from '../../../Assets/Popular Products Img/product7.jpg'
import Product5 from '../../../Assets/Popular Products Img/product9.jpg'
import Product6 from '../../../Assets/Popular Products Img/product11.jpg'
import Product7 from '../../../Assets/Popular Products Img/product13.jpg'
import Product8 from '../../../Assets/Popular Products Img/product15.jpg'
import Product9 from '../../../Assets/Popular Products Img/product17.jpg'
import Product10 from '../../../Assets/Popular Products Img/product19.jpg'

function PopularProducts() {
  return (
    <section className="sm:container mx-auto">

      <div className="Top-Cate-Heading my-10 flex flex-wrap  items-center justify-between">
        <h1 className="">
          Popular
          <span>Products</span>
        </h1>

        <ul className="PopProducts-link flex items-center justify-center">
          <li>
            <a href="#" className="text-[1.3rem] mx-3">
              All
            </a>
          </li>
          <li>
            <a href="#" className="text-[1.3rem] mx-3">
              Popular
            </a>
          </li>
          <li>
            <a href="#" className="text-[1.3rem] mx-3">
              On Sale
            </a>
          </li>
          <li>
            <a href="#" className="text-[1.3rem] mx-3">
              Bast Rated
            </a>
          </li>
        </ul>
      </div>

      <div className="PopProducts-wrapper  my-[7rem]">

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        // justify-center 
        // justify-items-stretch 
        // content-center
        ">

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
          {/* 
        */}
          

        </div> {/* END OF GRID */}

      </div>

    </section>
  );
}

export default PopularProducts;
