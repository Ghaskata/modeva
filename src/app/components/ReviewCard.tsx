import { Star } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
type Props = {}

const ReviewCard = (props: Props) => {
    return (
        <div className='bg-white p-3 md:p-5 w-full h-full font-popins hover:bg-[#e3e3e4]'>
            <div className='flex flex-col gap-3'>
                <div className="reviwer__detail w-full flex justify-between items-end">
                    <div className='flex items-center gap-3'>
                        <div className="profile_img_container h-[64px] w-[64px] rounded-full overflow-hidden">
                            <Image
                                src={'/images/product1.png'}
                                alt='profile'
                                width={100}
                                height={100}
                            />
                        </div>
                        <div>
                            <h4 className='text-text2 text-16 '>Cynthia caroline</h4>
                            <h5 className='text-secoundary text-10 '>15 July 2023</h5>
                        </div>
                    </div>
                    <div className='flex start_list text-yellow-400'>
                        <Star className='h-4 w-4' />
                        <Star className='h-4 w-4' />
                        <Star className='h-4 w-4' />
                        <Star className='h-4 w-4' />
                    </div>
                </div>
                <div className='reviwe_content text-secoundary text-10 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita autem corporis mollitia minus aut numquam laudantium explicabo optio molestias, necessitatibus aliquid eligendi hic, velit ipsam. Quisquam eius neque culpa sunt!</div>
            </div>
        </div>)
}

export default ReviewCard