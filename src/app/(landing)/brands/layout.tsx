
import React from "react"
import { Button } from "@/components/ui/button"
import IconClose from "@/components/svg/IconClose"
import FilterComponent from "../products/_components/FilterComponent"
import HeroSection from "../products/_components/HeroSection"
import Hero from "./_components/Hero"

type Props = {}

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-slate-100 min-h-screen w-screen pt-[80px]' >
            {/* <Hero /> */}
            <div className="flex container gap-0 mx-auto component w-full ">
                {children}
            </div>
        </div>
    )
}

export default layout