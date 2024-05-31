import React from 'react'
import toast from 'react-hot-toast';

export function Error_Alert(text) {
  return (
    toast.error(text)
  )
}

export function Success_Alert(text) {
  return (
    toast.success(text)
  )
}

export function Multi_Alert(text) {
  return (
    toast(
      text,
      {
        duration: 2000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      )
    )
  }
  


export function Custom_Alert (employee) {
    // console.log(employee);
    toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src={employee.image}
                  alt={employee.name}
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {employee.name}
                  <span className='flex items-center justify-start text-sm font-light'>
                    {employee.email}
                  </span>
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {employee.date}
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ))
}

