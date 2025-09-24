import Image from "next/image";
import BreadCrumb from "../Components/BreadCrumb";

import { BsTelephone } from "react-icons/bs";
import Corporates from "../Components/About/Corporate";
export default function About() {
  const BreadCrumbData = ["خانه", "درباره ما"];
  return (
    <div>
      <BreadCrumb path={BreadCrumbData} />
      <AboutComponent />
      <HistoryComponent />
      <Corporates />
    </div>
  );
}

function AboutComponent() {
  return (
    <div className="flex flex-row py-15">
      <div className="flex flex-col flex-1 justify-center items-center mx-10">
        <div className="items-start w-full mb-5">
          <span className="font-light text-sm">درباره ما</span>
        </div>
        <div className="items-start w-full">
          <span className="text-3xl font-extrabold">شرکت لبنیات و بستنی</span>
        </div>
        <div className="items-start w-full">
          <span className="text-3xl font-bold">پاستوریزه پاک</span>
        </div>
        <div className="mt-5" dir="rtl">
          <p className="text-justify leading-10 text-gray-800">
            شرکت لبنیات پاستوریزه پاک در سال 1338 تحت لیسانس شرکت فرموست آمریکا
            و با نام تجاری پاک در تهران تأسیس گردید. سپس با خرید کارخانه کانادا
            "فراست" در سال ۱۳۴۹ و "الدورادو" در سال ۱۳۵۱ واحد بستنی خود را ایجاد
            کرد. همچنین با خرید کارخانه‌های پاک ساری، پاک شهرکرد و پاک سنندج،
            پوشش جغرافیایی خود را درکشور وسعت بخشیده و هم اکنون در قالب گروه
            لبنیات پاک و با رویکرد امنیت غذایی جامعه، ایجاد اشتغال، توسعه کمی و
            کیفی بازار، نوآوری و تنوع در محصولات، حفظ محیط زیست و در نهایت جلب
            رضایت و اعتماد مشتریان، در مسیر توسعه و خدمت رسانی گام بر می‌دارد.
            گروه لبنیات پاک با بیش از ۶۰ سال سابقه، تولید کننده انواع محصولات
            لبنی و بستنی به صورت پاستوریزه و استریلیزه می‌باشد.
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center">
        <Image
          src="/image1.png"
          alt="Description of the image"
          width={400}
          height={400}
          className="rounded-4xl"
        />
      </div>
    </div>
  );
}

function HistoryComponent() {
  return (
    <div className="bg-[#e7edf6] py-10 pb-30 my-10">
      <div className="flex flex-col gap-5 my-10 px-15 ">
        <span>تاریخچه ما</span>
        <span className="font-bold text-2xl">
          تاریخچه‌ای پر افتخار، ریشه‌دار در کیفیت
        </span>
      </div>
      <div className="flex flex-row justify-center items-center gap-3 relative">
        <Image
          src={"/history/history1bw.jpg"}
          className="aspect-[268/346] object-cover rounded-3xl shadow-2xs"
          alt={"history image"}
          width={268}
          height={100}
        />
        <div className="relative w-fit">
          <Image
            src={"/history/history2bw.jpg"}
            alt={"history image"}
            className="aspect-[417/346] object-cover rounded-3xl shadow-2xs"
            width={417}
            height={100}
          />
          <div className="absolute bottom-[-27%] right-[10%]  aspect-square bg-[#ff5d00] min-w-48 rounded-full">
            <div className="flex flex-col justify-center items-center h-full">
              <span className="text-2xl font-bold text-white">شرکت پاک</span>
              <span className="text-xl font-medium text-white">تاسیس ۱۳۳۸</span>
            </div>
          </div>
        </div>
        <Image
          src={"/history/history3bw.jpg"}
          alt={"history image"}
          className="aspect-[268/346] object-cover rounded-3xl shadow-2xs"
          width={268}
          height={100}
        />
        <Image
          src={"/history/history4bw.jpg"}
          alt={"history image"}
          className="aspect-[268/346] object-cover rounded-3xl shadow-2xs"
          width={268}
          height={100}
        />
      </div>
    </div>
  );
}
