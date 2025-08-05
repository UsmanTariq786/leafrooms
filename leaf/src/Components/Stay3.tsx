import React, { useEffect } from 'react'
import StayCard from '../Data/Stay3'
import { FaUserFriends, FaBed, FaBath, FaWifi, FaRegSquare } from 'react-icons/fa'
function Stay3() {



    return (
        <div className='text-gray-100'>
            <div className='grid grid-cols-1  md:grid md:grid-cols-2 gap-5 place-items-center mx-20'>
                {
                    StayCard.map((card, index) => (
                        <div key={index} className='relative'>
                            <img src={card.image} alt="" className='w-[550px] h-[380px]' />
                            <div className='text-center absolute bottom-4 text-gray-100 mx-5'>
                                <h1 className='text-3xl mb-5 font-serif'>{card.head}</h1>
                                <div className='grid grid-cols-2 md:grid md:grid-cols-4 place-items-center   gap-3'>
                                    {
                                        card.des.map((item, index) => (
                                            <div key={index} className=''>
                                                <div className='flex gap-1 place-content-baseline text-[14px]'>
                                                    {item.includes('Guests') && <FaUserFriends size={30} />}
                                                    {item.includes('King Bed') && <FaBed size={30} />}
                                                    {item.includes('Bathrooms') && <FaBath size={30} />}
                                                    {item.includes('Free Wifi') && <FaWifi size={30} />}
                                                    {item.includes('m2') && <FaRegSquare size={30} />}
                                                    <span className='mt-1'>{item}</span>
                                                </div>

                                            </div>

                                        ))
                                    }
                                </div>
                            </div>


                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Stay3
