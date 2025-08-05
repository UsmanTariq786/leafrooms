import React from 'react'
import StayCard from '../Data/Stay4'
import { FaBath, FaBuilding, FaTree, FaGlassCheers, FaHandHolding, FaUtensils } from 'react-icons/fa'
function Stay4() {
    return (
        <div className='grid grid-cols-1 md:grid md:grid-cols-3 gap-5 mt-40 bg-gray-50 font-serif'>

            {
                StayCard.map((item, index) => (

                    <div key={index} className='border-l flex gap-5 p-5 mx-20 my-15 '>
                        <div>
                            {item.head.includes("Premium Amenities") && <FaBath size={40} className='mt-5 md:mt-10'/>}
                            {item.head.includes("Flexible Booking") && <FaBuilding size={40} className='mt-5 md:mt-10'/>}
                            {item.head.includes("Privacy") && <FaGlassCheers size={40} className='mt-5 md:mt-10'/>}
                            {item.head.includes("Modern Design") && <FaHandHolding size={40} className='mt-5 md:mt-10'/>}
                            {item.head.includes("Eco-Friendly") && <FaUtensils size={40} className='mt-5 md:mt-10'/>}
                            {item.head.includes("Secure Check-In") && <FaTree size={40} className='mt-5 md:mt-10'/>}
                        </div>
                        <div>
                            <h1 className='text-2xl'>{item.head}</h1>
                            <p>{item.des}</p>
                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default Stay4
