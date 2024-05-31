import React, { useReducer, useState } from 'react'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'
import { SignInSchema } from './SignInSchema'
import {useFormik } from 'formik'

export default function SignIn () {

  // const [showPassword , setShowPassword ]=useState(false)
  const [passwordType , setPasswordType ]=useState("password")
  const [EyeType , setEyeType ]=useState(EyeOff)

  

  function handlePassword () {
    if(passwordType === "password"){
      setPasswordType("text")
      setEyeType(Eye)
    }else{
      setPasswordType("password")
      setEyeType(EyeOff)
    }
  }

  function handleConform_password () {
    if(passwordType === "password"){
      setPasswordType("text")
      setEyeType(Eye)
    }else{
      setPasswordType("password")
      setEyeType(EyeOff)
    }
  }

  const {values , errors , handleBlur , handleChange , handleSubmit,touched,handleReset } = useFormik({
    initialValues:{
      email:"",
      name:"",
      phone:"",
      age:"",
      password:"",
      conform_password:"",
    },
    validationSchema:SignInSchema,
    onSubmit: values => {
      console.log("values",values);
    }
  })

  return (
    <section className="rounded-md bg-black/70 p-2">
      <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2">
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
          <h2 className="text-2xl font-bold leading-tight text-black">Sign in to your account</h2>
          <p className="mt-2text-sm text-gray-600 ">
            Don&apos;t have an account?{' '}
            <a
              href="#"
              title=""
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Create a free account
            </a>
          </p>
          <form action="#" method="POST" onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Name
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Name"
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                </div>
                <p className="mt-1 text-sm capitalize text-red-500">{touched.name && errors.name ? errors.name : null}</p>
              </div>
              <div>
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                </div>
                <p className="mt-1 text-sm capitalize text-red-500">{touched.email && errors.email ? errors.email : null}</p>
              </div>
              <div>
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Age{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="Age"
                    name='age'
                    value={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                </div>
                <p className="mt-1 text-sm capitalize text-red-500">{touched.age && errors.age ? errors.age : null}</p>
              </div>
              <div>
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Phone{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="tel"
                    placeholder="Phone"
                    name='phone'
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                </div>
                <p className="mt-1 text-sm capitalize text-red-500">{touched.phone && errors.phone ? errors.phone : null}</p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Password{' '}
                  </label>
                </div>
                <div className="mt-2 flex relative">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type={passwordType}
                    placeholder="Password"
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  <button type='button' className='h-full w-6 absolute right-1 cursor-pointer' onClick={()=>handlePassword()}>
                    <EyeType />
                  </button>
                </div>
                <p className="mt-1 text-sm capitalize text-red-500">{touched.password && errors.password ? errors.password : null}</p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Conform Password{' '}
                  </label>
                </div>
                <div className="mt-2  flex relative">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type={passwordType}
                    placeholder="Conform Password"
                    name='conform_password'
                    value={values.conform_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                    <button type='button' className='h-full w-6 absolute right-1 cursor-pointer' onClick={()=>handleConform_password()}>
                    <EyeType />
                  </button>
                </div>
                <p className="mt-1 text-sm capitalize text-red-500">{touched.conform_password && errors.conform_password ? errors.conform_password : null}</p>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Get started <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
