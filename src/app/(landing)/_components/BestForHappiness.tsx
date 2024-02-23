import ProductList from '@/app/components/ProductList'
import { productData } from '@/app/data/staticData'
import { DefaultPageProps } from '@/app/type'
import React, { FC, useEffect } from 'react'

const BestForWomen: FC<DefaultPageProps> = () => {

 // useEffect(() => {
  //   const scrollY = window.scrollY
  //   console.log('y >>>>>> ', scrollY)
  //   if (scrollY > 1800) {
  //     const line = document.getElementsByClassName("line")
  //     line[0].classList.replace("w-0", "w-[350px]")
  //   } else {
  //     const line = document.getElementsByClassName("line")
  //     line[0].classList.replace("w-[350px]", "w-0")
  //   }
  // })
  return (
    <div className='max-h-screen component'>
      <div className="container mx-auto h-full">
        <div className='mb-16 w-full'>
          <h1 className='uppercase font-600 text-28 md:text-32 xl:text-36 xxl:text-42 my-2'>Best outfit </h1>
          <div className=' w-[calc(100%-100px)] sm:md:w-[200px] md:w-[250px] lg:w-[300px] bg-brown h-[2px] relative before:absolute before:-end-1 before:-top-1 before:h-3 before:w-3 before:bg-brown before:rounded-full'></div>
        </div>
        <div className="productList">
          <ProductList data={productData} />
        </div>
      </div>
    </div>
  )
}

export default BestForWomen