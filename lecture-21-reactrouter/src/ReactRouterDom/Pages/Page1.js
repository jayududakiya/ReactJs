import React from 'react'
import { Link } from 'react-router-dom'

function Page1() {
  return (
    <div>
       <h1>Hello this is Page 1 </h1>
       <Link to="/page-2">To page 2</Link>
    </div>
  )
}

export default Page1
