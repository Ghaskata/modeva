"use client";

import CartComponent from "@/app/components/CartComponent";
import CatalogCompo from "@/app/components/CatalogCompo";
import ProfileCompo from "@/app/components/ProfileCompo";
import { NavLinkList } from "@/app/data/staticData";
import {
  ChevronDown,
  ChevronUp,
  Menu,
  Search,
  ShoppingCart,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useState, useEffect, useRef, Suspense } from "react";

type Props = {};

const Header = (props: Props) => {
  const [openCart, setopenCart] = useState(false);
  const [openProfile, setopenProfile] = useState(false);
  const [openCatalog, setopenCatalog] = useState(false);
  const [openSearch, setopenSearch] = useState<boolean>(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // let verticalScrollPx = 0
  const verticalScrollPx = useRef(0);

  useEffect(() => {
    setopenCatalog(false);
    const header = document.getElementsByClassName("header");
    if (pathname !== "/" && pathname !== "/products") {
      header[0].classList.replace("bg-transparent", "bg-black");
      header[0].classList.replace("h-[120px]", "h-[90px]");
    } else {
      header[0].classList.replace("bg-black", "bg-transparent");
      header[0].classList.replace("h-[90px]", "h-[120px]");
    }
  }, [pathname]);
  useEffect(() => {
    verticalScrollPx.current = window.scrollY;
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      verticalScrollPx.current = window.scrollY;
      const header = document.getElementsByClassName("header");

      // console.log(verticalScrollPx)
      if (verticalScrollPx.current < 300) {
        header[0].classList.replace("bg-black", "bg-transparent");
        header[0].classList.replace("h-[90px]", "h-[120px]");
      } else {
        header[0].classList.replace("bg-transparent", "bg-black");
        header[0].classList.replace("h-[120px]", "h-[90px]");
      }
    };

    // Add the event listener
    if (pathname === "/" || pathname === "/products") {
      window.addEventListener("scroll", handleScroll);
    }

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [verticalScrollPx, pathname]);

  return (
    <div className="header w-screen h-[120px] mx-auto fixed bg-transparent transition-all duration-500 ease-linear z-50">
      {openCatalog && (
        <div
          className="backdrop absolute top-0 start-0 h-screen w-screen bg-black/30"
          onClick={() => setopenCatalog(false)}
        ></div>
      )}
      <div className="container mx-auto flex justify-between items-center h-full px-5 sm:px-0">
        <Link href={"/"} className="logo group/logo ">
          <h1 className="uppercase text-42 font-semibold text-text1 group-hover/logo:text-brown transition-all duration-500 ease-linear ">
            <span className="text-brown group-hover/logo:text-text1 transition-all duration-500 ease-linear ">
              M
            </span>
            odeva
          </h1>
        </Link>
        <div className="navbar__part w-full hidden xl:block">
          <ul className="relative flex justify-between items-center w-1/2 mx-auto text-14 font-popins">
            <button
              className="flex items-center justify-center gap-4 text-text1 hover:text-brown cursor-pointer transition-all duration-300 ease-linear"
              onClick={() => setopenCatalog(true)}
            >
              <h3 className="">Catalog</h3>
              {!openCatalog ? <ChevronDown /> : <ChevronUp />}
            </button>
            <CatalogCompo
              openCatalog={openCatalog}
              setopenCatalog={setopenCatalog}
            />

            {NavLinkList.map((linkItem, index) => (
              <li key={index}>
                <Link
                  href={linkItem.href}
                  className="text-text1 hover:text-brown transition-all duration-300 ease-linear"
                  key={index}
                >
                  {linkItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative actions__part">
          <div className="flex gap-2 md:gap-4 items-center justify-end">
            <div className="relative searchPart hidden lg:block">
              <div className="absolute top-2 start-2">
                <Search className="h-4 w-4 text-secoundary"></Search>
              </div>
              <input
                type="text"
                placeholder="search"
                className="ps-10 py-1 rounded w-[250px] border-0 focus:border-0 focus:outline-none"
              />
            </div>
            <button className="text-white block lg:hidden">
              <Search className="h-6 w-6" />
            </button>
            <button
              className="text-white group/profile"
              onClick={() => setopenProfile(!openProfile)}
            >
              <User2Icon className="h-6 w-6" />
              {/* <div className='hidden group-hover/profile:block'>
                                <ProfileCompo />
                            </div>
                            {openProfile && <ProfileCompo />} */}
            </button>
            <button
              className="text-white  group/cart"
              onClick={() => setopenCart(!openCart)}
            >
              <ShoppingCart className="h-6 w-6" />
              <CartComponent openCart={openCart} setopenCart={setopenCart} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
