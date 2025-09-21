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


