import React from "react";
import "./Contact.css";
import Location from "../../Assets/Icons/location-pin.svg";
import Call from "../../Assets/Icons/call-receive.svg";
import Clock from "../../Assets/Icons/clock-0500.svg";
import HeadPhone from "../../Assets/Icons/headset.svg";
import RightArrow from "../../Assets/Icons/right-arrow.svg";

function Contact() {
  return (
    <div id="Contact" className=" mx-auto pt-28">

      <div className="sm:container mx-auto Contact-data-box grid grid-cols-1 lg:grid-cols-12 gap-x-7 gap-y-6 lg:gap-y-0 mb-32">

        <div className="Contact-details col-auto lg:col-span-4 ">
          <div className="contact-link-wrap border rounded-md py-9 px-9 mb-3.5">
            <h1 className="Contact-details-heading text-[2rem] capitalize font-bold mb-5">
              Get In Touch
            </h1>
            <ul className="">
              <li className="my-[20px] flex items-center justify-start">
                <span className="icons mr-4 self-start">
                  <img src={Location} alt="Location icon" />
                </span>
                <span className="contact-link">
                  <a href="#address-Map">
                    24/26 Strait Bargate, Boston, PE21, United Kingdom
                  </a>
                </span>
              </li>
              <li className="my-[20px] flex items-center justify-start">
                <span className="icons mr-4 self-start">
                  <img src={Call} alt="Call icon" />
                </span>
                <span className="contact-link">
                  <a href="tel:6 - 146 - 389 - 5748">
                    +098 (905) 786 897 8
                    <br />6 - 146 - 389 - 5748
                  </a>
                </span>
              </li>
              <li className="my-[20px] flex items-center justify-start">
                <span className="icons mr-4 self-start">
                  <img src={Clock} alt="Clock icon" />
                </span>
                <span className="contact-link">
                  <p>
                    Store Hours : <br />
                    10 am - 10 pm EST, 7 days a week
                  </p>
                </span>
              </li>
            </ul>
          </div>

          <div className="contact-btn-wrap flex flex-col items-center justify-center">
            <a href="tel:6 - 146 - 389 - 5748" className="contact-btn border">
              <p>Get Support On Call </p>
              <span className="icons ml-4">
                <img src={HeadPhone} alt="HeadPhone icons" />
              </span>
            </a>
            <a
              href="https://www.google.com/maps/@36.963672,-119.2249843,7.17z"
              // target="_blank"
              className="contact-btn border"
            >
              <p>Get Direction</p>
              <span className="icons ml-4">
                <img src={Location} alt="Location icon" />
              </span>
            </a>
          </div>
        </div>

        <div className="Contact-form col-auto lg:col-span-8">
          <div className="Contact-form-heading">
            <h1 className="text-[2rem] capitalize font-bold">
              Make Custom Request
            </h1>
            <p className="text-gray-600 capitalize text-[1rem]">
              Must-have pieces selected every month want style Ideas and Treats?
            </p>
          </div>
          {/* Form  */}
          <form 
           action="https://formspree.io/f/mdoqbrjo"
           method="POST"
           className="">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-0 lg:gap-x-6 gap-y-6 lg:gap-y-0 py-6">
              <input
                type="text"
                id="large-input"
                name="Name"
                className="col-span-6 block w-full px-5 py-3 border rounded-lg text-[1.2rem] "
                placeholder="Full name"
                title="Please fill out this field"
              />
              <input
                type="email"
                id="large-input"
                name="Email"
                className="col-span-6 block w-full px-5 py-4 border rounded-lg text-[1.2rem] "
                placeholder="Email address"
                title="Please fill out this field"
              />
            </div>

            <div className="grid  grid-cols-1 lg:grid-cols-12 gap-x-0 lg:gap-x-6 gap-y-6 lg:gap-y-0 pb-6">
              <input
                type="text"
                id="large-input"
                name="Number"
                className="col-span-6 block w-full px-5 py-3 border rounded-lg text-[1.2rem] "
                placeholder="Phone number"
                title="Please fill out this field"
              />
              <input
                type="text"
                id="large-input"
                name="Subject"
                className="col-span-6 block w-full px-5 py-4 border rounded-lg text-[1.2rem] "
                placeholder="Subject"
                title="Please fill out this field"
              />
            </div>

            <div className="pb-8">
              <textarea
                id="message"
                name="Review"
                rows="7"
                className="block px-5 py-[18px] w-full text-[1.2rem] border rounded-lg"
                placeholder="Enter massage"
                title="Please fill out this field"
              ></textarea>
            </div>

            <button className="bg-[#D51243] form-button flex items-center justify-evenly text-[#FFFFFF] font-bold text-[1.1rem] min-w-[185px] min-h-[55px] px-2 rounded-[5px]">
                Get A Quote <span className="icons"><img src={RightArrow} alt="Right Arrow" /></span>
            </button>

          </form>
        </div>

      </div>

      <div id="address-Map" className="address-map-container">

      <iframe title="map" className="w-full min-h-[550px]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d772784.5275147371!2d-74.254797!3d40.834782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1714412516192!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      </div>


    </div>
  );
}

export default Contact;
