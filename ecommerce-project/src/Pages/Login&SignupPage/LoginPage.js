import React, { useState } from "react";
import Swal from "sweetalert2";
//Page heading
import PageHeading from "../../Components/Common Components/PageHeading/PageHeading";
// IMAGES
import LoginImg from "../../Assets/login-bg.png";

// ICONS
import { GoLock } from "react-icons/go";
import { GoKey } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

// DOM
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const NavigateHome = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // FUNCTION
  function loginNow(even) {
    even.preventDefault();
    const logEmail = localStorage.getItem("email");
    const LogPass = localStorage.getItem("password");
    if (Email !== logEmail || Password !== LogPass) {
      Swal.fire({
        title: "Error!",
        text: "YOU ARE NOT LOGIN TRY TO Register First ",
        icon: "error",
        confirmButtonText: "Close",
      });
    } else {
      Swal.fire({
        title: "Welcome",
        text: "YOU ARE LOGIN WAS SUSSED",
        icon: "success",
        confirmButtonText: "OK",
      });
      NavigateHome("/");
    }
  }

  return (
    <section>
      <PageHeading goBackLink="Home" pageTitle="Log in" />
      <div className="sm:container mx-auto py-9">
        {/* LOGIN FROM */}
        <div className="Login-Here bg-[#F6F6F6] rounded-lg hover:shadow-md mb-11 lg:mb-0 max-w-[50rem] mx-auto">
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
                  throughout this website, to manage access to your account.
                </p>
              </div>
            </div>
            {/* Form  */}
            <form id="Login-Form" onSubmit={loginNow} className="">
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
                  onChange={(even) => {
                    setEmail(even.target.value);
                  }}
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
                  onChange={(even) => {
                    setPassword(even.target.value);
                  }}
                  className="border-none p-6 text-sm rounded-lg block w-full ps-12  outline-none"
                  placeholder="Password"
                  required
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
                  type="submit"
                  className="px-6 py-3.5 text-lg font-medium text-white bg-[#d51243f5] hover:bg-[#D51243] flex items-center justify-center w-full rounded-md text-center capitalize "
                >
                  Login Now
                  <BsArrowRight className="text-2xl ms-8 " />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
