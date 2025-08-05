import React from 'react'

function Home3() {
    return (
        <div className=' relative text-white font-serif'>
            <div className="absolute inset-0 bg-[url('/images/home2.jpeg')] bg-cover bg-center z-0"></div>
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <div className='relative z-10 top-30 left-5 md:left-20 grid grid-rows-1 place-content-center'>
                <div className='font-bold text-center text-sm  md:text-xl  '>
                    <span>We go beyond just accommodations</span><br />
                </div><br />
                <div className=' text-2xl text-center   md:text-5xl '>
                    <p> Leaf Rooms is about creating <br />  experiences. Each listing on Leaf Rooms <br /> is chosen for its charm, character, and <br />  ability to provide a home-like feel.</p>
                </div>
            </div>
            <div className='h-100'></div>
        </div>
    )
}

export default Home3
