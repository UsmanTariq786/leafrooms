import React from 'react'

function page() {
  return (
    <div className='relative text-black ' >
      <div className='relative h-[600px] font-serif'>
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/about1.jpeg')] bg-cover bg-center z-0"></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Centered Text */}
        <div className='relative z-20 flex justify-center items-center h-full'>
          <h1 className='text-white text-7xl font-bold'>About</h1>
        </div>
      </div>

      <div className='flex flex-wrap justify-center items-center mt-30'>
        <h1 className='text-3xl md:text-6xl font-bold'>We are Leaf Rooms.</h1>
        <div className='flex flex-wrap flex-col justify-center items-center gap-5 text-gray-700 mx-5 md:mx-50 mt-10'>
          <div>Leaf Rooms is a modern platform redefining short-stay accommodations by connecting travelers with distinctive spaces across diverse locations. With a commitment to comfort, style, and local flavor, Leaf Rooms offers more than just a place to rest – it provides an experience crafted to feel like home. Whether you’re traveling for work, vacation, or a quick weekend getaway, Leaf Rooms offers a curated selection of stays tailored to fit your needs and style.</div>
          <div>For both travelers and hosts, Leaf Rooms provides a seamless experience with user-friendly booking, secure transactions, and dedicated support. Hosts can easily list their properties to earn extra income, sharing their unique spaces with guests from around the world.</div>
          <div>Our mission is simple: to make travel easy, authentic, and inspiring. We carefully curate each listing to match diverse needs and styles, ensuring that our guests can find the perfect space for any adventure. For those seeking local charm, hidden gems, or a place to unwind, Leaf Rooms is here to make every journey feel special.</div>
        </div>
      </div>
      
    </div>
  )
}

export default page
