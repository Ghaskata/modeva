import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='w-full min-h-screen h-auto'>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 w-full h-full">
                <div className='grid grid-cols-1 w-full h-full gap-5'>
                    <div className='relative h-full w-full group/item overflow-hidden cursor-pointer'>
                        <div className='w-full h-full bg-[url("/images/pic1.jpg")] bg-cover group-hover/item:scale-150 transition-all duration-300 ease-linear'>
                        </div>
                        <div className='absolute start-0 top-0 w-full h-full flex justify-start items-center p-5 group-hover/item:bg-black/30 transition-all duration-300 ease-linear'>
                            <Link href={"/products/?category=woman"} className='text-text1 text-20 xsm:text-24 md:text-36 xxl:text-42 uppercase'>Gucchii </Link>
                        </div>
                    </div>
                    <div className='relative h-full w-full group/item overflow-hidden cursor-pointer'>
                        <div className='w-full h-full bg-[url("/images/categoryPhoto2.png")] bg-cover group-hover/item:scale-150 transition-all duration-300 ease-linear'>
                        </div>
                        <div className='absolute start-0 top-0 w-full h-full flex justify-start items-center p-5 group-hover/item:bg-black/30 transition-all duration-300 ease-linear'>
                            <Link href={"/products/?category=woman"} className='text-text1 text-20 xsm:text-24 md:text-36 xxl:text-42 uppercase'>Addidas</Link>
                        </div>
                    </div>
                </div>
                <div className='relative h-full w-full group/item overflow-hidden cursor-pointer'>
                    <div className='w-full h-full bg-[url("/images/categoryPhoto3.png")] bg-cover group-hover/item:scale-150 transition-all duration-300 ease-linear'>
                    </div>
                    <div className='absolute start-0 top-0 w-full h-full flex justify-start items-center p-5 group-hover/item:bg-black/30 transition-all duration-300 ease-linear'>
                        <Link href={"/products/?category=woman"} className='text-text1 text-20 xsm:text-24 md:text-36 xxl:text-42 uppercase'>Findia</Link>
                    </div>
                </div>
                <div className='relative h-full w-full group/item overflow-hidden cursor-pointer'>
                    <div className='w-full h-full bg-[url("/images/categoryPhoto3.png")] bg-cover group-hover/item:scale-150 transition-all duration-300 ease-linear'>
                    </div>
                    <div className='absolute start-0 top-0 w-full h-full flex justify-start items-center p-5 group-hover/item:bg-black/30 transition-all duration-300 ease-linear'>
                        <Link href={"/products/?category=woman"} className='text-text1 text-20 xsm:text-24 md:text-36 xxl:text-42 uppercase'>mufti</Link>
                    </div>
                </div>
                <div className='grid grid-cols-1 w-full h-full gap-5'>
                    <div className='relative h-full w-full group/item overflow-hidden cursor-pointer'>
                        <div className='w-full h-full bg-[url("/images/categoryPhoto1.png")] bg-cover group-hover/item:scale-150 transition-all duration-300 ease-linear'>
                        </div>
                        <div className='absolute start-0 top-0 w-full h-full flex justify-start items-center p-5 group-hover/item:bg-black/30 transition-all duration-300 ease-linear'>
                            <Link href={"/products/?category=woman"} className='text-text1 text-20 xsm:text-24 md:text-36 xxl:text-42 uppercase'>nake</Link>
                        </div>
                    </div>
                    <div className='relative h-full w-full group/item overflow-hidden cursor-pointer'>
                        <div className='w-full h-full bg-[url("/images/categoryPhoto2.png")] bg-cover group-hover/item:scale-150 transition-all duration-300 ease-linear'>
                        </div>
                        <div className='absolute start-0 top-0 w-full h-full flex justify-start items-center p-5 group-hover/item:bg-black/30 transition-all duration-300 ease-linear'>
                            <Link href={"/products/?category=woman"} className='text-text1 text-20 xsm:text-24 md:text-36 xxl:text-42 uppercase'>Allen solly</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page