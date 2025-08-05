'use client'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function TextSlidet() {
  const slides = [
    {
      review: "The apartment is well located. Rooms are very clean. Great services. Very kind Host",
      name: "Jawad Yaqoob",
      rank: "GUEST"
    },
    {
      review: "A great deal for the space and location. The restaurants available were all very good. Friendly staff, helpful deposition made our overall expericence wonderful. We will be going again next year.",
      name: "Usman Tariq",
      rank: "International Guest"
    },
    {
      review: "The rooms are all renovated and modern. Maintenance was exceptional. We loved the scenery from our room. We liked the fact that we have our own kitchen so we could cook. Thanks for all the hospitality and this pleased stay.",
      name: "Abdullah P",
      rank: "GUEST"
    }
  ]

  return (
    <div className='relative mt-10 p-20 h-[500px] overflow-hidden'>
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/images/handcup.jpeg')] bg-cover bg-center z-0 h-ful"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className='relative z-20'>
        <div className='text-yellow-400 flex justify-center mb-10'>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={20} />
          ))}
        </div>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000 }}
          navigation ={false}
          pagination={{ clickable: true }}
          className='text-white font-serif  mt-20 '>
          {
            slides.map((slide, index) => (
              <SwiperSlide key={index} className='text-center px-4'>
                <p className='text-2xl'>" {slide.review} "</p><br /><br />
                <span className='font-bold'>{slide.name}</span><br />
                <span className='italic'>{slide.rank}</span>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default TextSlidet
