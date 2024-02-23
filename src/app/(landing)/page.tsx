import React, { FC } from 'react'
import HeroSection from './_components/HeroSection'
import { DefaultPageProps } from '../type'
import CategorySection from './_components/CategorySection'
import BestForWomen from './_components/BestForWomen'
import BestForHappiness from './_components/BestForHappiness'
import ReviweSection from './_components/ReviweSection'
import ServiceSection from './_components/ServiceSection'
import VideoSection from './_components/VideoSection'
import "animate.css"

const page: FC<DefaultPageProps> = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <BestForWomen />
      <BestForHappiness />
      <ServiceSection />
      <VideoSection />
      <ReviweSection />
    </>
  )
}

export default page