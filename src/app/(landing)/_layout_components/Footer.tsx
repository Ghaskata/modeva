import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-screen bg-brown text-text1'>
      <div className='container w-full h-full mx-auto py-10'>
        <div className='w-full flex flex-col lg:flex-row gap-y-8 pb-10 gap-5'>
          <div className="Logo_section w-full lg:w-[500px] pe-0 lg:pe-3">
            <h1 className='text-36 xl:text-42 uppercase font-semibold mb-4 '>Modeva</h1>
            <div className='text-14 font-popins '>
              <div className='flex items-start'>
                <div className='min-w-[100px] '><h5 className=''>WhatsApp</h5></div>
                <h5 className=''>: +62 859 9999 999</h5>
              </div>
              <div className='flex items-start'>
                <div className='min-w-[100px] '><h5 className=''>Email</h5></div>
                <h5 className=''>: hello@modeva.com</h5>
              </div>
              <div className='flex items-start'>
                <div className='min-w-[100px] '><h5 className=''>Address</h5></div>
                <h5 className='font-lora'>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique .</h5>
              </div>
            </div>
          </div>
          <div className="Links_section flex-grow">
            <div className='grid grid-cols-3 xxl:grid-cols-4 2xl:grid-cols-5'>
              <div className='font-popins'>
                <h4 className='text-18 font-semibold font-lora mb-2'>Menu</h4>
                <ul className='links text-12 flex flex-col gap-1 text-gray-200'>
                  <li>Sale</li>
                  <li>New Arrivals</li>
                  <li>Formal Men</li>
                  <li>Formal Woman</li>
                  <li>Formal Woman</li>
                  <li>Casual Men</li>
                  <li>Casual Woman</li>
                </ul>
              </div>
              <div className='font-popins'>
                <h4 className='text-18 font-semibold font-lora mb-2'>Get Help</h4>
                <ul className='links text-12 flex flex-col gap-1 text-gray-200'>
                  <li>FAQ</li>
                  <li>Customer Service</li>
                  <li>Refund and Return</li>
                  <li>Terms and Conditions</li>
                  <li>Shipping</li>
                </ul>
              </div>
              <div className='font-popins'>
                <h4 className='text-18 font-semibold font-lora mb-2'>Account</h4>
                <ul className='links text-12 flex flex-col gap-1 text-gray-200'>
                  <li>My Account</li>
                  <li>My Orders</li>
                  <li>Vouchers and Discounts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className='opacity-60'/>
        <div className='w-full flex flex-col justify-center items-center gap-1 text-center font-popins pb-1 pt-3'>
          <h6 className='text-12'>All rights reserved </h6>
          <h6 className='text-12'>Copyright 2023 By Modeva Fashion</h6>
        </div>
      </div>
    </div>
  )
}

export default Footer