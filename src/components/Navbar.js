import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-red-400'>
      <nav className='text-white'>
        <ul className='flex items-baseline p-4 m-4 space-x-10'>
          <li></li>
          <li className='text-2xl text-blue-600'><a className='cursor-pointer mb-2'>TextServices</a></li>
          <li><a className='cursor-pointer'>Home</a></li>
          <li><a className='cursor-pointer'>About</a></li> 
        </ul>  
      </nav>
    </div>
  )
}

