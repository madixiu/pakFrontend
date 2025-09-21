"use client";
import { useRouter } from "next/navigation";
function FooterNav() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 flex-1">
      <div>
        <span>دسترسی سریع</span>
      </div>
      <div className="w-10 h-1 bg-amber-600 rounded-3xl"></div>
      <div className="flex flex-col gap-4 mt-10">
        <div
          className="flex flex-row gap-3 items-center"
          onClick={() => router.push("/")}
        >
          <span className="text-shadow-2xs text-xs font-bold hover:text-[#285caa] cursor-pointer">
            صفحه اصلی
          </span>
        </div>
        <div
          className="flex flex-row gap-3 items-center"
          onClick={() => router.push("/news")}
        >
          <span className="text-shadow-2xs text-xs font-bold hover:text-[#285caa] cursor-pointer">
            اخبار و اطلاعیه ها
          </span>
        </div>
        <div
          className="flex flex-row gap-3 items-center"
          onClick={() => router.push("/")}
        >
          <span className="text-shadow-2xs text-xs font-bold hover:text-[#285caa] cursor-pointer">
            امور مجامع و سهام
          </span>
        </div>
        <div
          className="flex flex-row gap-3 items-center"
          onClick={() => router.push("/about")}
        >
          <span className="text-shadow-2xs text-xs font-bold hover:text-[#285caa] cursor-pointer">
            درباره لبنیات پاک
          </span>
        </div>
        <div
          className="flex flex-row gap-3 items-center"
          onClick={() => router.push("/contact")}
        >
          <span className="text-shadow-2xs text-xs font-bold hover:text-[#285caa] cursor-pointer">
            تماس با ما
          </span>
        </div>
      </div>
    </div>
  );
}

export default FooterNav;
