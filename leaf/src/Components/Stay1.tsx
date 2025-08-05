import React from 'react'
import Stay2 from './Stay2'

function Stay1() {
    return (
        <div className='relative'>
            <div className=' relative text-white h-[550px]'>
                <div className="absolute inset-0  bg-[url('/images/stay1.jpeg')] bg-cover bg-center z-0"></div>
                <div className='absolute inset-0 bg-black/60 z-10'></div>
                <div className='relative z-20 flex flex-wrap flex-col justify-center items-center gap-5 pt-50 md:p-60'>
                    <div>
                        <h1 className='text-5xl text-center md:text-7xl'>Apartments. Villas. Suits.</h1>
                    </div>
                    <div>
                        <p>Stay in the heart of it all with Leaf Rooms</p>
                    </div>
                </div>
            </div>
            <div>
                <Stay2/>
            </div>
        </div>
    )
}

export default Stay1
