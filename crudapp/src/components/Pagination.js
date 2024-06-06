import React from "react";

export default function Pagination({totalUsers,parPageData,setCurrentPages,currentPages}) {

  let pages = []
  
  for(let i  = 1 ; i <= Math.ceil(totalUsers/parPageData) ; i++){
    pages.push(i)
  }

  function Previous () {
    if(currentPages <= 1){
      setCurrentPages(1)
    }else{
      setCurrentPages(currentPages -= 1)
    }
  }

  function Next () {
    if(currentPages >= pages.length){
      setCurrentPages(pages.length)
    }else{
      setCurrentPages(currentPages += 1)
    }
  }
  
  return (
    <div className="mx-auto my-5">
      <div className="flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={()=>Previous()}
          className="mx-1 text-sm font-semibold text-gray-900"
        >
          &larr; Previous
        </button>

        {pages.map((page,ind)=>{
          return(
              <button
                key={ind}
                type="button"
                onClick={()=>setCurrentPages(page)}
                className={`mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-95 transition-all ${currentPages === page ? 'bg-black text-white' : ''}`}
              >
                {page}
              </button>
          )
        })}
        
        <button 
          type="button"
          onClick={()=>Next()}
          className="mx-2 text-sm font-semibold text-gray-900">
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
