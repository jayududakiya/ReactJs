import React from 'react'

function Post ({post}) {
  return (
    <div className='flex flex-wrap items-center justify-around mx-auto' >
      {post.map((posts)=>{
        return(
          <div key={posts.id} className='text-center w-[22rem] border mb-3 flex flex-col gap-2 py-3'>
             <h1 className='font-bold'>{posts.id}</h1>
             <h1 className='font-bold'>{posts.title}</h1>
             <p>{posts.body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Post