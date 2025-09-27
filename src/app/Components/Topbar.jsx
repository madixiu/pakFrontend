"use client";

import { FaSearch, FaShoppingCart, FaStore } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RiHome5Line } from "react-icons/ri";
import { MdOutlineFactory } from "react-icons/md";
import { PiRadio } from "react-icons/pi";
import { PiBagSimpleBold } from "react-icons/pi";
import { MdFormatListBulleted } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useRef, useEffect } from "react";

function Topbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //! Attention ****************************************************************************
  //! the click outside of the mobile view container is NOT working and needs work to do!!!
  //! **************************************************************************************
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Custom hook to detect clicks outside of component
  const useOutsideClick = (callback) => {
    const ref = useRef();

    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };

      document.addEventListener("click", handleClick);
      // setIsMenuOpen(false)
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [callback]);

    return ref;
  };

  // Use the custom hook
  const menuRef = useOutsideClick(closeMenu);

  const handleClick = (path) => {
    // Navigate to a route
    router.push(path);

    // For dynamic navigation with search params
    // const params = new URLSearchParams(searchParams);
    // params.set('from', 'home');
    // router.push(`/about?${params.toString()}`);

    // Alternative methods
    // router.replace() - replaces current history entry
    // router.refresh() - refreshes current route
    // router.back() - goes back
    // router.forward() - goes forward
    // router.prefetch() - prefetches a route
  };

  return (
    <div>
      <div className="w-full p-2 flex-col items-center text-sm font-medium sm:flex hidden">
        <div className=" flex-row justify-center items-center gap-10 w-fit sm:flex hidden">
          <div className="flex justify-center items-center">
            <Image
              src="/logo.png" // Replace with your logo path
              alt="Logo"
              className="transition-all duration-300 ease-in-out"
              // width={isScrolled ? 60 : 80}
              // height={isScrolled ? 60 : 80}
              width={90}
              height={90}
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-6 justify-center items-center">
              {/* Phone & search */}
              {/* //! SEARCH BAR NOT FUNCTIONAL */}
              {/* <div className="w-full flex items-start gap-7">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="جستجو"
                    className="bg-neutral-200 rounded-xl px-4 py-2 pr-8"
                  />
                  <FaSearch className="absolute rounded-lg size-6 bg-neutral-100 p-1 left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div> */}
              {/* Bottom nav */}
              <div className="w-full flex justify-center gap-6 text-gray-700">
                <div className="relative">
                  {/* <button className="bg-[#2d60a5] text-white rounded-xl p-3 flex items-center gap-1">
                    دسته بندی ها
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button> */}
                  {/* dropdown could go here */}
                </div>
                <div
                  className="flex flex-row gap-1 items-start justify-center cursor-pointer hover:text-[#2d60a5] p-3 hover:bg-neutral-100 rounded-xl"
                  onClick={() => handleClick("/")}
                >
                  <RiHome5Line size={16} />
                  <span className="font-bold">صفحه اصلی</span>
                </div>
                {/* <div
                  className="flex flex-row gap-1 cursor-pointer items-center hover:text-[#2d60a5]"
                  onClick={() => handleClick("/")}
                >
                  <MdOutlineFactory />
                  کارخانه و خدمات
                </div> */}
                <div
                  className="flex flex-row gap-1 cursor-pointer items-center hover:text-[#2d60a5] p-3 hover:bg-neutral-100 rounded-xl"
                  onClick={() => handleClick("/news")}
                >
                  <PiRadio size={16} />
                  <span className="font-bold">اخبار و اطلاعیه‌ها</span>
                </div>
                <div
                  className="flex flex-row gap-1 cursor-pointer items-center hover:text-[#2d60a5] p-3 hover:bg-neutral-100 rounded-xl"
                  onClick={() => handleClick("/shareholders")}
                >
                  <PiBagSimpleBold size={16} />
                  <span className="font-bold">امور مجامع و سهام</span>
                </div>
                <div
                  className="flex flex-row gap-1 cursor-pointer items-center hover:text-[#2d60a5] p-3 hover:bg-neutral-100 rounded-xl"
                  onClick={() => handleClick("/about")}
                >
                  <MdFormatListBulleted size={16} />
                  <span className="font-bold">درباره ما</span>
                </div>
                <div
                  className="flex flex-row gap-1 cursor-pointer items-center justify-center hover:text-[#2d60a5] p-3 hover:bg-neutral-100 rounded-xl"
                  onClick={() => handleClick("/contact")}
                >
                  <BsTelephone size={16} />
                  <span className="font-bold"> تماس با ما</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //? MOBile View ///////////////////////////////////////////////////// */}
      <div className="bg-gray-100 flex sm:hidden py-5 shadow-4xl items-center border-b-gray-500">
        {/* Empty spacer on left for balance */}
        {/* Hamburger menu on the right */}
        <div
          className="w-10 h-10 flex items-center justify-center rounded-full active:bg-gray-400 transition-colors"
          onClick={() => toggleMenu()}
        >
          <GiHamburgerMenu className="text-2xl text-gray-700" />
        </div>

        {/* Logo centered */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            className="transition-all duration-300 ease-in-out"
            width={60}
            height={60}
          />
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          {/* This empty space balances the hamburger icon on the right */}
        </div>

        <div
          className={`absolute bg-white border border-gray-200 shadow-xl rounded-xl top-20 right-5 p-1 z-50 transition-all duration-300 ease-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          }`}
        >
          <div className="flex flex-col gap-1">
            <div
              className="flex flex-row justify-start items-center gap-1 bg-gray-100 px-6 py-4 rounded-2xl"
              onClick={() => handleClick("/")}
            >
              <RiHome5Line />
              <span>صفحه اصلی</span>
            </div>
            <div
              className="flex flex-row justify-center items-center gap-1 bg-gray-100 px-6 py-4 rounded-2xl"
              onClick={() => handleClick("/news")}
            >
              <PiRadio />
              <span>اخبار و اطلاعیه‌ها</span>
            </div>
            <div
              className="flex flex-row justify-start items-center gap-1 bg-gray-100 px-6 py-4 rounded-2xl"
              onClick={() => handleClick("/about")}
            >
              <MdFormatListBulleted />
              <span>درباره ما</span>
            </div>
            <div
              className="flex flex-row justify-start items-center gap-1 bg-gray-100 px-6 py-4 rounded-2xl"
              onClick={() => handleClick("/contact")}
            >
              <BsTelephone />
              <span> تماس با ما</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
