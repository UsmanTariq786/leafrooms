import React from 'react'
import { FaPhoneAlt, FaLine, FaEnvelope } from "react-icons/fa"

function Host() {
    return (
        <div className='text-black font-serif'>
            <div className='text-center mt-20 space-y-3'>
                <span>BECOME A HOST </span><br /> <br />
                <h1 className='text-6xl space-y-2'>Leaf Rooms provides an <br /> opportunity to share your space <br /> with travelers across Pakistan.</h1> <br />
                <p className='text-gray-600'>Share your space and make the most of what you already have. Whether it’s an urban apartment or <br /> a cozy countryside cabin, Leaf Rooms hosting is a hassle-free way to earn extra revenue on your <br /> terms.</p>
            </div>
            <div className='grid grid-cols-1 gap-5 place-content-center md:flex items-center justify-center font-semibold mt-5 text-gray-700'>
                <div className='flex ml-40'>
                    <FaPhoneAlt size={30} className='mt-3  text-gray-700 rounded-2xl' />
                    <p className='ml-2'><span className='text-sky-400'> LET'S TALK </span> <br /> +92 322 4947070 </p> <br />
                </div>
                <div className=' md:w-px md:h-16 md:bg-gray-600 md:ml-15'></div>
                <div className='flex ml-40 md:ml-10'>
                    <FaEnvelope size={30} className='mt-3 text-gray-700 ' />
                    <p className='ml-2'><span className='text-sky-400'>EMAL US </span> <br /> hello@leafrooms.com</p>
                </div>
            </div>
        </div>
    )
}

export default Host
