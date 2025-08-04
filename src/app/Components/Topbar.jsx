import { FaPhone, FaSearch, FaShoppingCart, FaStore } from "react-icons/fa";
import Image from "next/image";
function Topbar() {
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
              <div className="mx-5">
                <span className="text-gray-700">
                  صدای مشتری:
                  <a className="text-black font-semibold">021-9606-0946</a>
                </span>

              </div>
              {/* Left buttons */}
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 bg-neutral-100 hover:bg-neutral-200 p-3 rounded-xl cursor-pointer">
                  <FaShoppingCart />
                  خرید محصولات
                </button>
                <button className="flex items-center gap-1 bg-neutral-100 hover:bg-neutral-200 p-3 rounded-xl cursor-pointer">
                  <FaStore />
                  نمایندگی ها
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
              <button className="text-black">صفحه اصلی</button>
              <button>کارخانه و خدمات</button>
              <button>اخبار و اطلاعیه‌ها</button>
              <button>استخدام</button>
              <button>درباره ما</button>
              <button>تماس با ما</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
