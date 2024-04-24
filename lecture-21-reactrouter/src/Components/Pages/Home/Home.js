import React from "react";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Product_1 from './Asset/T-Shirt-Mockup.jpg'
import Product_2 from './Asset/Flying-Flash-Disk-Mockup.jpg'
import Product_3 from './Asset/Perfume-Mockup.jpg'

import Thumbnail1 from './Asset/T-Shirt-Mockup-2.jpg'
import Thumbnail2 from './Asset/Flying-Flash-Disk-Mockup-2.jpg'
import Thumbnail3 from './Asset/Perfume-Mockup-2.jpg'

import cardImg1 from './Asset/T-Shirt-Mockup-3.jpg'
import cardImg2 from './Asset/Flying-Flash-Disk-Mockup-3.jpg'
import cardImg3 from './Asset/Perfume-Mockup-3.jpg'

function Home() {
  return (
    <>
      <header>
        <div id="carouselExampleCaptions" className="carousel slide bg-secondary">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={Product_1}
                className="d-block w-100 object-fit-cover "
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block text-start mb-5">
                <h1>Example headline.</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate earum officiis
                </p>
                <button
                  type="button"
                  className="btn btn-primary text-capitalize btn-lg"
                >
                  sign up today
                </button>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src={Product_2}
                className="d-block w-100 object-fit-cover "
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block mb-5">
                <h1>Another example headline.</h1>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
                <button
                  type="button"
                  className="btn btn-primary text-capitalize btn-lg"
                >
                  learn more
                </button>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src={Product_3}
                className="d-block w-100 object-fit-cover "
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block text-end mb-5">
                <h1>One more for good measure.</h1>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
                <button
                  type="button"
                  className="btn btn-primary text-capitalize btn-lg"
                >
                  browse gallery
                </button>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>

      <main>
        <div className="container-md my-5">
          <div className="row row-cols-md-2 m-auto">
            <div className="col-md-12 col-lg-4">
              <div
                className="card w-100 border-0"
                style={{width: 18+"rem",textAlign:"center"}}
              >
                <img
                  src={Thumbnail1}
                  className="card-img-top m-auto rounded-circle  "
                  alt="..."
                />

                <div className="card-body">
                  <h3 className="card-title text-grey">T Shirt's</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    non laboriosam at sit blanditiis deserunt laudantium quaerat
                    est voluptate, aliquid maiores eveniet odit, possimus nam!
                  </p>
                  <a href="#" className="btn btn-secondary">
                    View details <i className="fa-solid fa-angles-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-4">
              <div
                className="card w-100 border-0"
                style={{width: 18+"rem",textAlign:"center"}}
              >
                <img
                  src={Thumbnail2}
                  className="card-img-top m-auto rounded-circle "
                  alt="..."
                />

                <div className="card-body">
                  <h3 className="card-title text-grey">Flash Disk</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    non laboriosam at sit blanditiis deserunt laudantium quaerat
                    est voluptate, aliquid maiores eveniet odit, possimus nam!
                  </p>
                  <a href="#" className="btn btn-secondary">
                    View details <i className="fa-solid fa-angles-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-4">
              <div
                className="card w-100 border-0"
                style={{width: 18+"rem",textAlign:"center"}}
              >
                <img
                  src={Thumbnail3}
                  className="card-img-top m-auto rounded-circle "
                  alt="..."
                />

                <div className="card-body">
                  <h3 className="card-title text-grey">Perfume</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    non laboriosam at sit blanditiis deserunt laudantium quaerat
                    est voluptate, aliquid maiores eveniet odit, possimus nam!
                  </p>
                  <a href="#" className="btn btn-secondary">
                    View detalis <i className="fa-solid fa-angles-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row p-5 card-box">
            <div className="col-12 h-100 w-100">
              <div className="row pt-5 pb-5 border border-black border-1 border-top-1 border-end-0 border-bottom-0 border-start-0 ">
                <div className="col-sm-12 col-md-6 box-body">
                  <h1 className="display-5">
                    First featurette heading.
                    <p className="card-subtitle mb-2 text-body-secondary display-5">
                      It’ll blow your mind.
                    </p>
                  </h1>

                  <h3 className="display-6 mt-3 fs-5">
                    Some great placeholder content for the first featurette
                    here. Imagine some exciting prose here.
                  </h3>
                </div>

                <div className="col-sm-12 col-md-6 box-image mt-3">
                  <img
                    src={cardImg1}
                    className="img-fluid d-block"
                    alt="..."
                  />
                </div>
              </div>

              <div className="row pt-5 pb-5 border border-black border-1 border-top-1 border-end-0 border-bottom-0 border-start-0">
                <div className="col-sm-12 col-md-6 box-image mb-3">
                  <img
                    src={cardImg2}
                    className="img-fluid d-block"
                    alt="..."
                  />
                </div>

                <div className="col-sm-12 col-md-6 box-body">
                  <h1 className="display-5">
                    Oh yeah, it’s that good.
                    <p className="card-subtitle mb-2 text-body-secondary display-5">
                      See for yourself.
                    </p>
                  </h1>

                  <h3 className="display-6 fs-5">
                    Another featurette? Of course. More placeholder content here
                    to give you an idea of how this layout would work with some
                    actual real-world content in place.
                  </h3>
                </div>
              </div>

              <div className="row pt-5 pb-5 border border-black border-1 border-top-1 border-end-0 border-bottom-0 border-start-0">
                <div className="col-sm-12 col-md-6 box-body">
                  <h1 className="display-5">
                    And lastly, this one.
                    <p className="card-subtitle mb-2 text-body-secondary display-5">
                      Checkmate.
                    </p>
                  </h1>

                  <h3 className="display-6 mt-3 fs-5">
                    And yes, this is the last block of representative
                    placeholder content. Again, not really intended to be
                    actually read, simply here to give you a better view of what
                    this would look like with some actual content. Your content.
                  </h3>
                </div>

                <div className="col-sm-12 col-md-6 box-image mt-3">
                  <img
                    src={cardImg3}
                    className="img-fluid d-block"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>

          <footer className="row pt-5 justify-content-between border border-black border-1 border-top-1 border-end-0 border-bottom-0 border-start-0">
            <div className="col-sm-12 col-md-5">
              <p className="text-center text-md-start">
                © 2017–2023 Company, Inc. · <a href="#">Privacy</a>·{" "}
                <a href="#">Terms</a>
              </p>
            </div>
            <div className="col-sm-12 col-md-2">
              <a href="#" className="text-center text-md-end d-block">
                Back to top
              </a>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}

export default Home;
