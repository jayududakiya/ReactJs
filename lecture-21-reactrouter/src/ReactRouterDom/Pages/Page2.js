import React from 'react'
import { Link } from 'react-router-dom' 

function Page2() {
  return (
    <div>
      <h1>Hello this is Page 2 </h1>
      <Link to="/page-3">TO page 3</Link>
    </div>
  )
}

export default Page2
