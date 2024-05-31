import React from "react";

// ICON
import { ArrowRight } from "lucide-react";

// DOM
import { useNavigate } from "react-router-dom";

// Alert
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Success_Alert (text) {
  toast.info(text, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
}

function Warning_Alert (text) {
  toast.warn(text, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
}

// FORMIK
import { useFormik } from "formik";

//YUP
import * as Yup from 'yup'

export default function SignUp () {

  const neviGateTable = useNavigate();

  // Form Value
  const [users, setUsers] = React.useState({
    id:"",
    name: "",
    job: "",
    email: "",
    role: "",
    gender:"",
    date:"",
    password:"",
    confirm_password:"",
    image:"https://xsgames.co/randomusers/avatar.php?g=pixel"
  });

  //ADD DATA IN LOCAL STORAGE   
  function Add_userData (data) {
    if (!localStorage.getItem("USERS")) {
        Success_Alert("YOUR ARE REGISTER SUCCESSFULLY")
        localStorage.setItem("USERS", JSON.stringify([data]));
        neviGateTable("/");
    }else {
        const Prev_localData = JSON.parse(localStorage.getItem("USERS"));

        const findUser = Prev_localData.find((x) => {
            if(x.email === data.email){return x}
        });
        if (findUser === undefined) {
          localStorage.setItem("USERS", JSON.stringify([...Prev_localData, data]));
          Success_Alert("YOUR ARE REGISTER SUCCESSFULLY")

          setTimeout(() => {
            neviGateTable("/");
          }, 2000);
          resetForm();
        } else {

          Warning_Alert("User was Already Exist");
          resetForm();
        }
      }
     
  }

 //FORMIK VALIDATION SCHEMA 
 const signUpSchema = Yup.object().shape({
    name:Yup.string().min(3).max(24).required("*This field is required"),
    email:Yup.string().email("Please enter a valid email").required("*This field is required"),
    date:Yup.string().required("*This field is required"),
    job:Yup.string().required("*This field is required"),
    role:Yup.string().required("*This field is required"),
    gender:Yup.string().required("*This field is required"),
    password:Yup.string()
    .required("*This field is required")
    .min(8)
    .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/,"Password should contain at least one uppercase and lowercase character")
    .matches(/\d/, "Password should contain at least one number")
    .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character")
    .max(14),
    confirm_password:Yup.string().required("Enter match passwords ").oneOf([Yup.ref("password"),null], "The passwords do not match")
 })
 
 const ID = parseInt(Math.random()*100);
 
//  USE FORMIK
 const {handleBlur,handleChange,handleSubmit,errors,values,touched,resetForm} = useFormik({
    initialValues:users,
    validationSchema:signUpSchema,
    onSubmit:values => {
        const sub_ID = values.name.slice(0,3);
        values.id = sub_ID+ID;
        setUsers(prevVal => {
            return{
                ...prevVal,
                values
            }
        })
        console.log("VALUE",values);
        // resetForm();
        Add_userData(values)
    }
 })
 
  return (
    <section>
      <ToastContainer/>
      <div className="flex items-center justify-center px-4 py-10  sm:px-6 lg:px-8 ">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <svg
              width="50"
              height="56"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                fill="black"
              />
            </svg>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Already have an account?
            <a
              href="#"
              title=""
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Sign In
            </a>
          </p>

          {/* FORM */}
          <form  onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
              <img
                  className="block h-14 w-14 rounded-full border"
                  src={values.image}
                  alt="Avatar"
              />
               <div className="flex flex-col w-full">
                  <select
                    id="Avatar"
                    name="image"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border border-gray-300 focus:outline-blue-500 text-gray-900 text-sm rounded-md block w-full p-2.5"
                  >
                    <option defaultValue value="https://xsgames.co/randomusers/avatar.php?g=pixel" >Choose a Avatar</option>
                    <optgroup label="Male Avatar">
                    <option value="https://xsgames.co/randomusers/assets/avatars/male/8.jpg">Avatar 1</option>
                    <option value="https://xsgames.co/randomusers/assets/avatars/male/60.jpg">Avatar 2</option>
                    <option value="https://xsgames.co/randomusers/assets/avatars/male/20.jpg">Avatar 3</option>
                    <option value="https://xsgames.co/randomusers/assets/avatars/male/40.jpg">Avatar 4</option>
                    <option value="https://xsgames.co/randomusers/assets/avatars/male/10.jpg">Avatar 5</option>
                    <option value="https://xsgames.co/randomusers/assets/avatars/male/77.jpg">Avatar 6</option>
                    </optgroup>
                    <optgroup label="Female Avatar">
                    <option value="https://xsgames.co/randomusers/assets/avatars/female/75.jpg">Avatar 1</option>
                    <option value="https://xsgames.co/randomusers/assets/avatars/female/65.jpg">Avatar 2</option>
                    <option value="https://xsgames.co/randomusers/assets/avatars/female/22.jpg">Avatar 3</option>
                    <option value="https://xsgames.co/randomusers/assets/avatars/female/76.jpg">Avatar 4</option>
                    <option value="https://xsgames.co/randomusers/assets/avatars/female/11.jpg">Avatar 5</option>
                    <option value="https://xsgames.co/randomusers/assets/avatars/female/74.jpg">Avatar 6</option>
                    </optgroup>
                  </select>
               </div>
              </div>
              <div>
                <label
                  htmlFor="Name"
                  className="text-base font-medium text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300  px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-blue-500"
                    type="text"
                    autoComplete="off"
                    placeholder="Full Name"
                    id="Name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  ></input>
                </div>
                <p className="mt-1 text-xs text-red-500">{errors.name && touched.name? errors.name : ""}</p>
              </div>
              <div>
                <label
                  htmlFor="Email"
                  className="text-base font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300  px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-blue-500"
                    type="email"
                    autoComplete="on"
                    placeholder="Email"
                    id="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                </div>
                <p className="mt-1 text-xs text-red-500">{errors.email && touched.email ? errors.email : ""}</p>
              </div>
              <div>
              <label
                  htmlFor="date"
                  className="text-base font-medium text-gray-900"
                >
                  Select Date
                </label>
                <div className="mt-2">
                  <input
                    className="flex justify-between h-10 w-full uppercase cursor-pointer rounded-md border border-gray-300  px-3 py-2 text-sm  focus:outline-blue-500"
                    type="date"
                    id="date"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                </div>
                <p className="mt-1 text-xs text-red-500">{errors.date && touched.date? errors.date : ""}</p>
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <label
                    htmlFor="Job"
                    className="text-base font-medium text-gray-900 mb-1.5 inline-block"
                  >
                    Job Options
                  </label>
                  <select
                    id="Job"
                    name="job"
                    value={values.job}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border border-gray-300 focus:outline-blue-500 text-gray-900 text-sm rounded-md block w-full p-2.5"
                  >
                    <option defaultValue>Choose a Job</option>
                    <option value="Full-stack Developer">
                      Full-stack Developer
                    </option>
                    <option value="Front-end Developer">
                      Front-end Developer
                    </option>
                    <option value="Back-end Developer">
                      Back-end Developer
                    </option>
                    <option value="IOS Developer">IOS Developer</option>
                    <option value="Android Developer">Android Developer</option>
                    <option value="Flutter Developer">Flutter Developer</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Social Media">Social Media</option>
                  </select>
                  <p className="mt-1 text-xs text-red-500">{errors.job && touched.job? errors.job : ""}</p>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="Role"
                    className="text-base font-medium text-gray-900 mb-1.5 inline-block"
                  >
                    Role Options
                  </label>
                  <select
                    id="Role"
                    name="role"
                    value={values.role}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border border-gray-300 focus:outline-blue-500 text-gray-900 text-sm rounded-md block w-full p-2.5"
                  >
                    <option defaultValue>Choose a Role</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="CTO">CTO</option>
                    <option value="SEO Manager">SEO Manager</option>
                    <option value="Social Media Manager">
                      Social Media Manager
                    </option>
                  </select>
                  <p className="mt-1 text-xs text-red-500">{errors.role && touched.role? errors.role : ""}</p>
                </div>
              </div>
              <div className="flex gap-x-4 flex-wrap justify-between">
                <div className="flex items-center ps-4 border border-gray-200 rounded w-[48%]">
                  <input
                    id="Male"
                    type="radio"
                    value="male"
                    // value={values.gender = "male"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="gender"
                    className="w-4  text-blue-600 bg-gray-100 border-gray-300 "
                  />
                  <label
                    htmlFor="Male"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                  >
                    Male
                  </label>
                </div>
                <div className="flex items-center ps-4 border border-gray-200 rounded w-[48%]">
                  <input
                    id="Female"
                    type="radio"
                    value="female"
                    name="gender"
                    // value={values.gender = "female"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-4  text-blue-600 bg-gray-100 border-gray-300 "
                  />
                  <label
                    htmlFor="Female"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                  >
                    Female
                  </label>
                </div>
                <p className="mt-1 text-xs text-red-500 w-full">{errors.gender && touched.gender? errors.gender : ""}</p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="Password"
                    className="text-base font-medium text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  <p className="mt-1 text-xs text-red-500">{errors.password && touched.password ? errors.password : "" }</p>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="confirm_password"
                    id="confirm_password"
                    name="confirm_password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  <p className="mt-1 text-xs text-red-500 ">{errors.confirm_password && touched.confirm_password ? errors.confirm_password : ""}</p>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
          {/* END */}

          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign up with Google
            </button>
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-[#2563EB]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </span>
              Sign up with Facebook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
