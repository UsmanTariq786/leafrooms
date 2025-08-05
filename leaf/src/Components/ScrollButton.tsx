'use client'
import React from 'react'
import { FaChevronUp } from 'react-icons/fa'
function ScrollButton() {
    return (
        <div>
            <button className="fixed bottom-4 right-4 border border-black p-3 cursor-pointer  hover:bg-red-900 transition duration-300 ease-in-out z-50"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })
                }
            >
                <FaChevronUp size={30} className="text-black" />
            </button>
        </div>
    )
}

export default ScrollButton
