'use client'
import React, { useEffect, useState } from 'react'
import Slider from '../Data/Slider'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function SlideBar() {
    const [slide, setslide] = useState(1.2);

    useEffect(() => {
        const handlSlide = () => {
            if (window.innerWidth >= 680) {
                setslide(1.2)
            }
            else {
                setslide(1)
            }

        };
        handlSlide();
        window.addEventListener('resize', handlSlide);

        return () => {
                window.removeEventListener('resize',handlSlide)
        }

    }, [])

    return (
        <div>
            <div>

                <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    slidesPerView={slide}

                    spaceBetween={20}
                    loop={true}
                    autoplay={{ delay: 2000 }}
                    navigation
                    pagination={{ clickable: true }}
                    className='m-10 px-10 w-[75%]'
                >
                    {
                        Slider.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className=''>
                                    <label className='absolute top-2 left-2 bg-amber-600 p-2 text-sm '>{slide.buttonContent}</label>
                                    <img src={slide.image} alt="" />
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>


            </div>
        </div>
    )
}

export default SlideBar
