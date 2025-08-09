import Image from "next/image";
function History() {
  return (
    <div>
      <div className="flex flex-row gap-5 my-10 px-15">
        <span>درباره ما</span>
        <span className="font-bold text-2xl">تاریخچه‌ای پُر افتخار، ریشه‌دار در کیفیت</span>
      </div>
      <div className="flex flex-row justify-center items-center gap-3 relative">
        <Image
          src={"/history/history1bw.jpg"}
          className="aspect-[268/346] object-cover rounded-3xl shadow-2xs"
          alt={"history image"}
          width={268}
          height={100}
        />
        <div className="relative w-fi">
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

export default History;
