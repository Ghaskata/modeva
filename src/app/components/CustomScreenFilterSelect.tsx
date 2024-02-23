"use client"
import { ChevronDown, ChevronDownIcon, ChevronRight } from 'lucide-react'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { cn } from '../lib/util'
import { checkboxItem, smallScreencheckboxItem } from '../type'

type Props = {
    data: smallScreencheckboxItem,
    selectedList: string[],
    setselectedList: React.Dispatch<SetStateAction<string[]>>
}

const CustomScreenFilterSelect: FC<Props> = ({ data, selectedList, setselectedList }) => {
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
    return (
        <div className={`py-2 group/listItem`}>
            <div className="flex items-center justify-between w-full text-secoundary group-hover/listItem:text-black group-hover/listItem:font-semibold">
                <h3 className='text-24'>{data.title}</h3>
                <ChevronRight className='h-6 w-6 block group-hover/listItem:hidden' />
                <ChevronDown className='h-6 w-6 hidden group-hover/listItem:block' />
            </div>
            <div className='w-full hidden group-hover/listItem:block px-5 py-3'>
                <ul className='w-full px-5 text-secoundary text-20 flex flex-col gap-1'>
                    {
                        data?.optionList?.map((option: checkboxItem, index: number) => (
                            <li className='flex justify-between items-center w-full' key={index}>
                                <input className={cn(`form-check-input me-1  h-5 w-5`)}
                                    type="checkbox"
                                    value={option.value}
                                    name={option.value}
                                    onChange={(e) => handleChange(e, selectedList, setselectedList)}
                                    checked={selectedList.includes(option.value)}
                                />
                                <label htmlFor={option.value} className="">{option.name}</label>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default CustomScreenFilterSelect