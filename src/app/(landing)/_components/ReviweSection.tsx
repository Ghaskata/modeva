"use client"

import ReviewCard from '@/app/components/ReviewCard'
import { DefaultPageProps } from '@/app/type'
import { Star } from 'lucide-react'
import Image from 'next/image'
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode } from 'swiper/modules';


const ReviweSection: FC<DefaultPageProps> = () => {
  const arr = [1, 2, 3, 43, 5, 4, 10, 12, 12, 15]
  return (
    <div className='w-screen component bg-bg-gray mb-20 '>
      <div className="container mx-auto h-full w-full">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-5 bg-bg-gray py-20 px-5">
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
        </div> */}

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          freeMode={true}

          breakpoints={{
            1200: {
              slidesPerView: 3.5,
              spaceBetween: 20
            },
            992: {
              slidesPerView: 2.5,
              spaceBetween: 15
            },
            576: {
              slidesPerView: 1.5,
              spaceBetween: 10
            },
            300: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }}
          modules={[FreeMode]}
          className="h-full w-full my-5 lg:my-10"
        >
          {
            arr.map((review, index) => (
              <SwiperSlide key={index}><ReviewCard /></SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default ReviweSection