import { DefaultPageProps } from '@/app/type'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const CategorySection: FC<DefaultPageProps> = () => {
  return (
    <div className='h-screen w-full component'>
      <div className="container mx-auto h-full py-10">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 w-full h-full">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1  w-full h-full gap-5'>
            <div className='relative h-full w-full group/item overflow-hidden cursor-pointer hidden md:block'>
              <div className='w-full h-full bg-[url("/images/categoryPhoto1.png")] bg-cover group-hover/item:scale-150 transition-all duration-300 ease-linear'>
              </div>
              <div className='absolute start-0 top-0 w-full h-full flex justify-start items-center p-5 group-hover/item:bg-black/30 transition-all duration-300 ease-linear'>
                <Link href={"/products/?category=woman"} className='text-text1 text-24 xsm:text-28 md:text-32 xl:text-36 xxl:text-42 uppercase'>formal woman</Link>
              </div>
            </div>
            <div className='relative h-full w-full group/item overflow-hidden cursor-pointer'>
              <div className='w-full h-full bg-[url("/images/categoryPhoto2.png")] bg-cover group-hover/item:scale-150 transition-all duration-300 ease-linear'>
              </div>
              <div className='absolute start-0 top-0 w-full h-full flex justify-start items-center p-5 group-hover/item:bg-black/30 transition-all duration-300 ease-linear'>
                <Link href={"/products/?category=men"} className='text-text1 text-24 xsm:text-28 md:text-32 xl:text-36 xxl:text-42 uppercase'>formal Men</Link>
              </div>
            </div>
          </div>
          <div className='relative h-full w-full group/item overflow-hidden cursor-pointer'>
            <div className='w-full h-full bg-[url("/images/categoryPhoto3.png")] bg-cover group-hover/item:scale-150 transition-all duration-300 ease-linear'>
            </div>
            <div className='absolute start-0 top-0 w-full h-full flex justify-start items-center p-5 group-hover/item:bg-black/30 transition-all duration-300 ease-linear'>
              <Link href={"/products/?category=casual"} className='text-text1 text-24 xsm:text-28 md:text-32 xl:text-36 xxl:text-42 uppercase'>Casual Style</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategorySection