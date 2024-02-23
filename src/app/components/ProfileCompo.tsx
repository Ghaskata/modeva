"use client "

import { Pen } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {}

const ProfileCompo = (props: Props) => {
    return (
        <div className='bg-white/90 absolute top-12 w-[300px] rounded-2xl shadow p-5 end-5 text-black font-lora transition-all duration-300 ease-linear'>
            <div className="relative flex flex-col w-full gap-3">
                <div className='absolute top-1 end-1'>
                    <button><Pen className='text-brown h-6 w-6' /></button>
                </div>
                <div className='justify-center items-center flex w-full py-3'>

                    <div className='Profile__iage h-[64px] w-[64px] rounded-full overflow-hidden'>
                        <Image
                            src={"/images/product1.png"}
                            alt='profile'
                            width={100}
                            height={100}
                            className='w-full h-full object-cover object-center'
                        />
                    </div>
                </div>
                <div className="profile_details w-full flex flex-col gap-1">
                    <div className='flex w-full text-14 text-secoundary'><div className='min-w-[80px] text-start text-black font-semibold'>User Name </div> <h5 className='flex-grow text-start'>: gtrhgtrhtrhtyb</h5></div>
                    <div className='flex w-full text-14 text-secoundary'><div className='min-w-[80px] text-start text-black font-semibold'>First Name </div> <h5 className='flex-grow text-start'>: aaadsfsdf</h5></div>
                    <div className='flex w-full text-14 text-secoundary'><div className='min-w-[80px] text-start text-black font-semibold'>Address </div> <h5 className='flex-grow text-start'> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, aliquid?</h5></div>
                    <div className='flex w-full text-14 text-secoundary'><div className='min-w-[80px] text-start text-black font-semibold'>Email </div> <h5 className='flex-grow text-start'>: aaadsfsdf</h5></div>
                </div>
                <div>
                    <h2 className='text-black font-semibold text-18 bg-bg-gray py-2 hover:bg-brown/80 hover:text-white'>Logout</h2>
                </div>
            </div>
        </div>
    )
}

export default ProfileCompo