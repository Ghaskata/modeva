import HeroProduct from '@/app/components/HeroProduct'
import { DefaultPageProps } from '@/app/type'
import React, { FC } from 'react'
import Header from '../_layout_components/Header'

const HeroSection: FC<DefaultPageProps> = () => {
    return (
        <div className='h-screen w-screen bg-[url("/images/heroBg.png")] bg-no-repeat bg-cover bg-center'>
            <div className='container mx-auto h-full'>
                <div className="flex flex-row h-full w-full">
                    <div className='flex-grow h-full w-full flex flex-col justify-center items-start '>
                        <h5 className='text-text1 text-16'>made in Indonesia, dedicated to Indonesia</h5>
                        <h1 className='text-text1 text-42 lg:text-52 font-semibold uppercase animate__animated animate__fadeInUp'>Discover the Art of <br />Dressing Up</h1>
                    </div>
                    <div className='h-full hidden lg:flex flex-col items-end justify-end gap-4 pb-4 '>
                        <HeroProduct />
                        <HeroProduct className='flex-row-reverse'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection