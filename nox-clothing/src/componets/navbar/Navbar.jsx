import React from 'react';
import { Cart } from '../index.js';

const Navbar = () => {
  return (
    <div className='flex justify-between w-screen px-[6rem] py-[2rem] bg-black text-white fixed'>
      <div className='flex items-center'>
        <h2 className='font-light font-catamaran text-2xl tracking-widest mx-1 border-r border-amber-200 pr-4 mr-4 cursor-pointer'>NOX CLOTHING</h2>
        <p className='mx-3 font-bold text-base uppercase cursor-pointer'>Womens</p>
        <p className='mx-3 font-bold text-base uppercase cursor-pointer'>Mens</p>
        <p className='mx-3 font-bold text-base uppercase cursor-pointer'>Accessories</p>
        <p className='mx-3 font-bold text-base uppercase cursor-pointer'>Drops</p>
      </div>
      <div className='flex flex-row items-center'>
        <p className='mx-3 font-bold text-base uppercase cursor-pointer'><a href="#about"></a>About Us</p>
        <p className='mx-3 font-bold text-base uppercase cursor-pointer'><a href="#contact"></a>Contact</p>
        <button className='mx-3 font-roboto border-2 w-16 h-8 text-lg border-amber-200 uppercase items-center cursor-pointer'>Blog</button>
        <img src={Cart} alt="Shopping Cart Logo" className='mx-3 cursor-pointer'/>
      </div>
    </div>
  )
}

export default Navbar