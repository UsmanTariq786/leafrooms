import Stay1 from '@/Components/Stay1'
import Stay3 from '@/Components/Stay3'
import Stay4 from '@/Components/Stay4'
import React from 'react'

function page() {
  return (
    <div className='text-black'>
      <Stay1 />
      <div className='text-gray-800 text-center pt-40 mb-10 mx-10 mt-60 md:my-30 md:mx-50 text-2xl md:text-4xl'>
        <p>Explore our refined accommodation options and find the perfect space for your next stay.</p>
      </div>
      <Stay3/>
      <Stay4/>
    </div>
  )
}

export default page
