import Image from "next/image";

function About() {
  return (
    <div className="flex flex-row py-15 bg-[#e7edf6]">
      <div className="flex flex-col flex-1 justify-center items-center mx-10">
        <div className="items-start w-full mb-5">
          <span className="font-light text-sm">درباره ما</span>
        </div>
        <div className="items-start w-full">
          <span>شرکت لبنیات و بستنی</span>
        </div>
        <div className="items-start w-full">
          <span>پاستوریزه پاک</span>
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

export default About;
