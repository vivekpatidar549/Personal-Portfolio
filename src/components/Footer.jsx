import React from 'react'
import ParticlesComponent from '../config/particles';
import '../index.css'

export default function Footer() {
  return (
    <div className='bg-gradient-to-b from-gray-800 to-black w-full py-4 '>
       <div  id="particles">
        <ParticlesComponent />
      </div>
<p className='text-white text-center font-bold z-10'> © {new Date().getFullYear()} Vivek Patidar. All Right Reserved</p>
    </div>
  )
}
