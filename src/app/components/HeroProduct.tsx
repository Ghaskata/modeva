"use client"

import Image from 'next/image'
import React, { FC, useEffect } from 'react'
import { cn } from '../lib/util'
import Link from 'next/link'

type Props = {
  className?: string
}

const HeroProduct: FC<Props> = ({ className }) => {

  useEffect(() => {
    const hero_product = document.getElementsByClassName("Hero_Product")
    if (className?.includes("flex-row-reverse")) {
      hero_product[0].classList.replace("animate__slideInLeft", "animate__slideInRight")
    }
  })
  return (
    <div className={cn(`Hero_Product flex h-[180px] w-[400px] overflow-hidden animate__animated animate__slideInLeft `, className)}>
      <div className='product__image h-full'>
        <Image
          src={'/images/HeroProduct.png'}
          alt='Product'
          width={200}
          height={200}
          className='h-full'
        />
      </div>
      <div className='product_description p-3 bg-white flex flex-col justify-between items-start h-full'>
        <div className=''>
          <h1 className='text-24'>Product Name in Here</h1>
          <h4 className='text-14 text-secoundary'>IDR 300.000</h4>
        </div>
        <Link href={"/products"} className='text-14 border-b'>SHOP NOW</Link>
      </div>
    </div>
  )
}

export default HeroProduct