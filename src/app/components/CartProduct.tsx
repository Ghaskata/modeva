import React from 'react'
import Image from 'next/image'

type Props = {}

const CartProduct = (props: Props) => {
    return (
        <div className='w-full flex h-[120px] '>
            <div className='image_container w-[80px] h-full overflow-hidden '>
                <Image
                    src={'/images/categoryPhoto3.png'}
                    alt={"product_image"}
                    width={150}
                    height={150}
                    className='w-full h-full object-cover object-center'
                />
            </div>
            <div className='flex-grow bg-bg-gray px-2 text-start'>
                <h3 className='text-secoundary text-12 uppercase pt-2'>product category</h3>
                <h3 className='text-text2 text-20 md:text-24 capitadivze mt-1 pb-4'>product name</h3>
                <h4 className='text-secoundary text-14 uppercase'>IDR xxx</h4>
            </div>
        </div>
        )
}

export default CartProduct