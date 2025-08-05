import React from 'react'
import { FaPaperPlane, FaFacebook, FaInstagram } from 'react-icons/fa'
function Footer() {
    return (
        <div className='text-black mt-20 font-serif'>
            <div className="relative bg-[url('/images/footer1.jpeg')]  bg-cover bg-center  ">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className='relative grid grid-cols-1 gap-5 md:grid md:grid-cols-2 justify-center items-center  mx-20 pt-20 pb-20 text-white '>
                    <div>
                        <span className='ml-1'>Stay Tuned with Leaf Rooms</span>
                        <p className='text-3xl md:text-5xl mt-3'>Sign up for our newsletter to receive our news, deals and special offers.</p>
                    </div>
                    <div className='relative'>
                        <input type="email" name="" id="" placeholder='Enter Your email' className='appearance-none border-b w-[95%] focus:outline-none' />
                        <div className='absolute flex right-10 top-1 mb-2'>
                            <span className=''>Subscribe</span>
                            <FaPaperPlane size={20} className='ml-5' />
                        </div>
                        <br /><div className='flex flex-wrap'>
                            <input type="checkbox" name="" id="" className='' />
                            <p className='ml-1'>I agree the Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black">
                 
                <div className="grid grid-cols-1 md:grid-cols-4 text-center text-white h-auto border border-gray-300">
                    <div className="flex flex-col justify-center border border-gray-400 p-4 h-[130px]">
                        <span className="text-gray-400">ADDRESS</span>
                        <p>21 Block J3 Johar Town, Lahore</p>
                    </div>
                    <div className="flex flex-col justify-center border border-gray-400 p-4 h-[130px]">
                        <span className="text-gray-400">Phone</span>
                        <p>+92 322 4947070</p>
                    </div>
                    <div className="flex flex-col justify-center border border-gray-400 p-4 h-[130px]">
                        <span className="text-gray-400">EMAIL</span>
                        <p>hello@leafrooms.com</p>
                    </div>
                    <div className="flex flex-col justify-center border border-gray-400 p-4 h-[130px]">
                        <span className="text-gray-400">Social</span>
                        <div className="flex justify-center space-x-2 mt-2">
                            <FaFacebook size={30} />
                            <FaInstagram size={30} />
                        </div>
                    </div>
                </div>

                 
                <div className="grid grid-cols-1 gap-5 p-5 border md:grid-cols-2 text-white">
                    <div className="text-center md:text-left md:pl-10">
                        © 2025 Leaf Rooms. All rights reserved.
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-end gap-5 md:pr-10">
                        <div>PRIVACY</div>
                        <div>TERMS OF USE</div>
                        <div>POLICY</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
