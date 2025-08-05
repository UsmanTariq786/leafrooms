import React from 'react'
import { FaTv, FaBuilding, FaChair, FaHotel, FaCoffee, FaWifi } from 'react-icons/fa'
function Home2() {
  return (
    <div className='text-black text-center font-serif m-10 mt-20 mb-20'>
      <div className='text-gray-700'>
        <span>Premium Amenities</span>
      </div> <br />
      <div className='text-4xl'>
        <p> We've crafted our accommodations to ensure <br /> comfortable and seamless stays</p>
      </div> <br />
      <div className='flex flex-wrap gap-20 justify-center items-center text-gray-700'>
        <div>
          <FaBuilding size={50} /> <br />
          <p className=''>Luxury Spaces</p>
        </div>
        <div>
          <FaChair size={50} /> <br />
          <p>Fully Furnished</p>
        </div>
        <div>
          <FaHotel size={50} /> <br />
          <p>Family friendly</p>
        </div>
        <div>
          <FaTv size={50} /> <br /> 
          <p>Smart TV & <br /> Entertainment</p>
        </div>
        <div>
          <FaCoffee size={50} /><br /> 
          <p>Kitchen</p>
        </div>
        <div>
          <FaWifi size={70} /> <br />
          <p>Wifi Internet</p>
        </div>
      </div>
    </div>
  )
}

export default Home2
