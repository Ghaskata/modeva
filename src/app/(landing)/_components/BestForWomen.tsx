import ProductList from '@/app/components/ProductList'
import { productData } from '@/app/data/staticData'
import { DefaultPageProps } from '@/app/type'
import React, { FC } from 'react'

const BestForWomen: FC<DefaultPageProps> = () => {
  return (
    <div className='max-h-screen component'>
      <div className="container mx-auto h-full">
        <div className='mb-16 w-full'>
          <h1 className='uppercase font-600 text-28 md:text-32 xl:text-36 xxl:text-42 my-2'>Best For Women </h1>
          <div className=' w-[calc(100%-40px)] sm:w-[300px]  xl:w-[400px] bg-brown h-[2px] relative before:absolute before:-end-1 before:-top-1 before:h-3 before:w-3 before:bg-brown before:rounded-full'></div>
        </div>
        <div className="productList">
          <ProductList data={productData} />
        </div>
      </div>
    </div>
  )
}

export default BestForWomen