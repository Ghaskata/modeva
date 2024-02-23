import { DefaultPageProps } from '@/app/type'
import { CreditCard, PhoneCall, RocketIcon, ThumbsUpIcon } from 'lucide-react'
import React, { FC } from 'react'

const ServiceSection: FC<DefaultPageProps> = () => {
  return (
    <div className='w-screen  h-full component'>
      <div className="container mx-auto w-full h-full ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full h-full component">
          <div className='w-full h-full bg-bg-gray p-5 order-1 group/card hover:bg-white transition-all duration-300 ease-linear ' >
            <div className='p-5 bg-white hover:bg-bg-gray flex flex-col gap-5 justify-center items-center h-full w-full transition-all duration-300 ease-linear'>
              <div>
                <div className="service_Icon bg-brown h-[64px] w-[64px] group-hover/card:bg-slate-900/90  flex justify-center items-center rounded-full transition-all duration-300 ease-linear">
                  <ThumbsUpIcon className='text-white ' />
                </div>
              </div>
              <div className=' service_content text-center'>
                <h2 className='text-24 lg:text-28 text-text2 py-3'>100% Satisfaction Guaranteed </h2>
                <h5 className='text-secoundary text-12 font-popins'>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </h5>
              </div>
            </div>
          </div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5 gap-y-5 col-span-1 sm:col-span-2 order-3 lg:order-2'>
            <div className='w-full h-full bg-bg-gray p-5 group/card hover:bg-white transition-all duration-300 ease-linear' >
              <div className='p-5 bg-white hover:bg-bg-gray flex flex-col md:flex-row gap-5 justify-center items-center h-full w-full transition-all duration-300 ease-linear'>
                <div>
                  <div className="service_Icon bg-brown h-[64px] w-[64px] group-hover/card:bg-slate-900/90  flex justify-center items-center rounded-full transition-all duration-300 ease-linear">
                    <PhoneCall className='text-white ' />
                  </div>
                </div>
                <div className='flex-grow service_content text-center md:text-start'>
                  <h2 className='text-24 lg:text-28 text-text2 py-3'>100% Satisfaction Guaranteed </h2>
                  <h5 className='text-secoundary text-12 font-popins'>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </h5>
                </div>
              </div>
            </div>
            <div className='w-full h-full bg-bg-gray p-5 group/card hover:bg-white transition-all duration-300 ease-linear' >
              <div className='p-5 bg-white hover:bg-bg-gray flex flex-col md:flex-row gap-5 justify-center items-center h-full w-full transition-all duration-300 ease-linear'>
                <div>
                  <div className="service_Icon bg-brown h-[64px] w-[64px] group-hover/card:bg-slate-900/90  flex justify-center items-center rounded-full transition-all duration-300 ease-linear">
                    <RocketIcon className='text-white ' />
                  </div>
                </div>
                <div className='flex-grow service_content text-center md:text-start'>
                  <h2 className='text-24 lg:text-28 text-text2 py-3'>100% Satisfaction Guaranteed </h2>
                  <h5 className='text-secoundary text-12 font-popins'>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </h5>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-full bg-bg-gray p-5 order-2 lg:order-3 group/card hover:bg-white transition-all duration-300 ease-linear' >
            <div className='p-5 bg-white hover:bg-bg-gray flex flex-col gap-5 justify-center items-center h-full w-full transition-all duration-300 ease-linear'>
              <div>
                <div className="service_Icon bg-brown h-[64px] w-[64px] group-hover/card:bg-slate-900/90  flex justify-center items-center rounded-full transition-all duration-300 ease-linear">
                  <CreditCard className='text-white ' />
                </div>
              </div>
              <div className=' service_content text-center'>
                <h2 className='text-24 lg:text-28 text-text2 py-3'>100% Satisfaction Guaranteed </h2>
                <h5 className='text-secoundary text-12 font-popins'>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection