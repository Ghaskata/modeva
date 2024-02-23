import Image from 'next/image'
import React, { FC } from 'react'
import { Eye, Heart, Star } from 'lucide-react'
import { ProductType } from '@/app/type'
import { useRouter } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';



type Props = {
    data: ProductType
}

const SingleProduct: FC<Props> = ({ data }) => {
    const router = useRouter()
    return (
        <div className='relative single_product rounded-xl overflow-hidden w-full group/product cursor-pointer transition-all duration-500 ease-linear font-popins' onClick={() => router.push(`/products/${data.id}`)}>
            <div className='product_image w-full rounded-xl overflow-hidden'>
                <Image
                    src={data.image}
                    alt={data.name}
                    width={315}
                    height={420}
                    className='w-full max-h-[250px]'
                />
            </div>
            {/* <div className="absolute rating _section top-3 end-3">
                <div className='bg-brown rounded-full p-1 px-2 flex justify-center items-center gap-2'>
                    <Star className='h-3 md:h-4 w-3 md:w-4 text-yellow-400'/>
                    <h4 className='text-12 md:text-16 text-text1 font-mono'>{data.rating}</h4>
                </div>
            </div> */}
            <div className="product_body h-full w-full py-2 group-hover/product:bg-white  transition-all duration-300 ease-linear p-2">
                <div className='w-full h-full group-hover/product:invisible'>
                    <h3 className='text-secoundary text-10 xl:text-12 uppercase pt-2'>{data.category}</h3>
                    <h3 className='text-text2 text-16 md:text-16 lg:text-18 xl:text-20 capitalize mt-1 pb-4'>{data.name}</h3>
                    <div className="w-full flex justify-between items-center" >
                        <h4 className='text-secoundary text-14 xl:text-16 uppercase'>{data.price}</h4>
                        <div className='flex justify-end items-center'>
                            <Star className='h-3 w-3 text-yellow-400' />
                            <Star className='h-3 w-3 text-yellow-400' />
                            <Star className='h-3 w-3 text-yellow-400' />
                            <Star className='h-3 w-3 text-yellow-400' />
                        </div>
                    </div>
                </div>
                <div className={`w-full h-full absolute end-0 hidden  group-hover/product:block group-hover/product:bg-white z-10 group-hover/product:bottom-0 transition-all duration-300 ease-linear `}>
                    <div className='overflow-hidden'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            freeMode={true}
                            autoplay={{
                                delay: 700
                            }}

                            pagination={{
                                clickable:false
                            }}
                            modules={[FreeMode, Autoplay, Pagination]}
                            className="h-full w-full"
                        >
                            <SwiperSlide className='overflow-hidden' >
                                <Image
                                    src={data.image}
                                    alt={"name"}
                                    width={659}
                                    height={700}
                                    className='w-full h-full object-center object-cover'
                                />
                            </SwiperSlide>
                            <SwiperSlide className='overflow-hidden' >
                                <Image
                                    src={"/images/product1.png"}
                                    alt={"name"}
                                    width={659}
                                    height={700}
                                    className='w-full h-full object-center object-cover'
                                />
                            </SwiperSlide>
                            <SwiperSlide className='overflow-hidden' >
                                <Image
                                    src={"/images/product2.png"}
                                    alt={"name"}
                                    width={659}
                                    height={700}
                                    className='w-full h-full object-center object-cover'
                                />
                            </SwiperSlide>
                            <SwiperSlide className='overflow-hidden' >
                                <Image
                                    src={"/images/product3.png"}
                                    alt={"name"}
                                    width={659}
                                    height={700}
                                    className='w-full h-full object-center object-cover'
                                />
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    
                    <div className='absolute w-full end-0 bottom-0 bg-white p-2 z-10 transition-all duration-300 ease-linear'>
                        <div className='py-3'>

                        </div>
                        <div className='flex flex-col '>
                            <h3 className='text-secoundary text-10 xl:text-12 uppercase pt-2'>{data.category}</h3>
                            <h3 className='text-text2 text-16 md:text-16 lg:text-18 xl:text-20 capitalize mt-1 pb-4'>{data.name}</h3>
                        </div>
                        <div className="w-full flex justify-between items-center" >
                            <h4 className='text-secoundary text-14 xl:text-16 uppercase'>{data.price}</h4>
                            <div className='flex justify-end items-center'>
                                <Star className='h-3 w-3 text-yellow-400' />
                                <Star className='h-3 w-3 text-yellow-400' />
                                <Star className='h-3 w-3 text-yellow-400' />
                                <Star className='h-3 w-3 text-yellow-400' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct