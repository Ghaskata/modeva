"use client"

import CustomRadio from '@/app/components/CustomRadio'
import { DiscountList } from '@/app/data/staticData'
import React, { useEffect, useState } from 'react'

const FilterDiscountRadio = ({ clearfilter }: { clearfilter: boolean }) => {
    const [discount, setdiscount] = useState("")

    useEffect(() => {
        clearfilter && setdiscount("")
        console.log("discount radio >> ", discount)
    },[clearfilter, discount])


    return (
        <CustomRadio title='Discount range' name='discount' radioList={DiscountList} value={discount} setValue={setdiscount} />
    )
}

export default FilterDiscountRadio