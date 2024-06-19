import React from 'react'

function Pagination({totalPost,postPerPage,setCurrentPage,currentPage}) {
    let Pages = []
    for (let i = 1; i<= Math.ceil(totalPost/postPerPage) ; i++) {
        Pages.push(i)
    }
  return (
    <div className='mx-auto flex justify-center'>
      <button>
        priv
      </button>
      {Pages.map( (page,ind) => {
        return(
             <button 
             key={ind}
             className={(page === currentPage) ? 'bg-black text-white px-4 py-2 border mx-2 transition-all' : 'px-4 py-2 border mx-2 transition-all' }
             onClick={()=>setCurrentPage(page)}
             >
                {page}
             </button>
        )
      })}
    <button>
        nEXT
    </button>
    </div>
  )
}

export default Pagination
