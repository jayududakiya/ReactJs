import React,{useRef} from 'react'

function URef() {
  const InputText = useRef("");

  const Cheng = () =>{
    InputText.current.style.color = "white";
    InputText.current.classList.add("text-center");
    InputText.current.classList.add("bg-blue-400");
    InputText.current.setAttribute("type", "password");
  }
  return (
    <div className="bg-slate-600 h-[100vh] flex flex-wrap flex-col items-center justify-center "> 
      <h1 className='text-white font-bold font-sans my-4 text-3xl'>UseRefs Example </h1>
      <input type="text" className='my-3 block p-2 rounded-3xl' placeholder="Enter Text" ref={InputText}/>
      <button className='border-[2px] px-20 py-2 text-white rounded-3xl' onClick={Cheng}>Click</button>
    </div>
  );
}

export default URef
