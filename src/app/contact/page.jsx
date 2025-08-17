import { SlLocationPin } from "react-icons/sl";
import { LuMail } from "react-icons/lu";
import { BsWhatsapp, BsTelephone, BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { GoArrowUpLeft } from "react-icons/go";

export default function Contact() {
  return (
    <div className="flex flex-row p-40">
      <div className="flex flex-col flex-1 gap-10">
        <div className="flex flex-row flex-1 gap-2">
          <div className="flex items-center justify-center bg-neutral-100 aspect-square h-12 rounded-full">
            <BsTelephone />
          </div>
          <div className="flex flex-col">
            <span className="font-bold">شماره تماس</span>
            <span className="text-xs">تلفن گویا: 02160940000</span>
            <span className="text-xs">صدای مشتری: 02160946094 </span>
            <span className="text-xs">کارخانه لبنی: 60943448-021</span>
            <span className="text-xs">پخش سراسری: 60943440-021</span>
          </div>
        </div>
        <div className="flex flex-row flex-1 gap-2">
          <div className="flex items-center justify-center bg-neutral-100 aspect-square h-12 rounded-full">
            <LuMail />
          </div>
          <div className="flex flex-col">
            <span className="font-bold">پست الکترونیک</span>
            <span className="text-xs">info@pak.com</span>
          </div>
        </div>
        <div className="flex flex-row flex-1 gap-2">
          <div className="flex items-center justify-center bg-neutral-100 aspect-square h-12 rounded-full">
            <SlLocationPin />
          </div>
          <div className="flex flex-col">
            <span className="font-bold">آدرس</span>
            <span className="text-xs">تهران، کیلومتر 3 بزرگراه فتح</span>
          </div>
        </div>
        <div className="flex flex-row flex-1 gap-2">
          {/* <div className="flex items-center justify-center bg-neutral-100 aspect-square h-12 rounded-full">
            <SlLocationPin />
          </div> */}
          <div className="flex flex-col gap-5">
            <span className="font-bold">شبکه های اجتماعی</span>

            <div className="flex flex-row gap-3">
              <div className="flex items-center justify-center bg-neutral-100 aspect-square h-12 rounded-full hover:bg-[#ff7023] cursor-pointer hover:text-white">
                <BsInstagram />
              </div>
              <div className="flex items-center justify-center bg-neutral-100 aspect-square h-12 rounded-full hover:bg-[#ff7023] cursor-pointer hover:text-white">
                <FiYoutube />
              </div>

              <div className="flex items-center justify-center bg-neutral-100 aspect-square h-12 rounded-full hover:bg-[#ff7023] cursor-pointer hover:text-white">
                <BsWhatsapp />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //? **************************COL 2nd******************************* */}
      <div className="flex flex-col flex-1 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-7 w-[50%]">
          <div className="">
            <span className="font-bold text-sm">با ما در ارتباط باشید</span>
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="bg-transparent placeholder:text-xs rounded-3xl px-4 py-2 pr-8 border border-[#e9e9e9] w-full"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="شماره همراه"
              className="bg-transparent placeholder:text-xs rounded-3xl px-4 py-2 pr-8 border border-[#e9e9e9] w-full"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="موضوع"
              className="bg-transparent placeholder:text-xs rounded-3xl px-4 py-2 pr-8 border border-[#e9e9e9] w-full"
            />
          </div>
          <div className="w-full">
            <textarea
              type=""
              placeholder="پیام"
              className="bg-transparent placeholder:text-xs rounded-3xl px-4 py-2 pr-8 border border-[#e9e9e9] w-full min-h-30 max-h-30"
            />
          </div>
          <div className="bg-amber-600 gap-2 cursor-pointer hover: text-white flex justify-center items-center w-full py-4 rounded-xl">
            <span>ارسال</span>
            <GoArrowUpLeft />
          </div>
        </div>
      </div>
    </div>
  );
}
