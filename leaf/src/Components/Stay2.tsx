'use client'
import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
function Stay2() {
    const [showdrop, setShowdrop] = useState(false);
    const [showdrop1, setShowdrop1] = useState(false);
    const [room, setRoom] = useState(1)
    const [adults, setAdults] = useState(1);
    const [Children, setChildren] = useState(0);
    
    const toggledown = () => 
        {
            console.log('clicked')
            setShowdrop(!showdrop);
        }
    const toggledown1 = () => 
        {
            console.log('clicked')
            setShowdrop1(!showdrop1);
        }
    const handleChange = (type: 'adults' | 'child' | 'room', action: 'inc' | 'dec') => {

        if (type === 'adults') {
            setAdults(prev => Math.max(1, action === 'inc' ? prev + 1 : prev - 1))
        }
        else if (type === 'room') {
            setRoom(prev => Math.max(1, action === 'inc' ? prev + 1 : prev - 1))
        }
        else {
            setChildren(prev => Math.max(0, action === 'inc' ? prev + 1 : prev - 1))
        }
    }

    return (
        <div>
            <div className='absolute z-10 top-125   grid grid-cols-1 gap-5 ml-25 place-content-center  md:grid md:grid-cols-5 md:gap-0 md:ml-1  p-4    bg-green-500  text-black'>

                <div className=' flex flex-wrap gap-7 border-yellow-700 border p-3 h-[50px]'>
                    <label htmlFor="">Check In</label>
                    <input type="date" name="" defaultValue="2025-07-28"
                        className='appearance-none outline-none bg-transparent '
                    />
                </div>


                <div className=' flex flex-wrap gap-7 border-yellow-700 border  p-3 h-[50px]'>
                    <p>Check Out</p>
                    <input type="date" name="" id="date" defaultValue="2025-07-28"
                        className='appearance-none outline-none bg-transparent'
                    />

                </div>

                <div className='flex justify-center items-center gap-9 border-yellow-700 border h-[50px]' onClick={toggledown1}>
                    <label htmlFor="">Rooms </label>
                    <p>{room} Room</p>
                    {showdrop1 ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                </div>

                <div className='flex flex-wrap z-20 justify-center items-center gap-4 cursor-pointer border-yellow-700 border h-[50px]' onClick={toggledown}>
                    <label>Guests</label>
                    <p>{adults} Adult, {Children} Child</p>
                    <button onClick={toggledown}
                    className='relative z-50'>
                        {showdrop ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                    </button>
                </div>


                <div className='flex justify-center items-center bg-amber-500 text-white border-yellow-700 border h-[50px]'>
                    <button onClick={toggledown}>Check Availability</button>
                </div>

            </div>
            {showdrop && (
                <div className="absolute left-175 mt-5 w-70 text-black bg-white shadow-lg border  rounded z-30">
                    <div className="p-4">
                        <div className="flex justify-between mb-2">
                            <span>Adults</span>
                            <div className='flex gap-5'>
                                <button onClick={() => handleChange('adults', 'dec')}>-</button>
                                <span>{adults}</span>
                                <button onClick={() => handleChange('adults', 'inc')}>+</button>
                            </div>

                        </div>
                        <div className="flex justify-between">
                            <span>Children</span>
                            <div className='flex gap-5'>
                                <button onClick={() => handleChange('child', 'dec')}>-</button>
                                <span>{Children}</span>
                                <button onClick={() => handleChange('child', 'inc')}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {
                showdrop1 && (
                    <div className='absoulte left-160 mt-5 text-black bg-white rounded z-30'>
                        <div className='flex justify-center'>
                            <span>Rooms</span>
                            <div className='flex gap-2'>
                                <button>-</button>
                                <span>{room}</span>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Stay2
