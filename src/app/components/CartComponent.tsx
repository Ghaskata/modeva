import IconClose from '@/components/svg/IconClose'
import Image from 'next/image'
import React, { FC, SetStateAction } from 'react'
import CartProduct from './CartProduct'
import { Button } from '@/components/ui/button'

type Props = {
    openCart: boolean,
    setopenCart: React.Dispatch<SetStateAction<boolean>>
}

const CartComponent: FC<Props> = ({ openCart, setopenCart }) => {
    return (
        <div className={`cart__Componen fixed  top-0 ${openCart ? "right-0" : "-right-full"} transition-all duration-1000 ease-linear shadow w-full max-w-md  bg-white h-screen `}>
            <div className='w-full flex items-start justify-start ps-3 pt-3'>
                <button className='text-secoundary'>
                    <IconClose className='h-4 w-4' />
                </button>
            </div>
            <h1 className='uppercase text-48 text-brown font-semibold'>Cart</h1>
            <div className='p-5 flex flex-col w-full justify-between'>
                <div className="Products_list flex-grow h-[700px] overflow-y-auto w-full cart">
                    <ul className='flex flex-col gap-y-4 w-full'>
                        <CartProduct/>
                        <CartProduct/>
                        <CartProduct/>
                        <CartProduct/>
                        <CartProduct/>
                        <CartProduct/>
                        <CartProduct/>
                        <CartProduct/>
                        <CartProduct/>
                    </ul>
                </div>
                <div className='my-5'>
                    <Button variant={"brown"} size={"lg"} className='rounded-none hover:bg-black w-full'>Check out Now</Button>
                </div>
            </div>
        </div>
    )
}

export default CartComponent