"use client";
import { Button } from "@/components/ui/button";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {};

const HeroSection = (props: Props) => {
  const pathname = usePathname();
  const [swiperVisible, setswiperVisible] = useState(true);
  const searchParams = useSearchParams();
  const [category, setcategory] = useState<any>();
  const changeVisibility = useCallback(() => {
    if (pathname === "/products") {
      setswiperVisible(true);
    } else {
      setswiperVisible(false);
    }
  }, [pathname]);

  useEffect(() => {
    console.log("pathname >>> ", pathname);
    const category = searchParams.has("category")
      ? searchParams.get("category")
      : "";
    setcategory(category);
    console.log("category >>> ", category);

    changeVisibility();
  }, [pathname, searchParams, changeVisibility]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='slider relative w-screen h-[calc("50%")]'>
        <div className="swiper block">
          {swiperVisible && (
            <Swiper
              spaceBetween={30}
              autoplay={{
                delay: 1500,
              }}
              modules={[Autoplay]}
              className="mySwiper w-full h-[500px] "
            >
              <SwiperSlide className="w-full h-full overflow-hidden ">
                <Image
                  src={"/images/heroBg.png"}
                  alt="images1"
                  width={1440}
                  height={1024}
                  className="w-full h-full object-center object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full overflow-hidden ">
                <Image
                  src={"/images/categoryPhoto1.png"}
                  alt="images1"
                  width={666}
                  height={334}
                  className="w-full h-full object-center object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="w-full h-full overflow-hidden ">
                <Image
                  src={"/images/categoryPhoto2.png"}
                  alt="images1"
                  width={666}
                  height={334}
                  className="w-full h-full object-center object-cover"
                />
              </SwiperSlide>
            </Swiper>
          )}
        </div>
        <div className="absolute start-0 top-0 h-full w-full  z-20">
          <div className="container mx-auto flex flex-col gap-5 justify-center items-center h-full">
            <h2 className="text-text1 text-36 md:text-52 text-center animate__animated animate__fadeInDown">
              {category ? category : "100% Discount On All"} Products
            </h2>
            <Button
              className="flex justify-center items-center gap-3 hover:bg-black transition-all duration-500 ease-out animate__animated animate__fadeInUp"
              variant={"brown"}
              size={"md"}
            >
              See More{" "}
            </Button>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default HeroSection;
