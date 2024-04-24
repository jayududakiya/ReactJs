import React from "react";
import "./topcategories.css";
import cateImg1 from '../../../Assets/Categories/cat01.svg'
import cateImg2 from '../../../Assets/Categories/cat02.svg'
import cateImg3 from '../../../Assets/Categories/cat03.svg'
import cateImg4 from '../../../Assets/Categories/cat04.svg'
import cateImg5 from '../../../Assets/Categories/cat05.svg'
import cateImg6 from '../../../Assets/Categories/cat06.svg'

function TopCategories() {
  return (
    <section className="container my-10 mx-auto">
      <div className="Top-Cate-Heading mb-10">
        <h1>
          Top
          <span>Categories</span>
        </h1>
      </div>

      <div className="tpCategories-wrp pt-[4rem] pb-[8rem] grid grid-cols-2  md:grid-cols-[repeat(4,minmax(0,19rem))]  lg:grid-cols-[repeat(6,minmax(0,19rem))] items-center justify-center">

        <div className="tp-cat-box">
          <div className="tp-Cate-Card">
            <div className="categoriesImg">
              <img src={cateImg1} alt="categories 01" />
              <p className="Cate-number flex items-center justify-center">20</p>
            </div>
            <div className="CateBoxLink" >
              <a href="#">
                <span className="bg-underline">Driftwood</span>
                <span className="bg-underline">Table Decor</span>
              </a>
            </div>
          </div>
        </div>


        <div className="tp-cat-box">
          <div className="tp-Cate-Card">
            <div className="categoriesImg">
              <img src={cateImg2} alt="categories 02" />
              <p className="Cate-number flex items-center justify-center">12</p>
            </div>
            <div className="CateBoxLink" >
              <a href="#">
                <span className="bg-underline">Floor Driftwood</span>
                <span className="bg-underline">Sculpture</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="tp-cat-box">
          <div className="tp-Cate-Card">
            <div className="categoriesImg">
              <img src={cateImg3} alt="categories 03" />
              <p className="Cate-number flex items-center justify-center">03</p>
            </div>
            <div className="CateBoxLink" >
              <a href="#">
                <span className="bg-underline">Driftwood</span>
                <span className="bg-underline">Christmas Tree</span>
              </a>
            </div>
          </div>
        </div>

        <div className="tp-cat-box">
          <div className="tp-Cate-Card">
            <div className="categoriesImg">
              <img src={cateImg4} alt="categories 04" />
              <p className="Cate-number flex items-center justify-center">09</p>
            </div>
            <div className="CateBoxLink" >
              <a href="#">
                <span className="bg-underline">Wooden</span>
                <span className="bg-underline">Bluetooth Speaker</span>
              </a>
            </div>
          </div>
        </div>

        <div className="tp-cat-box">
          <div className="tp-Cate-Card">
            <div className="categoriesImg">
              <img src={cateImg5} alt="categories 05" />
              <p className="Cate-number flex items-center justify-center">10</p>
            </div>
            <div className="CateBoxLink" >
              <a href="#">
                <span className="bg-underline">Receivers</span>
                <span className="bg-underline">Amplifiers</span>
              </a>
            </div>
          </div>
        </div>

        <div className="tp-cat-box">
          <div className="tp-Cate-Card">
            <div className="categoriesImg">
              <img src={cateImg6} alt="categories 06" />
              <p className="Cate-number flex items-center justify-center">05</p>
            </div>
            <div className="CateBoxLink" >
              <a href="#">
                <span className="bg-underline">Appetizer</span>
                <span className="bg-underline">Plate Set</span>
              </a>
            </div>
          </div>
        </div>

          </div>
    </section>
  );
}

export default TopCategories;
