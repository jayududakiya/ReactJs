import React, { useContext } from "react";
import Heading from "./Heading";
import { Store } from "../App";

function LoginForm() {

  const {setUserStatus} = useContext(Store)
  // console.log(setUserStatus);

  function HandleSubmit (even) {
    even.preventDefault()
    if(even.target.email.value){
      setUserStatus(true)
      even.target.email.value = ""
    }else{
      alert('enter Valid Input ')
      setUserStatus(false)
    }
  }

  return (
    <div>
      <Heading name={"LoginForm"} />
      <form onSubmit={HandleSubmit}>
      <div className="max-w-sm mx-auto mt-4">
        <label
          htmlFor="UserEmail"
          className="block text-xs font-medium text-gray-700"
        >
          {" "}
          Email{" "}
        </label>

        <input
          type="email"
          id="UserEmail"
          name='email'
          placeholder="john@rhcp.com"
          className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-1.5"
        />
      </div>
      <button
      type="submit"
      className="rounded-full bg-black px-3 py-2 mx-auto block mt-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      LogIn
    </button>
    </form>
    </div>
  );
}

export default LoginForm;
