"use client"

import React, { useEffect, useState } from 'react'
import FilterColorRadioCompo from './filterSubComponents/FilterColorRadioCompo'
import FilterBrandCheckbox from './filterSubComponents/FilterBrandCheckbox'
import FilterDiscountRadio from './filterSubComponents/FilterDiscountRadio'
import FilterColorCheckbox from './filterSubComponents/FilterColorCheckbox'



const FilterComponent = () => {

    const [clearfilter, setclearfilter] = useState(false)

    useEffect(() => {
        setclearfilter(false)
        console.log("clear filter >> ", clearfilter)
        console.log("===================")
    },[clearfilter])

    return (
        <div className='filter hidden md:block  h-full bg-white   md:w-[200px] lg:w-[250px] xl:w-[300px] border-r  border transition-all duration-300 ease-linear animate__animated animate__slideInLeft'>
            <div className='w-full h-full ps-0 '>

                <ul className='flex flex-col'>
                    <li className='p-1 border-b last:border-none'>
                        <div className="flex justify-between items-center my-3 px-3">
                            <h3 className='text-24 font-semibold uppercase font-popins'>Filters</h3>
                            <button className='bg-transparent text-brown text-16 md:text-base font-popins' onClick={() => setclearfilter(true)}>cleare all</button>
                        </div>
                    </li>
                    <li className='p-1 border-b last:border-none'>
                        <FilterColorRadioCompo clearfilter={clearfilter} />
                    </li>
                    <li className='p-1 border-b last:border-none'>
                        <FilterBrandCheckbox clearfilter={clearfilter} />
                    </li>
                    <li className='p-1 border-b last:border-none'>
                        <FilterDiscountRadio clearfilter={clearfilter} />
                    </li>

                    <li className='p-1 border-b last:border-none'>
                        <FilterColorCheckbox clearfilter={clearfilter} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FilterComponent