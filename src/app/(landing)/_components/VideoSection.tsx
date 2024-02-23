"use client"

import { DefaultPageProps } from '@/app/type'
import { Pause, PlayIcon } from 'lucide-react';
import React, { FC, useEffect, useState } from 'react'

const VideoSection: FC<DefaultPageProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(!isPlaying);
    const video: any = document.getElementById('video');
    if (isPlaying) {
      video?.pause();
    } else {
      const pause = document.getElementsByClassName("pause")
      pause[0].classList.replace("hidden", "flex")
      video?.play();
      setTimeout(() => {
        pause[0].classList.replace("flex", "hidden")
      }, 300)
    }
  };

  return (
    <div className="w-screen component">
      <div className="w-full container mx-auto">
        <div className="relative w-full h-full overflow-hidden">
          {/* <video id='video' src={'/video/v1.mp4'} width={"100%"} className='w-full h-full ' autoPlay controls> </video> */}
          <video id='video' src={'/video/v1.mp4'} className='w-full h-full object-cover object-center' onClick={handleVideoClick}> </video>
          <div className={`absolute start-0 top-0 h-full w-full flex justify-center items-center z-20 bg-black/50 ${isPlaying ? "hidden" : "block"}`} onClick={handleVideoClick}>
            <div className={`h-[60px] w-[60px] flex justify-center items-center rounded-full bg-white/50 border border-brown text-brown ${isPlaying ? "hidden" : "block"}`}>
              <PlayIcon />
            </div>
          </div>
          <div className={`pause absolute start-0 top-0 h-full w-full hidden justify-center items-center z-20 bg-black/50 transition-all duration-300 ease-linear`} onClick={handleVideoClick}>
            <div className={`h-[60px] w-[60px] flex justify-center items-center rounded-full bg-white/50 border border-brown text-brown  animate-ping`}>
              <Pause />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection