"use client"

import React, { FC, useRef } from 'react'
import Product from './Product'
import { ProductInt, ProductType } from '../type'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link'


type Props = {
  data: ProductInt[]
}

const ProductList: FC<Props> = ({ data }) => {
  const swiperRef = useRef<any>(null)
  const nextslide = () => {
    swiperRef.current?.swiper?.slidePrev()
  }
  const prevslide = () => {
    swiperRef.current?.swiper?.slideNext()
  }

  return (
    // <div className='product__list grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full h-full gap-5 md:gap-10'>
    //   {
    //     data.map((item,itemIndex) => (
    //       <div className='product w-full h-full' key={itemIndex}>
    //         <Product data={item}/>
    //       </div>
    //     ))
    //   }
    //   <div className='see__all w-full flex justify-start items-center py-5'> 
    //     <Button className='flex justify-center items-center gap-3' variant={"brown"} size={"md"}>See More <span><ArrowRight/></span></Button>
    //   </div>
    // </div>
    <div className='product__list h-full w-full '>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={20}
          freeMode={true}

          breakpoints={{
            1300: {
              slidesPerView: 6,
              spaceBetween: 20
            },
            1000: {
              slidesPerView: 5,
              spaceBetween: 18
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 15
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 15
            },
            576: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            350: {
              slidesPerView: 2,
              spaceBetween: 10
            }
          }}
          modules={[FreeMode]}
          className="h-full w-full my-5 lg:my-10"
        >
          {
            data.map((item, itemIndex) => (
              <SwiperSlide className='product w-full h-full overflow-hidden font-popins' key={itemIndex}><Product data={item} /></SwiperSlide>
            ))
          }
        </Swiper>

      <div className='see__all relative w-full flex justify-start items-center py-5'>
        <Link href={"/products"}>
          <Button className='flex justify-center items-center gap-2 md:gap-3' variant={"brown"} size={"md"}>See More <span><ArrowRight /></span></Button>
        </Link>
        <div className='absolute top-5 end-1 md:end-0 z-20 flex gap-1 md:gap-3'>
          <button onClick={nextslide}> <Button className={`bg-transparent text-white bg-brown rounded-full h-[38px] w-[38px] md:h-[42px] md:w-[42px] p-0`}><ArrowLeft /></Button></button>
          <button onClick={prevslide}><Button className={`bg-transparent text-white bg-brown rounded-full h-[38px] w-[38px] md:h-[42px] md:w-[42px] p-0 `}><ArrowRight /></Button></button>
        </div>
      </div>
    </div>
  )
}

export default ProductList