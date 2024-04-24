import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Autoplay, Pagination } from "swiper/modules";

import "./FollowOnSection.css";

import instagram01 from "../../../Assets/Popular Products Img/instagram01.png";
import instagram02 from "../../../Assets/Popular Products Img/instagram02.jpg";
import instagram03 from "../../../Assets/Popular Products Img/instagram03.jpg";
import instagram04 from "../../../Assets/Popular Products Img/instagram04.jpg";
import instagram05 from "../../../Assets/Popular Products Img/instagram05.jpg";
import instagram06 from "../../../Assets/Popular Products Img/instagram06.jpg";

function FollowOnSection() {
  return (
    <section className="FollowOnSection my-[7rem]">
      <div className="follow-On-wrapper container">
        <div className="follow-hading text-center my-10">
          <p className="text-[#D82552] text-[2rem]">Follow On</p>
          <h1 className="flex items-center justify-center poppins-bold text-[2.5rem]">
            <i className="fa-brands fa-instagram mr-2 text-[2.5rem]"></i>
            ninico-shop
          </h1>
        </div>
      </div>

      <div className="follow-swiper-box container mx-auto">
        <div className="follow-swiper ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
              575: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1400: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <a href="#" className="flex items-center inst-link">
                <img src={instagram01} alt="Follow-post-1" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="flex items-center inst-link">
                <img src={instagram02} alt="Follow-post-1" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="flex items-center inst-link">
                <img src={instagram03} alt="Follow-post-1" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="flex items-center inst-link">
                <img src={instagram04} alt="Follow-post-1" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="flex items-center inst-link">
                <img src={instagram05} alt="Follow-post-1" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="flex items-center inst-link">
                <img src={instagram06} alt="Follow-post-1" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default FollowOnSection;
