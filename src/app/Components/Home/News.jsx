"use client";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import { BiCalendar } from "react-icons/bi";
import Image from "next/image";
import { useRouter } from "next/navigation";


function HomeNews() {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/news`);
  };
  const data = {
    news: [
      {
        id: 1,
        title: "فواید شیر غنی‌شده برای سلامتی کودکان",
        description:
          "شیر غنی‌شده پاک با ویتامین‌ها و مواد معدنی، انتخابی ایده‌آل برای رشد و سلامت کودکان است. در این ...",
        date: "۲۱ فروردین ۱۴۰۴",
      },
      {
        id: 2,
        title: "داستان نیم قرن کیفیت با پاک",
        description:
          "با بیش از 50 سال تجربه، پاک چگونه به نامی قابل اعتماد در صنعت لبنیات تبدیل شد؟ نگاهی به ...",
        date: "۲۱ فروردین ۱۴۰۴",
      },
    ],
    blog: [
      {
        id: 1,
        title: "راز سلامتی دستگاه گوارش",
        description:
          "ماست‌های پروبیوتیک پاک چگونه به بهبود سلامت گوارش کمک می‌کنند؟ در این مقاله، علم پشت این محصول را کشف کنید ...",
        date: "۲۱ فروردین ۱۴۰۴",
      },
      {
        id: 2,
        title: "گامی به سوی تولید پایدار",
        description:
          "ماست‌های پروبیوتیک پاک چگونه به بهبود سلامت گوارش کمک می‌کنند؟ در این مقاله، علم پشت این محصول را کشف کنید ...",
        date: "۲۱ فروردین ۱۴۰۴",
      },
      {
        id: 3,
        title: "معرفی پنیرهای جدید پاک: طعمی برای هر ذائقه",
        description:
          "از پنیرهای سنتی تا مدرن، پاک تنوعی بی‌نظیر ارائه می‌دهد. در این مقاله، جدیدترین محصولات پنیری ما را بشناسید ...",
        date: "۲۱ فروردین ۱۴۰۴",
      },
    ],
  };
  return (
    <div className="bg-[#e7edf6] pt-10 pb-25">
      <div className="mx-40">
        <div className="flex flex-row py-15">
          <div className="flex flex-1 flex-col">
            <span className="text-black">مقالات ما</span>
            <span className="text-black font-extrabold text-3xl">
              اخبــــــار و مطالب خواندنی
            </span>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-white text-black px-5 py-3 rounded-2xl hover:bg-neutral-200 cursor-pointer">
              <div
                className="flex flex-row justify-center items-center gap-1"
                onClick={() => {handleClick()}}
              >
                <span>مشاهده</span>
                <GoArrowUpLeft />
              </div>
            </button>
          </div>
        </div>
        {/* ******************************************************** */}
        <div className="flex flex-row flex-1">
          <div className="flex flex-col gap-10 flex-1 p-5">
            {data.news.map((item) => (
              <div key={item.id} className="flex-1 flex flex-row gap-2">
                <div className="group relative overflow-hidden rounded-3xl h-fit cursor-pointer">
                  {/* Image */}
                  <Image
                    src="/Home/News/news1.png"
                    alt="News Image"
                    width={300}
                    height={100}
                    className="rounded-3xl transition-opacity group-hover:opacity-90"
                  />

                  {/* Semi-transparent blue overlay on hover */}
                  <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl"></div>

                  {/* White circle with centered icon (appears on hover) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <GoArrowUpRight className="text-gray-800 w-5 h-5" />{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="bg-white rounded-xl py-1 px-4 shadow w-fit">
                    <span className="text-xs">اخبار</span>
                  </div>
                  <div>
                    <span className="font-bold ">
                      فواید شیر غنی‌شده برای سلامتی کودکان
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-[#636363]">
                      شیر غنی‌شده پاک با ویتامین‌ها و مواد معدنی، انتخابی
                      ایده‌آل برای رشد و سلامت کودکان است. در این ...
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <BiCalendar color="#636363" />
                    <span className="text-xs text-[#636363]">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#F4F4F4] w-[2]"></div>
          <div className="flex flex-col gap-10 p-5 flex-1">
            {data.blog.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <div>
                  <span className="font-bold">{item.title}</span>
                </div>
                <div>
                  <span className="text-sm text-[##636363]">
                    {item.description}
                  </span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <BiCalendar color="#636363" />
                  <span className="text-xs text-[#636363]">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNews;
