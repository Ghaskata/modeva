"use client";

import React, { FC, useState, useEffect } from "react";
import { colors, productData } from "@/app/data/staticData";
import Image from "next/image";
import {
  BusFront,
  Check,
  Heart,
  IndianRupee,
  Minus,
  Plus,
  Settings,
  ShoppingBagIcon,
  Star,
  StarHalf,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

type Props = {
  params: {
    productId: string;
  };
};

const Page: FC<Props> = ({ params }) => {
  const [product, setproduct] = useState<any>({});
  const [quantity, setquantity] = useState(1);
  const [selectedColor, setselectedColor] = useState(colors[0]);

  useEffect(() => {
    // fetchSinglePro(params.productId).then((res) => {
    //     setproduct(res)
    // })
    const pro = productData.find((item) => item.id === +params.productId);
    setproduct(pro);
    console.log("====================");
    console.log("product >>> ", product);
    console.log("quantity = ", quantity);
    console.log("selected Color = ", selectedColor);
    console.log("=====================");
  }, [product, quantity, selectedColor, params.productId]);
  return (
    <div className="flex container mx-auto component min-h-screen lg:max-h-screen font-popins">
      <div className="w-full pt-[80px] flex justify-center items-center h-[inherit]">
        <div className="bg-white w-full h-full lg:h-[calc(90%)] shadow rounded-lg p-3 xsm:p-8 md:p-10  max-w-[1200px]">
          <div className="flex flex-col md:flex-row gap-2 lg:gap-5 w-full h-full">
            <div className="lg:flex-grow min-h-[500px] h-full w-full">
              <div className="flex flex-col-reverse sm:flex-row md:flex-col-reverse xl:flex-row w-full gap-2 lg:gap-5 h-full">
                <div className="w-full sm:w-[200px] md:w-full xl:w-[200px] flex flex-row sm:flex-col md:flex-row xl:flex-col gap-2 lg:gap-5  h-1/5 sm:h-full md:h-[150px] lg:h-1/5 xl:h-full">
                  <div className="image_container w-full h-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={659}
                      height={500}
                      className="w-full h-full object-center  hover:scale-150 transition-all duration-500 ease-linear"
                    />
                  </div>
                  <div className="image_container w-full h-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={659}
                      height={500}
                      className="w-full h-full object-center  hover:scale-150 transition-all duration-500 ease-linear"
                    />
                  </div>
                  <div className="image_container w-full h-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={659}
                      height={500}
                      className="w-full h-full object-center  hover:scale-150 transition-all duration-500 ease-linear"
                    />
                  </div>
                </div>
                <div className="relative flex-grow w-full h-full overflow-hidden">
                  <div className="absolute start-0 top-0 h-full w-full overflow-hidden">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={20}
                      freeMode={true}
                      autoplay={true}
                      pagination={true}
                      modules={[FreeMode, Autoplay, Pagination]}
                      className="h-full w-full"
                    >
                      <SwiperSlide className="overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={659}
                          height={700}
                          className="w-full h-full object-center object-cover"
                        />
                      </SwiperSlide>
                      <SwiperSlide className="overflow-hidden">
                        <Image
                          src={"/images/product1.png"}
                          alt={product.name}
                          width={659}
                          height={700}
                          className="w-full h-full object-center object-cover"
                        />
                      </SwiperSlide>
                      <SwiperSlide className="overflow-hidden">
                        <Image
                          src={"/images/product2.png"}
                          alt={product.name}
                          width={659}
                          height={700}
                          className="w-full h-full object-center object-cover"
                        />
                      </SwiperSlide>
                      <SwiperSlide className="overflow-hidden">
                        <Image
                          src={"/images/product3.png"}
                          alt={product.name}
                          width={659}
                          height={700}
                          className="w-full h-full object-center object-cover"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-bg-gray p-5 rounded-lg w-full lg:h-full md:w-full lg:max-w-[700px] flex flex-col gap-4">
              <div className="flex w-full flex-col gap-2 mt-2 ">
                <div>
                  <h1 className="text-20 md:text-24  uppercase text-text2 font-semibold">
                    PROduct NAmE
                  </h1>
                  <h3 className="text-18 md:text-20  uppercase text-text2 flex items-center gap-2 ">
                    <IndianRupee className="h-4 w-4" /> 125
                  </h3>
                </div>
                <div className="ratting flex gap-1 text-yellow-500 text-10 md:text-12">
                  <Star className="h-4 w-4 md:h-5 md:w-5" />
                  <Star className="h-4 w-4 md:h-5 md:w-5" />
                  <Star className="h-4 w-4 md:h-5 md:w-5" />
                  <Star className="h-4 w-4 md:h-5 md:w-5" />
                  <StarHalf className="h-4 w-4 md:h-5 md:w-5" />
                </div>
              </div>
              <hr />
              <div className="qauntity w-full flex flex-col gap-2">
                <h4 className="text-14 md:text-18 text-black font-semibold ">
                  Quantity
                </h4>
                <div className="Quantity border border-secoundary flex text-secoundary h-8 w-36 font-semibold ">
                  <button
                    className="h-full w-full flex text-14 md:text-16 justify-center items-center bg-white hover:text-black hover:bg-black/20"
                    onClick={() =>
                      setquantity((quantity) =>
                        quantity === 1 ? quantity : quantity - 1
                      )
                    }
                  >
                    <Minus />
                  </button>
                  <div className="h-full w-full flex text-14 md:text-16 justify-center items-center">
                    {quantity}
                  </div>
                  <button
                    className="h-full w-full flex text-14 md:text-16 justify-center items-center bg-white hover:text-black hover:bg-black/20"
                    onClick={() => setquantity(quantity + 1)}
                  >
                    <Plus />
                  </button>
                </div>
              </div>
              <hr />
              <div className="colors w-full flex flex-col gap-2">
                <h4 className="text-14 md:text-18 text-black font-semibold ">
                  Colors
                </h4>
                <div className="w-full text-secoundary text-20 flex gap-1 xsm:gap-2 md:gap-4">
                  {colors
                    ?.slice(0, 6)
                    .map((item: string, itemIndex: number) => (
                      <div
                        className={cn(
                          `form-check form-check-inline flex gap-2 lg:gap-3 `
                        )}
                        key={itemIndex}
                      >
                        <input
                          className={cn(`form-check-input hidden`)}
                          type="radio"
                          name={item}
                          id={item}
                          value={item}
                          onChange={(e) => setselectedColor(e.target.value)}
                          checked={item === selectedColor}
                        />
                        <label
                          htmlFor={item}
                          className={cn(
                            `form-check-label flex justify-center items-center text-10 text-white h-[30px] w-[30px] rounded-full`
                          )}
                          style={{ backgroundColor: `${item}` }}
                        >
                          {selectedColor == item && (
                            <Check className="text-white font-semibold h-5 w-5" />
                          )}
                        </label>
                      </div>
                    ))}
                </div>
              </div>
              <hr />
              <div className="features w-full flex flex-col gap-2">
                <h4 className="text-14 md:text-18 text-black font-semibold ">
                  Features
                </h4>
                <div className="text-secoundary text-12 md:text-14 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <BusFront className="h-5 w-5" />
                    <h4>Free delivery from $1000</h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShoppingBagIcon className="h-5 w-5" />
                    <h4>Free Stock pick up</h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5" />
                    <h4>Free delivery from $1000</h4>
                  </div>
                </div>
              </div>

              <div className="actions flex flex-col sm:flex-row md:flex-col lg:flex-row w-full gap-2 ">
                <button className="w-full h-10 z-20 text-14 md:text-16 uppercase  text-white relative bg-brown hover:bg-transparent before:absolute before:-z-10 before:top-0 before:start-0 before:w-full before:h-0 before:hover:bg-black before:hover:w-full before:hover:h-full before:transition-all before:duration-300 before:ease-linear rounded-none transtition-all duration-300 ease-linear">
                  Add To Cart
                </button>
                <Button
                  variant={"outline"}
                  className="w-full h-10 rounded-none border text-black hover:border-brown hover:text-brown"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
