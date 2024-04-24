import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ShopPage.css'


import Card1Img from './Asset/Classic-Perfume-Bottle-Mockup.jpg'
import Card2Img from './Asset/Hair-Spray-Mockup.jpg'
import Card3Img from './Asset/Phone-Cover-Mockup.jpg'
import Card4Img from './Asset/Website-Presentation-Mockup.jpg'


function ShopPage() {
  return (
    <>
    <header className='Shop-header'>
    <div className="d-flex flex-column align-items-center justify-content-center heading-wraper">
            
            <div className="heading-box mt-5">
                <h1 className="text-white text-center display-2 fw-semibold"> Shop in style</h1>
                <p className="text-light text-center pt-2 fs-5 text-capitalize">with us shop homepage template </p>
            </div>

        </div>
            
    </header>
        <main>

<div className="row row-cols-1 row-cols-md-4 g-4 m-auto card-box-wrapper">

    <div className="col">

      <div className="card pb-3">

      <img src={Card1Img} className="card-img-top" alt="..." />

        <div className="card-body">

          <h5 className="card-title text-center text-capitalize">Perfume Bottle</h5>
          <p className="card-text text-center text-secondary">$40.00-$80.00</p>

        </div>

        <div className="card-button m-auto">    
            <button type="button" className="btn btn-outline-dark">
                View options
            </button>
        </div>

      </div>

    </div>

    <div className="col">

      <div className="card pb-3 position-relative">  

      <img src={Card2Img} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title  text-center text-capitalize">Hair Spray</h5>
          <div className="star-box m-auto d-flex justify-content-center my-3">
            <i className="fa-solid fa-star" style={{color: "#fff047"}}></i>
            <i className="fa-solid fa-star" style={{color: "#fff047"}}></i>
            <i className="fa-solid fa-star" style={{color: "#fff047"}}></i>
            <i className="fa-solid fa-star" style={{color: "#fff047"}}></i>
            <i className="fa-solid fa-star" style={{color: "#fff047"}}></i>
          </div>
          <p className="card-text text-center text-black"><span className="text-decoration-line-through text-secondary">$20.00</span> $18.00</p>
        </div>

        <div className="card-button m-auto">    
            <button type="button" className="btn btn-outline-dark ">
                Add to Cart
            </button>
        </div>

        <div className="ms-1 badge text-bg-dark position-absolute mt-1 me-1 top-0 end-0">Sale</div>

      </div>

    </div>

    <div className="col">
        
      <div className="card pb-3 position-relative">  

      <img src={Card3Img} className="card-img-top" alt="..." />

        <div className="card-body">

            <h5 className="card-title  text-center text-capitalize">Phone Cover</h5>

            <p className="card-text text-center text-black"><span className="text-decoration-line-through text-secondary">$50.00</span> $25.00</p>

        </div>

          <div className="card-button m-auto">    
              <button type="button" className="btn btn-outline-dark ">
                  Add to Cart
              </button>
          </div>

          <div className="ms-1 badge text-bg-dark position-absolute mt-1 me-1 top-0 end-0">Sale</div>

        </div>

    </div>

    <div className="col">

      <div className="card pb-3"> 


        <img src={Card4Img} className="card-img-top" alt="..." />

        <div className="card-body">
            <h5 className="card-title  text-center text-capitalize">TV Screen</h5>
            <div className="star-box m-auto d-flex justify-content-center my-3">
              <i className="fa-solid fa-star" style={{color: "#fff047"}}></i>
              <i className="fa-solid fa-star" style={{color: "#fff047"}}></i>
              <i className="fa-solid fa-star" style={{color: "#fff047"}}></i>
              <i className="fa-solid fa-star" style={{color: "#fff047"}}></i>
              <i className="fa-solid fa-star" style={{color: "#fff047"}}></i>
            </div>
            <p className="card-text text-center text-black">$40.00</p>
          </div>

          <div className="card-button m-auto">    
              <button type="button" className="btn btn-outline-dark ">
                  Add to Cart
              </button>
          </div>


      </div>

    </div>

  </div>

</main>
    </>
  )
}

export default ShopPage
