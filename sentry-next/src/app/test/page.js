"use client"
import React from 'react'

function page() {
  const FakeApi = () => {
    throw new Error('this Is Error')
  }
  return (
    <div>
      Test Page....
      <button onClick={FakeApi}>
        Click
      </button>
    </div>
  )
}

export default page
