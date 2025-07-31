import { FaPhone, FaSearch, FaShoppingCart, FaStore } from "react-icons/fa";
import Image from "next/image";
function Topbar() {
  return (
    <div className="w-full border border-blue-500 p-2 flex flex-col items-center text-sm font-medium">
      <div className="flex flex-row justify-center items-center">
        <div>logo</div>

        <div className="flex justify-between items-center px-6 mb-2">
          {/* Logo */}
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
            پاک
          </div>

          {/* Phone & search */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="جستجو"
                className="border rounded-full px-4 py-1 pr-8"
              />
              <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <span className="text-gray-700">
              صدای مشتری:
              <a className="text-black font-semibold">021-9606-0946</a>
            </span>
            {/* Left buttons */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 border px-3 py-1 rounded">
                <FaShoppingCart />
                خرید محصولات
              </button>
              <button className="flex items-center gap-1 border px-3 py-1 rounded">
                <FaStore />
                نمایندگی ها
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="w-full flex justify-center gap-6 text-gray-700">
        <div className="relative">
          <button className="bg-blue-600 text-white px-4 py-1 rounded flex items-center gap-1">
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
        <button className="font-bold text-black">صفحه اصلی</button>
        <button>کارخانه و خدمات</button>
        <button>اخبار و اطلاعیه‌ها</button>
        <button>استخدام</button>
        <button>درباره ما</button>
        <button>تماس با ما</button>
      </div>
      {/* Top row */}

    </div>
  );
}

export default Topbar;
