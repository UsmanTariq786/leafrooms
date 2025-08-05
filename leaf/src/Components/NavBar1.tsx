'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaBars, FaFacebook, FaInstagram, FaTimes } from 'react-icons/fa'
import { set } from 'date-fns'
function NavBar1() {
    const [open, isopen] = useState(false)
    const [checkborderhome, setBorderhome] = useState(false)
    const [checkborderstay, setBorderstay] = useState(false)
    const [checkborderabout, setBorderabout] = useState(false)
    const [checkbordercontact, setBordercontact] = useState(false)

    const closeTab = () => {
        isopen(false)
    }

    const handleBorder = (type: string) => {
        if (type === 'home') {
            setBorderhome(true);
            setBorderabout(false)
            setBorderstay(false)
            setBordercontact(false)
        }
        else if (type === 'stay') {
            setBorderstay(true);
            setBorderhome(false);
            setBorderabout(false)
            setBordercontact(false)
        }
        else if (type === 'about') {
            setBorderabout(true)
            setBorderstay(false)
            setBordercontact(false)
            setBorderhome(false);
        }
        else if (type === 'contact') {
            setBordercontact(true)
            setBorderstay(false);
            setBorderhome(false);
            setBorderabout(false)
        }
    }
    return (
        <div className=' fixed inset-0 z-50 text-white bg-transparent'>
            <nav className="hidden border-b-1 border-gray-400 md:grid grid-cols-3 p-5 pt-5">
                <div className='   font-bold flex gap-6 ml-15 mt-8 text-[13px]'>
                    <Link href="/" onClick={() => handleBorder('home')} className={` border-b ${checkborderhome === true ? '' : 'border-transparent'} hover:border-white h-[17px]`}>HOME</Link>
                    <Link href="/stays" onClick={() => handleBorder('stay')} className={`border-b ${checkborderstay === true ? '' : 'border-transparent'}  hover:border-white h-[17px]`}>STAY</Link>
                    <Link href="/about" onClick={() => handleBorder('about')} className={`border-b ${checkborderabout === true ? '' : 'border-transparent'}    hover:border-white h-[17px]`}>ABOUT</Link>
                    <Link href="/contact" onClick={() => handleBorder('contact')} className={`border-b ${checkbordercontact === true ? '' : 'border-transparent'}    hover:border-white h-[17px]`}>CONTACT</Link>
                </div>
                <div className='ml-30 mt-5'>
                    <Image src="/images/leaf2.png" alt='' width={200} height={200} />
                </div>
                <div className='flex flex-wrap gap-9 ml-22  mt-7  '>
                    <p className='font-semibold'>Tel: +92 348 6758450</p>
                    <button className='border border-white text-[15px]  p-3'>Book Now</button>
                </div>
            </nav>
            <div className='md:hidden border-b grid grid-cols-3 place-content-center h-[100px] '>
                <div className='cursor-pointer ml-5'>
                    <button onClick={() => isopen(!open)} className="text-white cursor-pointer hover:text-gray-700 transition duration-200">
                        <FaBars size={30}
                        />
                    </button>
                </div>
                <div>
                    <Image src="/images/leaf2.png" alt='' width={200} height={200} />
                </div>

            </div>
            {
                open && (
                    <div className='absolute inset-0 z-50 bg-green-900 grid grid-cols-1 ml-30 py-20 px-10 text-2xl font-serif gap-3 md:hidden'>
                        <div className='text-right'>
                            <button onClick={closeTab}>
                                <FaTimes size={20} className='cursor-pointer' />
                            </button>
                        </div>
                        <div>
                            <Link href="/" className='hover:text-gray-400'>Home</Link>
                        </div>
                        <div>
                            <Link href="/stays" className='hover:text-gray-400'>STAY</Link>
                        </div>
                        <div>
                            <Link href="/about" className='hover:text-gray-400'>ABOUT</Link>
                        </div>
                        <div>
                            <Link href="/contact" className='hover:text-gray-400'>CONTACT</Link>
                        </div>
                        <div className='flex gap-5 mt-10'>
                            <div className='text-white bg-green-900'>
                                <FaFacebook size={20} />
                            </div>
                            <div>
                                <FaInstagram size={20} />
                            </div>
                        </div>
                        <div className='mt-10'>
                            <p className='text-sm'>
                                Copyright © 2024 Leaf Rooms.
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default NavBar1
