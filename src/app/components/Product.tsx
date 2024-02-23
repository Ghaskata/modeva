import Image from 'next/image'
import React, { FC } from 'react'
import { ProductType } from '../type'
import { Star } from 'lucide-react'

type Props = {
    data: ProductType
}

const Product: FC<Props> = ({ data }) => {
    return (
        <div className='relative single_product w-full group/product bg-bg-gray/50 hover:bg-bg-gray rounded-2xl p-4   '>
            <div className='product_image overflow-hidden rounded-xl'>
                <Image
                    src={data.image}
                    alt={data.name}
                    width={315}
                    height={420}
                    className='w-full h-full group-hover/product:scale-110 transition-all duration-500 ease-linear'
                />
            </div>
            {/* <div className="absolute rating _section top-3 end-3">
                <div className='bg-brown rounded-full p-1 px-2 flex justify-center items-center gap-2'>
                    <Star className='h-3 w-3 text-yellow-400' />
                    <h4 className='text-10 text-text1 font-mono'>{data.rating}</h4>
                </div>
            </div> */}
            <div className="product_body h-full w-full py-2">
                <h3 className='text-secoundary text-10 uppercase pt-2'>{data.category}</h3>
                <h3 className='text-text2 text-16 xl:text-18 capitalize mt-1 pb-2'>{data.name}</h3>
                <div className="w-full flex justify-between items-center" >
                    <h4 className='text-secoundary text-10 xl:text-12 uppercase'>{data.price}</h4>
                    <div className='flex justify-end items-center'>
                        <Star className='h-3 w-3 text-yellow-400' />
                        <Star className='h-3 w-3 text-yellow-400' />
                        <Star className='h-3 w-3 text-yellow-400' />
                        <Star className='h-3 w-3 text-yellow-400' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product