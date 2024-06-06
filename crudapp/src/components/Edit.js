import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { CalendarDays } from 'lucide-react';
import { Error_Alert , Multi_Alert , Custom_Alert , Success_Alert} from "./Alerts";
import { Toaster } from "react-hot-toast";
import axios from "axios";



export default function Edit () {

  const naviGateHome = useNavigate()
  
  const {id} = useParams();
  // position 
  const [position , setPosition ] = useState("bottom-right")
  // Data 
  const [employee , setEmployee] = useState({
    image:"https://cdn-icons-png.freepik.com/512/847/847969.png",
    name:"",
    email:"",
    job:"",
    role:"",
    gender:"",
    date:"",
  })

  const getData = async () => {
    await axios.get(`http://localhost:4000/users/${id}`)
    .then((response)=>{
      setEmployee(response.data)
    }).catch((error)=>console.log(error))
  }
  useEffect(() => {
    getData();
  },[])


  const getInputVal = (even) => {
    const {name , value} = even.target;
    // console.log(name , value)
    setEmployee((prevVal)=>{
      return{
        ...prevVal,
        [name]:value
      }
    })
  }

  const HandelSubmit = (even) => {
    even.preventDefault();
    //employee Data 
    const {name ,email ,job , role ,gender , date } = employee ;
    if(name === ""){
      setPosition("bottom-right")
      Error_Alert("Name Fild Is Empty");    
    }else if(!/^[a-zA-Z ]{4,25}$/.test(name)){
      setPosition("bottom-right")
      Multi_Alert(`${name} || "Alexander" \n
      🔘 Be between 4 and 25 characters long. \n 
      🔘 Contain only letters (a-z, A-Z). \n 
      🔘 Not contain numbers, spaces, or special characters. \n
      `)
    }else if(email === ""){
      setPosition("bottom-right")
      Error_Alert("Email Fild Is Empty");    
    }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      setPosition("bottom-right")
      Error_Alert(`" ${email} " is not a valid email address.`);    
    }else if(job === ""){
      setPosition("bottom-right")
      Error_Alert("Select Employee Job");    
    }else if(role === ""){
      setPosition("bottom-right")
      Error_Alert("Select Employee Role");    
    }else if(gender === ""){
      setPosition("bottom-right")
      Error_Alert("Select Employee Gender");    
    }else if(date === ""){
      setPosition("bottom-right")
      Error_Alert("Select Employee Joining Date");    
    }else{
      // Final part 
      // console.log("Edit  Employee",employee);
      axios.put(`http://localhost:4000/users/${id}`,employee).then((employee)=>{
        Custom_Alert(employee.data)     
        setTimeout(() => {
          Success_Alert("Profile Was Edit SuccessFully")
        }, 1000);
        setTimeout(() => {
          naviGateHome('/')
        }, 2000);
        setPosition("center-top")
      }).catch((error)=>{
        console.log(error);
      })
    }
  }

  return (
    <div className=" flex  md:min-h-[550px] mx-auto">
      <Toaster
          position={position}
          reverseOrder={true}
      />
      <div className="min-h-[inherit] w-4/5 md:w-[34rem] mx-auto">
        <div className="flex flex-col justify-center pt-5 items-center">
            <h1 className="text-gray-800 font-bold text-2xl mb-6">
              Edit Employee Profile
            </h1>
          <form onSubmit={HandelSubmit} className="bg-white md:w-4/5 text-base">
            <div className="flex items-center  rounded-md p-2 mb-4">
              <div className="w-20">
                <img src={employee.image} className="inline-block h-14 w-14 rounded-full" alt="avatar" />
              </div>
              <select id="Img"  name="image" value={employee.image} onChange={getInputVal} className="flex w-full  text-center rounded-2xl border border-gray-300 bg-transparent p-3 text-sm focus:outline-blue-600">
                    <option  value="https://cdn-icons-png.freepik.com/512/847/847969.png" >Select a Avatar</option>
                    <optgroup label="Male Avatar" className="text-left">
                       <option value="https://xsgames.co/randomusers/assets/avatars/male/26.jpg" className="text-center">Patrick Shei </option>
                       <option value="https://xsgames.co/randomusers/assets/avatars/male/44.jpg" className="text-center">Harland Qualley</option>
                       <option value="https://xsgames.co/randomusers/assets/avatars/male/64.jpg" className="text-center">Jerald Whalum </option>
                       <option value="https://xsgames.co/randomusers/assets/avatars/male/73.jpg" className="text-center">Tracey Vollkommer</option>
                       <option value="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" className="text-center">Kendall Salls </option>
                       <option value="https://xsgames.co/randomusers/assets/avatars/male/57.jpg" className="text-center">Owen Aubourg</option>
                       <option value="https://xsgames.co/randomusers/assets/avatars/male/52.jpg" className="text-center">Michael Davis</option>
                       <option value="https://xsgames.co/randomusers/assets/avatars/male/28.jpg" className="text-center">David Brown</option>
                       <option value="https://xsgames.co/randomusers/assets/avatars/male/17.jpg" className="text-center">Mark Johnson</option>
                    </optgroup>
                    <optgroup label="Female Avatar" className="text-left">
                       <option value="https://xsgames.co/randomusers/assets/avatars/female/33.jpg" className="text-center">Luanna Waiden </option>
                       <option value="https://xsgames.co/randomusers/assets/avatars/female/39.jpg" className="text-center" >Jadwiga Brasko</option>
                       <option value="https://xsgames.co/randomusers/assets/avatars/female/63.jpg" className="text-center" >Hertha Hathaway</option>
                       <option value="https://xsgames.co/randomusers/assets/avatars/female/20.jpg" className="text-center" >Consuelo Henry</option>
                       <option value="https://xsgames.co/randomusers/assets/avatars/female/37.jpg" className="text-center" >Theresa Matzinger</option>
                       <option value="https://xsgames.co/randomusers/assets/avatars/female/44.jpg" className="text-center" >Sara Lee</option>
                       <option value="https://xsgames.co/randomusers/assets/avatars/female/58.jpg" className="text-center" >Anna Smith</option>
                       <option value="https://xsgames.co/randomusers/assets/avatars/female/31.jpg" className="text-center" >Nicole Vielbig</option>
                    </optgroup>
              </select>
            </div>
            {/*  */}
            <div className="relative flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 absolute ml-2 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-8 w-full border-2 py-2 rounded-2xl flex items-center focus:outline-blue-500"
                type="text"
                name="name"
                value={employee.name}
                onChange={getInputVal}
                placeholder="Full name"
              />
            </div>
            <div className="relative flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 absolute  ml-2 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-8 border-2 flex items-center w-full focus:outline-blue-500 py-2 px-3 rounded-2xl"
                type="text"
                name="email"
                value={employee.email}
                onChange={getInputVal}
                placeholder="Email Address"
              />
            </div>
            {/*  */}
            <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-3 mb-4">
            <div className="flex items-center  w-full">
            <select id="Job" name="job" value={employee.job} onChange={getInputVal} className="flex w-full rounded-2xl border border-gray-300 bg-transparent p-3 text-sm focus:outline-blue-600">
                    <option defaultValue>Select a Job</option>
                    <option value="Software Developer">Software Developer</option>
                    <option value="Database Administrator">Database Administrator</option>
                    <option value="DevOps Engineer">DevOps Engineer</option>
                    <option value="QA Tester">QA Tester</option>
                    <option value="Mobile App Developer">Mobile App Developer</option>
                    <option value="Front-End Developer"> Front-End Developer</option>
                    <option value="Back-End Developer"> Back-End Developer</option>
                    <option value="Full-End Developer"> Full-End Developer</option>
                    <option value="IOS Developer">	IOS Developer</option>
                    <option value="System Administrator">	System Administrator</option>
                    <option value="Network Engineer">	Network Engineer</option>
                    <option value="Cybersecurity Analyst">		Cybersecurity Analyst</option>
                    <option value="DevOps Engineer">		DevOps Engineer</option>
                    <option value="Cloud Architect">		Cloud Architect</option>
                    <option value="Data Scientist">	Data Scientist</option>
                    <option value="UX/UI Designer"> UX/UI Designer</option>
              </select>
              </div>
              <div className="flex items-center w-full">
              <select id="Role" name="role" value={employee.role} onChange={getInputVal} className="flex w-full rounded-2xl border border-gray-300 bg-transparent p-3 text-sm focus:outline-blue-600">
                  <option defaultValue>Choose a Role</option>
                  <option value="CTO">CTO</option>
                  <option value="Developer">Developer</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Engineer">Engineer</option>
                  <option value="Designer">Designer</option>
                  <option value="Tester">Tester</option>
                  <option value="Architect">Architect</option>
                  <option value="Analyst">Analyst</option>
                  <option value="Scientist">Scientist</option>
              </select>
              </div>
            </div>
            <div className="relative flex items-center w-full mb-4">
              <CalendarDays className="h-5 w-5 text-gray-400 absolute ml-2 " />
              <input
                className="pl-8 w-full border-2 py-2 text-gray-400 focus:text-black uppercas<e rounded-2xl flex items-center focus:outline-blue-500"
                type="date"
                name="date"
                value={employee.date}
                onChange={getInputVal}
                />
            </div>
            {/*  */}
            {/* Gender */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <h4 className="w-full flex col-span-2 pl-2 text-gray-400 mb-1">
                Gender
              </h4>
              <label>
                <input
                  type="radio"
                  value="male"
                  onChange={getInputVal}
                  className="peer hidden"
                  checked={employee.gender === "male"}
                  // {employee.gender === "male" ?  checked : ""}
                  name="gender"
                />

                <div className="hover:bg-gray-50 flex items-center justify-start gap-x-2 py-1 px-2 border-2 rounded-2xl cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-gray-400 group-[.peer:checked+&]:text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-400 ">Male</p>
                </div>
              </label>
              <label>
                <input
                  type="radio"
                  value="female"
                  onChange={getInputVal}
                  checked={employee.gender === "female"}
                  className="peer hidden"
                  // {employee.gender === "female" ?  checked : ""}
                  name="gender"
                />

                <div className="hover:bg-gray-50 flex items-center justify-start gap-x-3 px-2 py-1 border-2 rounded-2xl cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-gray-400  group-[.peer:checked+&]:text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-400">Female</p>
                </div>
              </label>               
            </div>
            <div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={()=>naviGateHome('/')}
                className="block w-full bg-gray-700 mt-4 py-2 rounded-2xl text-white font-semibold mb-3"
              >
                Cancel Edit
              </button>
              <button
                type="submit"
                className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-3"
              >
                Save Edit 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


