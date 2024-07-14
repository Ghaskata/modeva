"use client"

import React, { useState, useEffect } from 'react'
import HeroSection from './_components/HeroSection'
import ProductListComponent from './_components/ProductListComponent'
import FilterComponent from './_components/FilterComponent'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import SmallScreenFilter from './_components/SmallScreenFilter'
import { fetchAllPro } from '@/app/data/dynamicData'
import { useSearchParams } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';


type Props = {}


const Page = (props: Props) => {

  const [allProducts, setallProducts] = useState<any>([])
  const searchParams = useSearchParams()
  const category = searchParams.has("category") ? searchParams.get("category") : ""
  console.log("category >>> ", category)
  useEffect(() => {
    fetchAllPro().then(res => setallProducts(res))
  }, [])
  


  return (
    <div className="flex container gap-0 md:gap-5 mx-auto component">
      <div>
        <FilterComponent />
      </div>
      <div className="flex-grow">
        <div className="">
          <div className='w-full body h-full '>
            <div className="flex w-full items-center justify-between px-3 sm:px-0">
              <div className='flex justify-center items-center gap-2 mb-2'>
                <div className='flex md:hidden h-full w-full justify-center items-center' ><SmallScreenFilter /></div>
                <h1 className='text-24 font-lora  capitalize '>{category ? `All  >>  ${category}` : "All"}</h1>
              </div>
              <div>
                <Select>
                  <SelectTrigger className=" w-[120px] md:w-[150px] bg-transparent border-0 rounded-none  focus:outline-none focus:border-0 focus:ring-0 text-20 capitalize " >
                    <SelectValue placeholder="Sort By" className='text-24 font-popins capitalize' />
                  </SelectTrigger>
                  <SelectContent className='font-popins text-20 capitalize'>
                    <SelectItem value="light">Latest</SelectItem>
                    <SelectItem value="dark">rating</SelectItem>
                    <SelectItem value="system">price</SelectItem>
                  </SelectContent>
                </Select>

              </div>
            </div>
            <div className=''>
              <ProductListComponent productList={allProducts} />
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Page