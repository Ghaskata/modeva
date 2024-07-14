"use client"
import CustomCheckbox from '@/app/components/CustomCheckbox'
import { ColorList } from '@/app/data/staticData'
import React, { useEffect, useState } from 'react'

const FilterColorCheckbox = ({ clearfilter }: { clearfilter: boolean }) => {
    const [ColorCheckedList, setColorCheckedList] = useState<string[]>([])

    useEffect(() => {
        clearfilter && setColorCheckedList([])
        console.log("color selectedList  >> ", ColorCheckedList)
    },[clearfilter, ColorCheckedList])

    return (
        <CustomCheckbox title='Color checkbox' checkboxList={ColorList} selectedList={ColorCheckedList} setselectedList={setColorCheckedList} />
    )
}

export default FilterColorCheckbox