'use client'

import React, { useEffect, useRef, useState } from 'react'

import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function NavBar() {
    const [showdrop, setShowdrop] = useState(false);
    const [adults, setAdults] = useState(1);
    const [Children, setChildren] = useState(0);
    const dropdown = useRef<HTMLDivElement>(null);
    const dateRef = useRef<HTMLInputElement>(null)
    const toggledown = () => setShowdrop(!showdrop);

    const handleChange = (type: 'adults' | 'child', action: 'inc' | 'dec') => {

        if (type === 'adults') {
            setAdults(prev => Math.max(1, action === 'inc' ? prev + 1 : prev - 1))
        }
        else {
            setChildren(prev => Math.max(0, action === 'inc' ? prev + 1 : prev - 1))
        }
    }

    useEffect(() => {
        const handleclickout = (event: MouseEvent) => {
            if (dropdown.current && !dropdown.current.contains(event.target as Node)) {
                setShowdrop(false);
            }

        }
        document.addEventListener('mousedown', handleclickout);

        return () => {
            document.removeEventListener('mousedown', handleclickout)
        }
    }, [])

    const handleClick = () => {
        if (dateRef.current) {
            dateRef.current.focus()
        }
    }

    return (
        <div className="relative h-[550px]  " ref={dropdown}>

            <div className="absolute inset-0 bg-[url('/images/leaf1.webp')] bg-cover bg-center z-0"></div>


            <div className="absolute inset-0 bg-black/40 z-10"></div>


            <div className="h-[550px] relative z-20 grid grid-cols-1 place-content-center ml-25 md:ml-80 font-serif" >


                <div className=''>
                    <p className='text-5xl md:text-8xl  pt-20'>Stay Your Way</p>
                </div><br />
                <div className='ml-15 md:hidden'>
                    <button className='bg-amber-400 p-5'>
                        Book Your Stay
                    </button>
                </div>
            </div>

            <div className='hidden absolute z-30 top-110 ml-25 md:grid grid-cols-4  gap-4 p-8 m-12 bg-green-500  text-black'>

                <div className=' flex flex-wrap gap-7 border-yellow-700 border p-3 '
                    onClick={handleClick}
                >
                    <label htmlFor="check">Check In</label>
                    <input type="date" id='check' name="" defaultValue="2025-07-28"
                        className='cursor-pointer'
                        ref={dateRef}
                        onChange={()=>console.log('clicked')}
                    />
                </div>

                <div className=' flex flex-wrap gap-7 border-yellow-700 border  p-3'>
                    <p>Check Out</p>
                    <input type="date" name="" id="date" defaultValue="2025-07-28"
                        className='appearance-none outline-none bg-transparent'
                    />

                </div>


                <div className=' flex flex-wrap justify-center items-center gap-4 cursor-pointer border-yellow-700 border' onClick={toggledown}>
                    <label>Guests</label>
                    <p>{adults} Adult, {Children} Child</p>
                    {showdrop ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                </div>

                <div className='flex justify-center items-center cursor-pointer bg-amber-500 text-white border-yellow-700 border'>
                    <button>Check Availability</button>
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


        </div>

    )
}

export default NavBar



