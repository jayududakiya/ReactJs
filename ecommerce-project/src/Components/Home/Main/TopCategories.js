import React from "react";
import "./topcategories.css";
import cateImg1 from '../../../Assets/Categories/Chair.png';
import cateImg2 from '../../../Assets/Categories/roof lamp.png'
import cateImg3 from '../../../Assets/Categories/candle.png'
import cateImg4 from '../../../Assets/Categories/flower.png'
import cateImg5 from '../../../Assets/Categories/candle1.png'
import cateImg6 from '../../../Assets/Categories/plate.png'

function TopCategories() {
  return (
    <section className="container my-10 mx-auto">
      <div className="Top-Cate-Heading mb-10">
        <h1>
          Top
          <span>Categories</span>
        </h1>
      </div>

      <div className="tpCategories-wrp grid grid-cols-2   md:grid-cols-[repeat(4,minmax(0,19rem))]  lg:grid-cols-[repeat(6,minmax(0,19rem))] items-center justify-center">

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

        {/* <div className="tp-cat-box">
          <div className="tp-Cate-Card">
            <div className="categoriesImg">
              <img src={cateImg2} alt="categories 01" />
              <p className="Cate-number flex items-center justify-center">20</p>
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
              <img src={cateImg3} alt="categories 01" />
              <p className="Cate-number flex items-center justify-center">20</p>
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
              <img src={cateImg4} alt="categories 01" />
              <p className="Cate-number flex items-center justify-center">20</p>
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
              <img src={cateImg5} alt="categories 01" />
              <p className="Cate-number flex items-center justify-center">20</p>
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
              <img src={cateImg6} alt="categories 01" />
              <p className="Cate-number flex items-center justify-center">20</p>
            </div>
            <div className="CateBoxLink" >
            <a href="#">
                <span className="bg-underline">Appetizer</span>
                <span className="bg-underline">Plate Set</span>
              </a>
            </div>
          </div>
        </div>

            */}
      </div>
    </section>
  );
}

export default TopCategories;
