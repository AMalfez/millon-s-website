"use client"
import React from 'react'
import "./Hero.css"
import { Search } from 'react-feather'
function Hero() {
  return (
    <div className='w-full h-screen'>
        <div className={`relative z-0 hero_container`}>
            <div className='hero_text flex flex-col items-center w-full'>
                <p className='text-4xl lg:text-5xl tracking-wide w-10/12 lg:w-7/12 font-[600] '>Looking for a new adventure this weekend in Orange County, California?</p>
                <div className='bg-white rounded-md py-1 flex justify-between px-2 gap-2 mt-5 w-3/4 md:w-2/4'>
                    <div className='flex gap-2 w-full items-center'>
                        <Search className='text-gray-400 text-sm'/>
                        <input type='text' className='text-black outline-none border-none' placeholder='Search for adventures...'/>
                    </div>
                    <button className='bg-orange-500 transition-all duration-75 ease-in px-2 py-1 rounded-md hover:bg-orange-600'>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero