import React, { Dispatch, FC, useState } from 'react'
import { cn } from '@/lib/utils'
import { radioItem } from '../type'

interface CustomRadioProps {
    title: string,
    radioList: radioItem[],
    name: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    className?: string,
    titleClassName?: string,
    RadioListClassName?: string,
    RadioItemClassName?: string,
    radioClassName?: string,
    itemLabelclassName?: string
}

const CustomRadio: FC<CustomRadioProps> = ({ title, radioList, name, value, setValue, className, titleClassName, RadioListClassName, RadioItemClassName, radioClassName, itemLabelclassName }) => {
    return (
        <div className={cn(`Radio_group p-5 font-popins`, className)}>
            <h3 className={cn(`text-18 font-semibold mb-4 uppercase text-brown`, titleClassName)}>{title}</h3>
            <div className={cn(`radio_btuon_list flex flex-col gap-1 ps-8`, RadioListClassName)}>
                {
                    radioList?.map((item: radioItem, itemIndex: number) => (
                        <div className={cn(`form-check form-check-inline flex gap-3`, RadioItemClassName)} key={itemIndex}>
                            <input
                                className={cn(`form-check-input`, radioClassName)}
                                type="radio"
                                name={name}
                                id={item.value}
                                value={item.value}
                                onChange={(e) => setValue(e.target.value)}
                                checked={item.value === value}
                            />
                            <label className={cn(`form-check-label text-sm text-gray-500`, itemLabelclassName)}>{item.name}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CustomRadio