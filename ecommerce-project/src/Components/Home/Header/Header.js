import React from "react";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider_1 from "../../../Assets/Images/banner-1.png";
import slider_2 from "../../../Assets/Images/banner-2.png";
import slider_3 from "../../../Assets/Images/banner-3.png";
import banner01 from "../../../Assets/Images/banner-slider-01.png";
import banner02 from "../../../Assets/Images/banner-slider-02.png";

import "./header.css";

function Header() {

  return (
      <header className="container mx-auto">
        <div className="main-box w-full flex flex-wrap items-stretch justify-between">
          <div className="slider-wrapper max-w-[70%] min-h-[inherit] mx-2">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slide relative h-full">
                  <img
                    src={slider_1}
                    alt="slid-1"
                    className="min-h-[inherit] "
                  />

                  <div className="slide-text flex flex-col justify-center absolute">
                    <p>Accessories</p>

                    <h1>
                      Up To
                      <span>45% Off</span>
                      latest Creations
                    </h1>

                    <a
                      href="#"
                      id="shopLink"
                      className="flex items-center justify-center"
                    >
                      Shop Now
                      <i className="fa-solid fa-arrow-right block ml-3"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide relative h-full">
                  <img
                    src={slider_2}
                    alt="slid-1"
                    className="min-h-[inherit] "
                  />

                  <div className="slide-text flex flex-col justify-center absolute">
                    <p>Accessories</p>

                    <h1>
                      Up To
                      <span>45% Off</span>
                      latest Creations
                    </h1>

                    <a
                      href="#"
                      id="shopLink"
                      className="flex items-center justify-center"
                    >
                      Shop Now
                      <i className="fa-solid fa-arrow-right block ml-3"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide relative h-full">
                  <img
                    src={slider_3}
                    alt="slid-1"
                    className="min-h-[inherit] "
                  />

                  <div className="slide-text flex flex-col justify-center absolute">
                    <p>Accessories</p>

                    <h1>
                      Up To
                      <span>45% Off</span>
                      latest Creations
                    </h1>

                    <a
                      href="#"
                      id="shopLink"
                      className="flex items-center justify-center"
                    >
                      Shop Now
                      <i className="fa-solid fa-arrow-right block ml-3"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>

          <div className="side-images max-w-[28%] flex flex-col items-center justify-between">
            <a href="" className="block banner banner-1 relative">
              <img src={banner01} alt="Hand Mande" />
              <div className="Img-text absolute">
                <h3>Hand made</h3>
                <h1>New Modern stylist Craft</h1>
              </div>
            </a>

            <a href="" className="block banner banner-2 relative">
              <img src={banner02} alt="Popular" />
              <div className="Img-text absolute">
                <h3>Popular</h3>
                <h1>Energy with our newest collection</h1>
              </div>
            </a>
          </div>
        </div>
      </header>
  );
}

export default Header;
