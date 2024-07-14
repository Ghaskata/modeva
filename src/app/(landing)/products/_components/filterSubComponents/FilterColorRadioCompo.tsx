"use client"

import CustomRadio from '@/app/components/CustomRadio'
import { ColorList } from '@/app/data/staticData'
import React, { useEffect, useState } from 'react'

const FilterColorRadioCompo = ({ clearfilter }: { clearfilter: boolean }) => {
        const [color, setcolor] = useState("")
        useEffect(() => {
            clearfilter && setcolor("")
            console.log("color radio >> ", color)
        },[clearfilter, color])

    return (
        <CustomRadio title='Colors' name='color' radioList={ColorList} value={color} setValue={setcolor}/>
    )
}

export default FilterColorRadioCompo