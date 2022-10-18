import React from 'react'
import { useState } from 'react'

export default function TextForm() {
const {text, setText}=useState();

const handleUpOnClick=()=>{
  setText(text.toUpperCase());
}




  return (
    <div className='container w-2/3 mx-auto'>
      <h2 className='text-xl font-bold'>Text Conversion Services: </h2>
      <textarea name="textarea" id="text" cols="120" rows="8" value={text} placeholder='Enter text here' className='border'></textarea>
      <div className='space-x-2'>
      <button className='bg-blue-500 border-2 border-black rounded-lg' >Convert to Lowercase</button>
      <button className='bg-blue-500 border-2 border-black rounded-lg'>Convert to Upercas</button>
      <button className='bg-blue-500 border-2 border-black rounded-lg'>Remove spaces</button>
      <button className='bg-blue-500 border-2 border-black rounded-lg'>Clear Text</button>
      </div>
      <div className='bg-red-400'>
      <h2 className='text-xl font-bold'>Text summary </h2>
      <h2 className='text-xl font-bold'>Preview</h2>
      


      </div>
      
    </div>
  )
}

