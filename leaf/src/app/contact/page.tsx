import Contact1 from '@/Components/Contact1'
import React from 'react'

function page() {
  return (
    <div>
      <div>
        <div className='relative h-[600px] font-serif'>
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/images/about1.jpeg')] bg-cover bg-center z-0"></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>

          {/* Centered Text */}
          <div className='relative z-20 flex flex-col gap-10 justify-center items-center h-full'>
            <span>WE  HERE  TO  SLEEP</span>
            <h1 className='text-white text-7xl font-bold'>Get in touch</h1>
          </div>
        </div>
      </div>
      <Contact1/>
    </div>
  )
}

export default page
