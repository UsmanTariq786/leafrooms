'use client'
import React from 'react'
import SlideBar from './SlideBar'
import { FaChevronCircleUp } from 'react-icons/fa'
function Home1() {
  return (
    <div className='bg-gray-200 mb-10 p-10'>
      <div className="h-30 " />
      <div className="text-black text-center font-serif">
        <div className='flex flex-wrap justify-between items-center'>
          <p className='text-center flex-1'>Elevate your stay, inspire your journey</p>

          

        </div>

        <br />
        <h1 className="text-5xl">
          Experience world-class <br /> accommodation services
        </h1>
        <br />
        <p>
          Explore our collection of handpicked spaces that offer more than just a place to stay. From cozy apartments
          <br />
          in the city center to tranquil retreats in nature, find the perfect setting for your next stay.
        </p>
      </div>
      <SlideBar />
      <div className='flex flex-wrap justify-center items-center'>
        <button className='bg-green-500 p-4'>Explore our spaces</button>
      </div>
    </div>
  )
}

export default Home1
