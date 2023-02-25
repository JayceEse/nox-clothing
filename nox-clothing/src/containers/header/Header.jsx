import React from 'react'
import {ShowMore} from '../../componets/index.js'

const Header = () => {
  return (
    <div 
      className='
        bg-[url("../src/assets/header-bg.png")]
        bg-cover 
        mt-24
        px-[6rem]
        py-96
        '>
      <div className=''>
        <div className='flex flex-col'>
          <h2 className='font-inter text-semibold text-3xl text-white mb-8'>New collection</h2>
          <h1 className='font-robotoCondensed text-medium text-5xl text-white uppercase mb-12'>New Streetwear Outfits</h1>
        </div>
        <div className='flex justify-center'>
          <ShowMore/>
        </div>
      </div>
    </div>
  )
}

export default Header