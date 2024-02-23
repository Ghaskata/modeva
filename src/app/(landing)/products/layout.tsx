import React from "react"
import ProductListComponent from "./_components/ProductListComponent"
import HeroSection from "./_components/HeroSection"
import FilterComponent from "./_components/FilterComponent"
import { Button } from "@/components/ui/button"
import IconClose from "@/components/svg/IconClose"
import SmallScreenFilter from "./_components/SmallScreenFilter"

type Props = {}

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-slate-100 min-h-screen w-screen' >
            <HeroSection />
            {children}
            {/* <div className="flex container mx-auto component  max-h-screen">
            </div> */}
        </div>
    )
}

export default layout