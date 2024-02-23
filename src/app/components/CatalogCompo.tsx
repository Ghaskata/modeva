
import Link from 'next/link'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { catalogData } from '../data/staticData'

type Props = {
    openCatalog: boolean,
    setopenCatalog: React.Dispatch<SetStateAction<boolean>>
}

const CatalogCompo: FC<Props> = ({ openCatalog, setopenCatalog }) => {
    // useEffect(() => {
    //     document.addEventListener("click", (event: any) => {
    //         // setopenCatalog(false)
    //     })
    // })
    console.log("=========== open catalog >>> ", openCatalog)




    return (
        <div className={`w-[250px] shadow rounded bg-white text-black p-4 absolute transition-all duration-1200 ease-linear font-popins ${openCatalog ? "-top-12" : "-top-[680px]"} `}>
            <ul className='flex flex-col'>
                {
                    catalogData.map((item) => (
                        <li className='w-full text-secoundary border-b last:border-b-0 group/item' onClick={() => setopenCatalog(false)}>
                            <Link href={item.href} className='flex w-full gap-3 justify-start items-center group-hover/item:bg-brown group-hover/item:text-white py-3 px-4'>
                                {<item.icon className='h-5 w-5' />}
                                <h2>
                                    {item.name}
                                </h2>
                            </Link>
                        </li>
                    ))
                }
                <li className='w-full text-secoundary border-b last:border-b-0 group/item'>
                    <button className='flex w-full gap-3 justify-start items-center  py-3 px-4' onClick={() => setopenCatalog(false)}>
                        <h2 className='w-full text-center text-lg font-mono font-semibold text-brown'>
                            close catalog
                        </h2>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default CatalogCompo