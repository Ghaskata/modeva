"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';



type Props = {}

const Hero = (props: Props) => {
    return (
        <div className='relative w-screen h-[calc("50%")]'>
            <div>
                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        delay:1000
                    }}
                    modules={[ Autoplay]}
                    className="mySwiper w-full h-[500px]"
                >
                    <SwiperSlide className='w-full h-full overflow-hidden '>
                        <Image
                            src={'/images/categoryPhoto1.png'}
                            alt='images1'
                            width={666}
                            height={334}
                            className='w-full h-full object-center object-cover'
                        />
                    </SwiperSlide>
                    <SwiperSlide className='w-full h-full overflow-hidden '>
                        <Image
                            src={'/images/heroBg.png'}
                            alt='images1'
                            width={1440}
                            height={1024}
                            className='w-full h-full object-center object-cover'
                        />
                    </SwiperSlide>
                    <SwiperSlide className='w-full h-full overflow-hidden '>
                        <Image
                            src={'/images/categoryPhoto2.png'}
                            alt='images1'
                            width={666}
                            height={334}
                            className='w-full h-full object-center object-cover'
                        />
                    </SwiperSlide>
                </Swiper>

            </div>
            <div className='absolute start-0 top-0 h-full w-full  z-20'>
                <div className="container mx-auto flex flex-col gap-5 justify-center items-center h-full">
                    <h2 className='text-text1 text-36 md:text-52 text-center'>All Category Of Product's</h2>
                    <Button className='flex justify-center items-center gap-3 hover:bg-black transition-all duration-500 ease-out' variant={"brown"} size={"md"}>See More </Button>
                </div>
            </div>
        </div >
    )
}

export default Hero