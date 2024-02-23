"use client"

import CustomCheckbox from '@/app/components/CustomCheckbox'
import { brandList } from '@/app/data/staticData'
import React, { useEffect, useState } from 'react'

const FilterBrandCheckbox = ({ clearfilter }: { clearfilter: boolean }) => {
    const [BrandCheckedList, setBrandCheckedList] = useState<string[]>([])

    useEffect(() => {
        clearfilter && setBrandCheckedList([])
        console.log("Brand selectedList  >> ", BrandCheckedList) 
    })
    return (
        <CustomCheckbox title='Brand' checkboxList={brandList} selectedList={BrandCheckedList} setselectedList={setBrandCheckedList} />
    ) 
}

export default FilterBrandCheckbox