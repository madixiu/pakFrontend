"use client";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import { BiCalendar } from "react-icons/bi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { isoToJalali } from "@/lib/utils"; // Assuming you have this utility
import { fallbackImage } from "@/lib/constant";
import { ImgUrl } from "@/lib/api";
function HomeNews({ data }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/news`);
  };

  if (!data) return null;

  // Assuming the API returns an array of news items
  // Split them into news and blog sections (first 2 for news, rest for blog)
  const newsItems = data.slice(0, 2);
  const blogItems = data.slice(2);

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
                onClick={() => {
                  handleClick();
                }}
              >
                <span>مشاهده</span>
                <GoArrowUpLeft />
              </div>
            </button>
          </div>
        </div>
        {/* ******************************************************** */}
        <div className="flex flex-row flex-1">
          <div className="flex flex-col gap-10 flex-1 p-5 cursor-pointer">
            {newsItems.map((item) => (
              <div key={item.id} className="flex-1 flex flex-row gap-2" onClick={() => router.push(`/news/${item.id}`)}>
                <div className="group relative overflow-hidden rounded-3xl h-fit cursor-pointer w-[35%]">
                  <Image
                    src={item.image ? ImgUrl(item.image) : fallbackImage} // Use API image or fallback
                    alt={item.title}
                    width={300}
                    height={100}
                    className="object-center rounded-3xl transition-opacity group-hover:opacity-90 aspect-[16/10] w-full"
                  />

                  {/* Semi-transparent blue overlay on hover */}
                  <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl"></div>

                  {/* White circle with centered icon (appears on hover) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <GoArrowUpRight className="text-gray-800 w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 w-[80%]">
                  <div className="bg-white rounded-xl py-1 px-4 shadow w-fit">
                    <span className="text-xs">اخبار</span>
                  </div>
                  <div>
                    <span className="font-bold">{item.title}</span>
                  </div>
                  <div>
                    <span className="text-sm text-[#636363]">
                      {item.summary || item.description}
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <BiCalendar color="#636363" />
                    <span className="text-xs text-[#636363]">
                      {isoToJalali(item.published_date)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#F4F4F4] w-[2]"></div>
          <div className="flex flex-col gap-10 p-5 flex-1">
            {blogItems.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 cursor-pointer" onClick={() => router.push(`/news/${item.id}`)}>
                <div>
                  <span className="font-bold">{item.title}</span>
                </div>
                <div>
                  <span className="text-sm text-[##636363]">
                    {item.summary || item.description}
                  </span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <BiCalendar color="#636363" />
                  <span className="text-xs text-[#636363]">
                    {isoToJalali(item.published_date)}
                  </span>
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
