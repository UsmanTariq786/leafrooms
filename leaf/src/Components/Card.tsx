'use client'
import React from 'react'
import Card1 from '../Data/Card'
function Card() {

  return (
    <div className='text-black font-serif'>
      <div className='grid grid-rows-1 place-content-center mt-20'>
        <span className=' text-center text-gray-700'>MORE ThAN JUST STAYS</span><br />
        <h1 className='text-4xl md:text-6xl'>Unforgettable Experiences</h1>
      </div>
      <div className=' relative z-0 mt-20 grid grid-cols-1 mx-10 md:grid md:grid-cols-3 gap-15 md:mx-30'>
        {
          Card1.map((card, index) => (
            <div key={index} className={`border relative z-0 ${index === 1 ? 'h-[460px] my-20 ' : ""}`}>
              <img src={card.image} alt="" /><br />
              <div className={`p-10 ${index === 1 ? 'absolute z-10 bg-transparent text-white bottom-10 ' : ''}`}>
                <span className={` ${index === 1 ? 'text-white' : 'text-gray-500'} `}>{card.subHead}</span><br />
                <br /><h1 className='text-3xl'>{card.head}</h1><br />
                <p className={` ${index === 1 ? 'text-white' : 'text-gray-500'} `}>{card.des}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Card
