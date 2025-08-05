import React from 'react'
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa'
function Contact1() {
    return (
        <div className='text-black grid grid-cols-1 md:grid md:grid-cols-2 font-serif'>
            <div className='flex flex-wrap flex-col justify-center mx-20  my-60'>
                <div className='grid gap-5 text-gray-700'>
                    <div>
                        <h1 className='text-4xl'>Leaf Rooms Private Limited</h1>
                    </div>
                    <div>
                        <p>21 Block J3, Phase 2, Johar Town <br /> Lahore, Pakistan</p>
                    </div>
                </div>

                <div className="my-20 w-[80%] h-[1px] bg-black"></div>

                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-3xl'>Contact</h1>
                        <span>For business enquiries & bookings:</span>
                    </div>

                    <div className='flex flex-col'>
                        <span>Phone: +92 322 4947070</span>
                        <span>Email: hello@leafrooms.com</span>
                    </div>


                    <div className='flex gap-2'>
                        <div className='bg-blue-900 text-white p-2 rounded-4xl'><FaFacebook size={40}/></div>
                        <div className='bg-black text-white p-2 rounded-4xl'><FaInstagram size={40} /></div>
                        <div className='bg-green-700 text-white p-2 rounded-4xl'><FaWhatsapp size={40} /></div>
                    </div>

                </div>

            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <div className='text-5xl'>
                    <h1>Let's Start A <br /> Converstion</h1>
                </div>
                <div>
                    <span>Your name</span><br />
                    <input type="text" name="" id="" className='border-gray-300 border pl-3  h-[50px] w-[400px] focus:outline-none focus:border-amber-300'  />
                </div>
                <div>
                    <span>Your email</span><br />
                    <input type="email" name="" id="" className='border-gray-300 border pl-3 h-[50px] w-[400px] focus:outline-none focus:border-amber-300'/>
                </div>
                <div>
                    <span>Subject</span><br />
                    <input type="text" name="" id="" className='border-gray-300 border pl-3  h-[50px] w-[400px] focus:outline-none focus:border-amber-300'/>
                </div>
                <div>
                    <span>Your message (optional)</span><br />
                    <textarea name="" id="" className='border-gray-300 border pl-3 pt-1 h-[150px] w-[400px] focus:outline-none focus:border-amber-300'></textarea>
                </div>
                <div className=' '>
                    <button className='bg-orange-700 h-[50px] w-[400px] text-white'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact1
