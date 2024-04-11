import React from 'react'

const HeaderImg = 'https://source.unsplash.com/random'

function Header() {
  return (
    <div className='border mx-auto my-6 h-[100vh] flex flex-col items-center overflow-hidden relative'>
        <nav className='text-blue-800 flex flex-wrap items-center justify-between w-[97%] m-auto py-3 absolute top-0 left-0 right-0'>
            <h1 className='mx-2 text-2xl font-mono'>
                LOGO.
            </h1>

            <ul className='flex flex-wrap items-center'>
                <li className='mx-2 text-2xl font-mono'>Home</li>
                <li className='mx-2 text-2xl font-mono '>About</li>
                <li className='mx-2 text-2xl font-mono '>Contact</li>
            </ul>
        </nav>
        <img src={HeaderImg} className='block min-h-[inherit] w-full object-cover' alt='Header-image' />
    </div>
  )
}

export default Header
