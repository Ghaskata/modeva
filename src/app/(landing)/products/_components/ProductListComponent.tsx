"use client"

import React, { FC, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ListFilterIcon } from 'lucide-react'
import { productData } from '@/app/data/staticData'
import Product from '@/app/components/Product'
import SingleProduct from './SingleProduct'
import { Button } from '@/components/ui/button'

interface props {
    productList: []
}

const ProductListComponent: FC<props> = ({ productList }) => {

    // const [openFilter, setopenFilter] = useState(false)
    const [page, setpage] = useState(1)
    const [products, setproducts] = useState(productData)
    const [totalPages, settotalPages] = useState(Math.ceil(products.length / 6))
    console.log("total page >>> ", totalPages)
    const indexOfLastItem = page * 6;
    const indexOfFirstItem = indexOfLastItem - 6;

    return (
        <div className='w-full h-full'>
            <div className="grid grid-cols-2 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 3xl:grid-cols-6 gap-5 sm:gap-5 md:gap-5 lg:gap-10 xl:gap-5 xxl:gap-5 w-full px-3 sm:px-0">
                {
                    products
                        .slice(indexOfFirstItem, indexOfLastItem)
                        .map((item, index) => (
                            <div key={index}>
                                <SingleProduct data={item} />
                            </div>
                        ))
                }
            </div>
            <hr className='my-5 w-full' />
            <div className='pagination  flex justify-between items-center w-full'>
                <button onClick={() => setpage(page - 1)} disabled={page === 1}><Button variant={"outline"} className={`flex gap-1 md:gap-3 ${page === 1 && "bg-transparent"}`}><span><ArrowLeft /></span> Previous</Button></button>
                <div className='sm:flex justify-center items-center gap-2 hidden'>
                    {
                        Array.from({ length: totalPages }).map((_, i) => (
                            <button onClick={() => setpage(i + 1)}><Button variant={"outline"} className={`${page === i + 1 ? "bg-black text-white hover:bg-black hover:text-white" : "hover:bg-secoundary"} border-none`}>{i + 1}</Button></button>
                        ))
                    }
                </div>
                <button onClick={() => setpage(page + 1)} disabled={page === totalPages}><Button variant={"outline"} className={`flex gap-1 md:gap-3 ${page === totalPages && "bg-transparent"}`} >Next <span><ArrowRight /></span></Button></button>
            </div>
        </div>
    )
}

export default ProductListComponent