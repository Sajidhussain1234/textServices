import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='bg-red-400'>
      <nav className='text-white'>
        <ul className='flex items-baseline pb-2 space-x-8'>
          <li></li>
          <li className='text-2xl text-blue-600'><Link className='cursor-pointer' to='/'>TextServices</Link></li>
          <li><Link className='cursor-pointer' to='/'>Home</Link></li>
          <li><Link className='cursor-pointer' to='/about'>About</Link></li> 
        </ul>  
      </nav>
    </div>
  )
}

