import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export default function CardFour() {
  return (
    <div className="flex p-2 my-2 max-w-2xl flex-col items-center rounded-md border md:flex-row ABcard">
      <div className="h-full w-full md:h-[200px] md:w-[300px]">
        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Laptop"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div>
        <div className="p-4 text-data">
          <h1 className="inline-flex items-center text-lg font-semibold">
            About Macbook <ArrowUpRight className="ml-2 h-4 w-4" />
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
          </p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Macbook
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Apple
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Laptop
            </span>
          </div>
          
        </div>
      </div>
    </div>
  )
}
