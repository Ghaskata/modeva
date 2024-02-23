"use client"

import React, { Dispatch, FC, FormEvent, FormEventHandler, SetStateAction, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { checkboxItem } from '../type'
import { SearchIcon, UtensilsCrossedIcon } from 'lucide-react'

interface CustomCheckboxProps {
    selectedList: string[],
    setselectedList: Dispatch<SetStateAction<string[]>>,
    title: string,
    checkboxList: checkboxItem[],
    className?: string,
    titleClassName?: string,
    checkboxListClassName?: string,
    CheckboxItemClassName?: string,
    checkboxClassName?: string,
    itemLabelclassName?: string,
}



const CustomCheckbox: FC<CustomCheckboxProps> = ({ selectedList, setselectedList, title, checkboxList, className, titleClassName, checkboxListClassName, CheckboxItemClassName, checkboxClassName, itemLabelclassName }) => {

    const [OpenSearch, setOpenSearch] = useState(false)
    const [Search, setSearch] = useState("")

    const handleChange = (e: any, selectedList: string[], setselectedList: Dispatch<SetStateAction<string[]>>) => {
        if (e.target.checked) {
            setselectedList([...selectedList, e.target.value])
        } else {
            let copyOfArray = [...selectedList]
            let deleteIndex = copyOfArray.indexOf(e.target.value)
            copyOfArray.splice(deleteIndex, 1)
            setselectedList(copyOfArray)
        }
    }


    const handleSearch = (e: FormEvent) => {
        e.preventDefault()
        console.log("search data", Search)
    }

    const handleFilter = (e: any) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        console.log("search >>>> ", Search)
        const a = checkboxList.filter((item) => item.name.toLowerCase().includes(Search.toLowerCase()))
        console.log(".......", a)
    }, [Search])

    return (
        <div className={cn(`list-group p-5 font-popins`, className)}>
            <div className={`flex justify-between items-center mb-4 ${OpenSearch ? "hidden" : " block"}`}>
                <h3 className={cn(`text-18 font-semibold uppercase  text-brown`, titleClassName)}>{title}</h3>
                <div className='flex justify-center items-center'>
                    <button className={`rounded-full p-2 bg-gray-300/50`} onClick={() => setOpenSearch(true)}>
                        <SearchIcon className='w-3 h-3 ' />
                    </button>
                </div>
            </div>
            <div className={`relative flex justify-between items-center w-full mb-4  ${OpenSearch ? "block" : "hidden"}`}>
                <form className='w-full' onSubmit={handleSearch}>
                    <input
                        type="text"
                        className={`w-full rounded-full bg-gray-200 px-4 py-1 text-12 border-none outline-none`}
                        placeholder='search here'
                        value={Search}
                        onChange={handleFilter}
                    />
                </form>
                <button className='absolute end-2' onClick={() => { setOpenSearch(false); setSearch("") }}>
                    <UtensilsCrossedIcon className='w-4 h-4' />
                </button>
            </div>
            <div className={cn(`radio_btuon_list flex flex-col gap-1 ps-8`, checkboxListClassName)}>
                {
                    ((Search.length > 0)
                        ?
                        checkboxList.filter((item) => item.name.toLowerCase().includes(Search.toLowerCase()))
                        : checkboxList)

                        ?.map((item: checkboxItem, itemIndex: number) => (
                            <div className={cn(`list-group flex gap-2`, CheckboxItemClassName)} key={itemIndex}>
                                <input className={cn(`form-check-input me-1 text-sm`, checkboxClassName)}
                                    type="checkbox"
                                    value={item.value}
                                    name={item.name}
                                    onChange={(e) => handleChange(e, selectedList, setselectedList)}
                                    checked={selectedList.includes(item.value)}
                                />
                                <label className={cn(`form-check-label text-sm   text-gray-500`, itemLabelclassName)}>{item.name}</label>
                            </div>
                        ))
                }
            </div>

        </div>
    )
}

export default CustomCheckbox



// import React, { Dispatch, FC, useState } from 'react'
// import { RadioGroup } from './RadioGroup'
// import { cn } from '@/lib/utils'
// import { checkboxItem } from '../types'

// interface CustomCheckboxProps {
//     title: string,
//     checkboxList: checkboxItem[],
//     name: string,
//     className?: string,
//     titleClassName?: string,
//     checkboxListClassName?: string,
//     CheckboxItemClassName?: string,
//     checkboxClassName?: string,
//     itemLabelclassName?: string,
//     handleChange: ( e: any) => void
// }



// const CustomCheckbox: FC<CustomCheckboxProps> = ({ title, checkboxList, name, className, titleClassName, checkboxListClassName, CheckboxItemClassName, checkboxClassName, itemLabelclassName, handleChange }) => {
//     return (
//         <div className={cn(`list-group p-5`, className)}>
//             <h3 className={cn(`text-base font-semibold mb-4 uppercase`, titleClassName)}>{title}</h3>
//             <div className={cn(`radio_btuon_list flex flex-col gap-1`, checkboxListClassName)}>
//                 {
//                     checkboxList?.map((item: checkboxItem, itemIndex: number) => (
//                         <div className={cn(`list-group flex gap-2`, CheckboxItemClassName)} key={itemIndex}>
//                             <input className={cn(`form-check-input me-1`, checkboxClassName)} type="checkbox" value={item.value} name={item.name} onChange={(e) => handleChange(e)} />
//                             <label className={cn(`form-check-label text-base text-gray-500`, itemLabelclassName)}>{item.name}</label>
//                         </div>
//                     ))
//                 }
//             </div>

//         </div>
//     )
// }

// export default CustomCheckbox