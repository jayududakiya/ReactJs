import React from "react";
import PageHeading from "../Common Components/PageHeading/PageHeading";
import LoginImg from "../../Assets/login-bg.png";
import SignUpImg from "../../Assets/sign-bg.png";

// ICONS
import { GoLock } from "react-icons/go";
import { GoKey } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { PiToolbox } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2";

function SignIn() {
  return (
    <section className="">
      <PageHeading goBackLink="Home" pageTitle="Sign In" />

      <div className="Registration-Forms sm:container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-10 py-24">
        {/* LOGIN FROM */}
        <div className="Login-Here bg-[#F6F6F6] rounded-lg hover:shadow-md mb-11 lg:mb-0">
          <div className="Form-Img">
            <img
              src={LoginImg}
              alt="Login-Here"
              className="block rounded-t-lg w-full mx-auto object-contain"
            />
          </div>
          <div className="Form-data p-10">
          {/* Form Heading */}
            <div className="Form-Head flex justify-start items-start gap-x-3 pb-3">
              <div className="FHead-logo mt-1.5">
                <span className="bg-white inline-flex w-10 h-10 justify-center  items-center rounded-lg">
                  <GoLock className=" text-xl" />
                </span>
              </div>
              <div className="FHead-text ">
                <h4 className="text-xl font-medium capitalize">Login Here</h4>
                <p className="text-sm text-slate-500 font-normal">
                  Your personal data will be used to support your experience
                  throughout this website, to  manage access to your
                  account.
                </p>
              </div>
            </div>
            {/* Form  */}
            <form
              id="Login-Form"
              action=""
              className=""
            >
              {/* User Email */}
              <div className="relative my-3">
                <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                  <label
                    htmlFor="input-Login-email"
                    className="text-lg flex items-center justify-center"
                  >
                    <FaRegUser />
                  </label>
                </div>
                <input
                  type="email"
                  id="input-Login-email"
                  className="border-none p-6 text-sm rounded-lg block w-full ps-12  outline-none"
                  placeholder="Username / email address"
                  required
                />
              </div>
              {/* Password */}
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                  <label
                    htmlFor="input-Login-Password"
                    className="text-lg flex items-center justify-center"
                  >
                    <GoKey />
                  </label>
                </div>
                <input
                  type="password"
                  id="input-Login-Password"
                  className="border-none p-6 text-sm rounded-lg block w-full ps-12  outline-none"
                  placeholder="Password"
                />
              </div>
              <div className="validation-box flex items-center justify-between py-3.5">
                <div className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 rounded border-none  bg-[#D51243] outline-none  transition-all"
                  />
                  <label htmlFor="default-checkbox" className="ms-2 text-sm ">
                    Remember me
                  </label>
                </div>
                <div className="flex items-center">
                  <a href="/" className="flex items-center text-sm underline">
                    Forget Password
                  </a>
                </div>
              </div>
              {/* Button */}
              <div className="w-full">
                <button
                  type="button"
                  className="px-6 py-3.5 text-lg font-medium text-white bg-[#d51243f5] hover:bg-[#D51243] flex items-center justify-center w-full rounded-md text-center capitalize "
                >
                  Login Now
                  <HiArrowLongRight className="text-2xl ms-8 "/> 
                </button> 
              </div>
            </form>
          </div>
        </div>

        {/*SIGN UP FROM   */}
        <div className="Sign-Up bg-[#F6F6F6] rounded-lg hover:shadow-md">
          <div className="Form-Img">
          <img
              src={SignUpImg}
              alt="SignUp-Here"
              className="block rounded-t-lg w-full mx-auto object-contain"
            />
          </div>
            <div className="Form-data p-10">
            <div className="Form-Head flex justify-start items-start gap-x-3 pb-3">
              <div className="FHead-logo mt-1.5">
                <span className="bg-white inline-flex w-10 h-10 justify-center  items-center rounded-lg">
                  <PiToolbox className=" text-xl" />
                </span>
              </div>
              <div className="FHead-text ">
                <h4 className="text-xl font-medium capitalize">Sign Up</h4>
                <p className="text-sm text-slate-500 font-normal">
                Your personal data will be used to support your experience throughout this website, to  manage access to your account.
                </p>
              </div>
            </div>
                        {/* Form  */}
                        <form
              id="Sign-Up-Form"
              action=""
              className=""
            >
              {/* User Email */}
              <div className="relative my-3">
                <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                  <label
                    htmlFor="input-signIn-Email"
                    className="text-xl flex items-center justify-center"
                  >
                    <HiOutlineMail />
                  </label>
                </div>
                <input
                  type="email"
                  id="input-signIn-Email"
                  className="border-none p-6 text-sm rounded-lg block w-full ps-12  outline-none"
                  placeholder="Email address"
                  required
                />
              </div>
              {/* Password */}
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                  <label
                    htmlFor="input-signIn-Password"
                    className="text-xl flex items-center justify-center"
                  >
                    <GoKey />
                  </label>
                </div>
                <input
                  type="password"
                  id="input-signIn-Password"
                  className="border-none p-6 text-sm rounded-lg block w-full ps-12  outline-none"
                  placeholder="Password"
                />
              </div>
              <div className="validation-box flex items-center justify-between py-3.5">
                <div className="flex items-center">
                  <a href="/" className="flex items-center text-sm underline">
                  Already Have Account?
                  </a>
                </div>
              </div>
              {/* Button */}
              <div className="w-full">
                <button
                  type="button"
                  className="px-6 py-3.5 text-lg font-medium text-black bg-[#e3e3e3] hover:bg-black hover:text-white transition-all flex items-center justify-center w-full rounded-md text-center capitalize "
                >
                  Register Now
                  <HiArrowLongRight className="text-2xl ms-8 "/> 
                </button> 
              </div>
            </form>
            </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
