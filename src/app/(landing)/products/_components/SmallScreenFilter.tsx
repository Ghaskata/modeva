"use client"

import CustomScreenFilterSelect from '@/app/components/CustomScreenFilterSelect'
import { brandFilter, brandList, colors, discountFilter, jeansFilter } from '@/app/data/staticData'
import { checkboxItem } from '@/app/type'
import IconClose from '@/components/svg/IconClose'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronRight, Filter, SlidersHorizontalIcon, Target } from 'lucide-react'
import React, { useEffect, useState } from 'react'

type Props = {}

const SmallScreenFilter = (props: Props) => {
    const [openFilter, setopenFilter] = useState(false)
    const [brandSelectedList, setbrandSelectedList] = useState<string[]>([])
    const [discountSelectedList, setdiscountSelectedList] = useState<string[]>([])
    const [jeansSelectedList, setjeansSelectedList] = useState<string[]>([])
    const [selectedColor, setselectedColor] = useState<string>("red")
    const [priceFilter, setpriceFilter] = useState<number>(100)



    const handleApplyFilter = () => {
        console.log("========================")
        console.log("filter >>>>>>> ")
        console.log("brandSelectedList >>>>>>> ", brandSelectedList)
        console.log("discountSelectedList >>>>>>> ", discountSelectedList)
        console.log("jeansFlterSelectedList >>>>>>> ", jeansSelectedList)
        console.log("selected color >>>>>>> ", selectedColor)
        console.log("price filter >>>>>>> ", priceFilter)
        console.log("========================")
    }
    return (
        <div className={``}>
            <button onClick={() => setopenFilter(!openFilter)} >
                <SlidersHorizontalIcon />
            </button>
            {
                openFilter &&
                <div className={`small screen__filter w-[calc(100%)] md:w-[calc(80%)] block md:hidden fixed z-30  h-screen start-0 xsm:px-5 sm:px-8 md:px-12 bg-black/50 top-0 transition-all duration-300 ease-linear`}>
                    <div className="flex justify-center items-end w-full h-full">
                        <div className={`w-full flex flex-col rounded-t-lg border shadow p-5 h-[calc(85%)] transition-all ease-linear duration-500 bg-white overflow-y-auto `}>
                            <div className="flex justify-between items-center w-full pb-5">
                                <h1 className="uppercase text-36 sm:text-42 text-text2 font-semibold">Filters</h1>
                                <button className="text-secoundary" onClick={() => setopenFilter(false)}>
                                    <IconClose className="text-secoundary h-5 w-5" />
                                </button>
                            </div>
                            <div className='w-full flex-grow'>
                                <div className='filters w-full'>
                                    <ul className='flex flex-col w-full px-0 sm:px-5'>

                                        <li className={`hover:border-y border-t pt-8`}>
                                            <CustomScreenFilterSelect data={brandFilter} selectedList={brandSelectedList} setselectedList={setbrandSelectedList} />
                                        </li>
                                        <li className={`hover:border-y`}>
                                            <CustomScreenFilterSelect data={discountFilter} selectedList={discountSelectedList} setselectedList={setdiscountSelectedList} />
                                        </li>
                                        <li className={`hover:border-y`}>
                                            <CustomScreenFilterSelect data={jeansFilter} selectedList={jeansSelectedList} setselectedList={setjeansSelectedList} />
                                        </li>

                                        <li className={`py-2 group/listItem hover:border-y`}>
                                            <div className="flex items-center justify-between w-full text-secoundary group-hover/listItem:text-black group-hover/listItem:font-semibold">
                                                <h3 className='text-20'>Price</h3>
                                                <ChevronRight className='h-6 w-6 block group-hover/listItem:hidden' />
                                                <ChevronDown className='h-6 w-6 hidden group-hover/listItem:block' />
                                            </div>
                                            <div className='w-full hidden group-hover/listItem:block px-5 py-3'>
                                                <div className='w-full px-5 text-secoundary text-20 flex flex-col gap-1 py-5'>
                                                    <input type="range" name="price" id="" className='' max={15000} min={10} value={priceFilter} onChange={(e) => setpriceFilter(+e.target.value)} />
                                                    <div className='w-full flex justify-between text-18 text-black font-semibold'>
                                                        <h2>$10</h2>
                                                        <h2>$15000</h2>
                                                    </div>
                                                </div>
                                                <div className='w-full flex justify-center items-center text-center'>
                                                    <h1 className='text-18 text-black'>Price Between <span className='text-20 text-black font-semibold'>$10</span> to  <span className='text-24 text-black font-semibold'>${priceFilter}</span></h1>
                                                </div>
                                            </div>
                                        </li>

                                        <li className={`py-2 group/listItem hover:border-y`}>
                                            <div className="flex items-center justify-between w-full text-secoundary group-hover/listItem:text-black group-hover/listItem:font-semibold">
                                                <h3 className='text-20'>Colors</h3>
                                                <ChevronRight className='h-6 w-6 block group-hover/listItem:hidden' />
                                                <ChevronDown className='h-6 w-6 hidden group-hover/listItem:block' />
                                            </div>
                                            <div className='w-full hidden group-hover/listItem:block px-5 py-3'>
                                                <div className='w-full text-secoundary text-20 grid grid-cols-5 gap-2 sm:gap-4 py-5'>
                                                    {
                                                        colors?.map((item: string, itemIndex: number) => (
                                                            <div className={cn(`form-check form-check-inline flex gap-3 font-lora`)} key={itemIndex}>
                                                                <input
                                                                    className={cn(`form-check-input hidden`)}
                                                                    type="radio"
                                                                    name={item}
                                                                    id={item}
                                                                    value={item}
                                                                    onChange={(e) => setselectedColor(e.target.value)}
                                                                    checked={item === selectedColor}
                                                                />
                                                                <label htmlFor={item} className={cn(`form-check-label flex justify-center items-center text-12 text-white h-[42px] w-[42px] xsm:h-[52px] xsm:w-[52px] rounded-full`)} style={{ backgroundColor: `${item}` }}>
                                                                    {
                                                                        selectedColor == item && <Check className='text-white font-semibold h-7 w-7' />
                                                                    }
                                                                </label>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className='py-5' onClick={handleApplyFilter}>
                                    <Button className='capitalize font-mono text-base h-12 rounded-full w-full '>Apply filters</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default SmallScreenFilter