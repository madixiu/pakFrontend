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

function Topbar() {
  const router = useRouter();

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
    <div className="w-full p-2 flex flex-col items-center text-sm font-medium">
      <div className="flex flex-row justify-center items-center gap-10 w-fit">
        <div className="flex justify-center items-center">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            className="transition-all duration-300 ease-in-out"
            // width={isScrolled ? 60 : 80}
            // height={isScrolled ? 60 : 80}
            width={80}
            height={80}
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-6 justify-center items-center">
            {/* Phone & search */}
            <div className="flex items-center gap-7">
              <div className="relative">
                <input
                  type="text"
                  placeholder="جستجو"
                  className="bg-neutral-200 rounded-xl px-4 py-2 pr-8"
                />
                <FaSearch className="absolute rounded-lg size-6 bg-neutral-100 p-1 left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              <div className="flex flex-row gap-2">
                <span className="text-gray-700">صدای مشتری:</span>
                <div>
                  <span className="text-black font-semibold">
                    021-9606-0946
                  </span>
                </div>
              </div>
              {/* Left buttons */}
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 bg-neutral-100 hover:bg-neutral-200 p-3 rounded-xl cursor-pointer">
                  <FaStore />
                  نمایندگی ها
                </button>
                <button className="flex items-center gap-1 bg-neutral-100 hover:bg-neutral-200 p-3 rounded-xl cursor-pointer">
                  <FaShoppingCart />
                  خرید محصولات
                </button>
              </div>
            </div>
            {/* Bottom nav */}
            <div className="w-full flex justify-center gap-6 text-gray-700">
              <div className="relative">
                <button className="bg-[#2d60a5] text-white rounded-xl p-3 flex items-center gap-1">
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
                </button>
                {/* dropdown could go here */}
              </div>
              <div
                className="flex flex-row gap-1 items-center cursor-pointer hover:text-[#2d60a5] hover:bg-neutral-100 rounded-xl"
                onClick={() => handleClick("/")}
              >
                <RiHome5Line />
                <span>صفحه اصلی</span>
              </div>
              <div
                className="flex flex-row gap-1 cursor-pointer items-center hover:text-[#2d60a5]"
                onClick={() => handleClick("/")}
              >
                <MdOutlineFactory />
                کارخانه و خدمات
              </div>
              <div
                className="flex flex-row gap-1 cursor-pointer items-center hover:text-[#2d60a5]"
                onClick={() => handleClick("/")}
              >
                <PiRadio />
                <span>اخبار و اطلاعیه‌ها</span>
              </div>
              <div
                className="flex flex-row gap-1 cursor-pointer items-center hover:text-[#2d60a5]"
                onClick={() => handleClick("/")}
              >
                <PiBagSimpleBold />
                <span>استخدام</span>
              </div>
              <div
                className="flex flex-row gap-1 cursor-pointer items-center hover:text-[#2d60a5]"
                onClick={() => handleClick("/")}
              >
                <MdFormatListBulleted />
                <span>درباره ما</span>
              </div>
              <div
                className="flex flex-row gap-1 cursor-pointer items-center hover:text-[#2d60a5]"
                onClick={() => handleClick("/contact")}
              >
                <BsTelephone />
                <span> تماس با ما</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
