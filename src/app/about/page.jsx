import Image from "next/image";
import BreadCrumb from "../Components/BreadCrumb";

import { BsTelephone } from "react-icons/bs";

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
        <div className="mt-5">
          <span className="text-justify leading-7">
            ﺷــﺮﻛﺖ ﻟﺒﻨﯿــﺎت ﭘﺎﺳــﺘﻮرﯾﺰه ﭘــﺎک در ﺳــﺎل ﺗﺤــﺖ ﻟﯿﺴــﺎﻧﺲ ﺷــﺮﻛﺖ
            ﻓﻮرﻣﻮﺳــﺖ آﻣﺮﻳـﮑﺎ و ﺑـﺎ ﻧـﺎم ﺗﺠـﺎری ﭘـﺎک در ﺗﻬـﺮان . ﺗﺎﺳـﯿﺲ ﮔﺮدﻳـﺪ
            ﺳــﭙﺲ ﺑــﺎ ﺧﺮﻳــﺪ ﻛﺎرﺧﺎﻧــﻪ ﻛﺎﻧــﺎدا ”ﻓﺮاﺳــﺖ“ در ﺳــﺎل ۱۳۴۹ و
            ”اﻟــﺪورادو“ در ﺳــﺎل ۱۳۵۱ واﺣـﺪ ﺑﺴـﺘﻨﯽ ﺧـﻮد را اﻳﺠـﺎد ﻛـﺮد. ﻫﻤﭽﻨﯿـﻦ
            ﺑـﺎ ﺧﺮﻳـﺪ ﻛﺎرﺧﺎﻧـﻪ ﻫـﺎی ﭘﺎک ﺳـﺎری، ﭘـﺎک ﺷـﻬﺮﻛﺮد و ﭘـﺎک ﺳـﻨﻨﺪج، ﭘﻮﺷـﺶ
            ﺟﻐﺮاﻓﯿﺎﯾـﯽ ﺧـﻮد را درﻛﺸـﻮر وﺳـﻌﺖ ﺑﺨﺸـﯿﺪه و ﻫـﻢ اﻛﻨـﻮن در ﻗﺎﻟـﺐ ﮔـﺮوه
            ﻟﺒﻨﯿـﺎت ﭘـﺎک و ﺑـﺎ روﻳﮑـﺮد اﻣﻨﯿـﺖ ﻏﺬاﯾﯽ ﻣـﺮدم ، اﻳﺠﺎد اﺷـﺘﻐﺎل ،
            ﺗﻮﺳـﻌﻪ ﻛﻤـﯽ و ﻛﯿﻔـﯽ ﺑـﺎزار ، ﻧـﻮآوری و ﺗﻨـﻮ ع ﻣﺤﺼـﻮﻻت ، ﺣﻔـﻆ ﻣﺤﯿـﻂ
            زﻳﺴـﺖ و در ﻧﻬﺎﻳـﺖ ﺟﻠـﺐ رﺿﺎﻳـﺖ و اﻋﺘـﻤـﺎد ﻣﺸـﺘـﺮﻳﺎن ﻫﻤــﻮاره ﺑـﻪ ﻛـﺎر
            ﺧــﻮد اداﻣـﻪ ﻣـﯽ دﻫـﺪ. ﮔـﺮوه ﻟﺒﻨﯿـﺎت ﭘـﺎک ﺑـﺎ ﺑﯿـﺶ از ۶۰ ﺳـﺎل ﺳـﺎﺑﻘﻪ
            ، ﺗﻮﻟﯿـﺪ ﻛﻨﻨـﺪه اﻧـﻮاع ﻣﺤﺼـﻮﻻت ﻟﺒﻨـﯽ و ﺑﺴـﺘﻨﯽ ﺑﻪ ﺻـﻮرت ﭘﺎﺳـﺘﻮرﯾﺰه و
            . اﺳـﺘﺮﻳﻠﯿﺰه ﻣـﯽ ﺑﺎﺷـﺪ
          </span>
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

function Corporates() {
  return (
    <div className="flex justify-center">
      <div className="bg-[#e7edf6] w-[70%] rounded-2xl my-20">
        <div className="flex flex-row gap-10 justify-center items-center mt-10">
          <span>نمایندگی های ما</span>
          <span className="text-2xl font-bold">شرکت های زیر مجموعه پاک</span>
        </div>
        <div className="flex flex-row justify-center gap-20 my-20">
          <div className="flex flex-col items-center gap-2 hover:bg-white p-2 rounded-xl cursor-pointer">
            <div>
              <Image
                src={"/about/city1.jpg"}
                alt={"history image"}
                className="aspect-square object-cover rounded-full shadow-2xs"
                width={64}
                height={64}
              />
            </div>
            <div>
              <span>ساری</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 hover:bg-white p-2 rounded-xl cursor-pointer">
            <div>
              <Image
                src={"/about/city2.jpg"}
                alt={"history image"}
                className="aspect-square object-cover rounded-full shadow-2xs"
                width={64}
                height={64}
              />
            </div>
            <div>
              <span>سنندج</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 hover:bg-white p-2 rounded-xl cursor-pointer">
            <div>
              <Image
                src={"/about/city3.jpg"}
                alt={"history image"}
                className="aspect-square object-cover rounded-full shadow-2xs"
                width={64}
                height={64}
              />
            </div>
            <div>
              <span>شهرکرد</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row bg-[#285caa] p-10 rounded-xl mx-10 mb-10">
            <div className="flex flex-col gap-5 w-[50%]">
              <div>
                <span className="text-white font-bold">شرکت پاک شهرکرد</span>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex items-center justify-center bg-neutral-100 aspect-square lg:h-12 md:h-6 h-4 rounded-full">
                  <BsTelephone  className="md:h-4 h-2"/>
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-white text-xs">آدرس:</span>
                  </div>
                  <div className="w-[70%]">
                    <span className="text-white text-xs">
                      شهرکرد، شهرک صنعتی، میدان صنعت، بلوار کارآفرینان، گلستان
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex items-center justify-center bg-neutral-100 aspect-square lg:h-12 md:h-6 h-4 rounded-full">
                  <BsTelephone  className="md:h-4 h-2"/>
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-white text-xs">شماره تماس:</span>
                  </div>
                  <div>
                    <span className="text-white text-xs">
                      تلفن: 33332003-009838
                    </span>
                  </div>
                  <div>
                    <span className="text-white text-xs">
                      سایت فروش: 33336100-009838
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex items-center justify-center bg-neutral-100 aspect-square lg:h-12 md:h-6 h-4 rounded-full">
                  <BsTelephone  className="md:h-4 h-2"/>
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-white text-xs">فکس:</span>
                  </div>
                  <div className="">
                    <span className="text-white text-xs">33332482-009838
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex items-center justify-center bg-neutral-100 aspect-square lg:h-12 md:h-6 h-4 rounded-full">
                  <BsTelephone  className="md:h-4 h-2"/>
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-white text-xs">کد پستی:</span>
                  </div>
                  <div className="">
                    <span className="text-white text-xs">8813653745</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[50%] justify-center items-center">
              <div className="aspect-square bg-slate-50 rounded-2xl shadow-lg p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25928.07407464602!2d51.308093!3d35.67677400000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe5e6f4e17fb%3A0x702668486e2f8b3c!2sPak%20Dairy%20Co.!5e0!3m2!1sen!2sus!4v1734157115739!5m2!1sen!2sus"
                  width={"100%"}
                  height={"100%"}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-square"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
