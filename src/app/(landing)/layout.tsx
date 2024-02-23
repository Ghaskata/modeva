
import React, { useEffect } from 'react'
import Footer from './_layout_components/Footer'
import Header from './_layout_components/Header'




const layout = ({ children }: { children: React.ReactNode }) => {
   

    return (
        <div className='relative min-h-screen w-screen'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default layout