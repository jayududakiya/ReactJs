import React from 'react'
import './productcard.css'

function ProductCard({ ProductImg , productName , Price }) {
  return (
    <div className="col flex flex-col flex-wrap justify-between items-center">
          
    {/* PRODUCT */}

      <div className="PopProducts-card">
      
        <div className="PopCard-head mx-auto rounded-xl overflow-hidden relative">
          
          <img
            src={ProductImg}
            alt={productName + "img"}
            className="object-contain block w-full h-full"
          />

          <div className="Card-btn-wrapper absolute top-0 left-0 w-full h-full flex items-center justify-center">

            <ul className="Card-button-box flex items-center justify-evenly bg-white rounded-xl">
              <li>
                <button className="flex items-center justify-center text-[2.5rem] ">
                <i className="fa-solid fa-basket-shopping"></i>
                </button>
              </li>
              <li><button className="flex items-center justify-center text-[2.5rem] ">
              <i className="fa-solid fa-arrow-right-arrow-left"></i>
                </button></li>
              <li><button className="flex items-center justify-center text-[2.5rem] ">
              <i className="fa-solid fa-eye"></i>
              </button></li>
              <li><button className="flex items-center justify-center text-[2.5rem] ">
              <i className="fa-regular fa-heart"></i></button></li>
            </ul>

          </div>

        </div>

        <div className="PopCard-body">
          <div className="card-texts">
            <a href="#">{productName}</a>

            <p>{Price}</p>
          </div>
        </div>

        <div className="product-details flex items-center justify-between">

<ul className="product-color-link flex items-center justify-between">

  <li>
    <a href="#" className="flex items-center">
      <span className="inline-block rounded-full"></span>
    </a>
  </li>
  <li>
    <a href="#" className="flex items-center">
      <span className="inline-block rounded-full"></span>
    </a>
  </li>
  <li>
    <a href="#" className="flex items-center">
      <span className="inline-block rounded-full"></span>
    </a>
  </li>
  <li>
    <a href="#" className="flex items-center">
      <span className="inline-block rounded-full"></span>
    </a>
  </li>

</ul>

<ul className="rating-link flex items-center justify-center">
  <li className="mr-1">
    <a href="#" className="star-link flex items-center">
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-regular fa-star"></i>
    </a>
  </li>

  <li className="">
    <p className="flex items-center">(81)</p>
  </li>
</ul>

</div>

      </div>



    </div>
    
  )
}

export default ProductCard
