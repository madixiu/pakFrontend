"use client"; // Ensure this component is treated as a client component

import { useEffect, useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Image from "next/image";
import { apiUrl } from "@/lib/api";
import { fallbackImage } from "@/lib/constant";
import { isoToJalali } from "@/lib/utils";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { useRouter } from "next/navigation";

export default function News() {

    const router = useRouter();

  function handleClick(id) {
    router.push(`/news/${id}`);
  }

  const [NewsData, setNewsData] = useState([]);
  const [FirstPost, setFirstPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl(`/api/news/`), {
          cache: "no-store",
        });
        const data = await response.json();
        setFirstPost(data[0] || {});
        setNewsData(data.slice(1));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once on mount

  if (!FirstPost.id) return null;

  return (
    <div>
      <BreadCrumb path={["خانه", "اخبار"]} />
      {/* //? Main News Div */}
      <div className="flex justify-center flex-col items-center" onClick={() => handleClick(FirstPost.id)}>
        <div className="py-10">
          <span className="flex justify-center items-center font-bold text-3xl">
            اخبار
          </span>
          <span className="flex justify-center items-center font-bold text-3xl">
            و مطالب خواندنی
          </span>
        </div>
        <div className="flex flex-row justify-start items-center my-15 relative w-[60%] cursor-pointer">
          <Image
            src={FirstPost.image ? FirstPost.image : fallbackImage}
            alt={FirstPost.title}
            width={500}
            height={300}
            className="rounded-2xl z-50 hover:z-0 duration-300"
          />
          <div className="absolute right-[450px] transition-transform duration-300 ease-in-out hover:-translate-x-[50px] z-10 hover:z-60 w-fit">
            <div className="flex flex-col p-5 bg-white shadow-2xl rounded-2xl gap-5 justify-around h-[80%]">
              <div className="bg-[#e7edf6] rounded-xl py-1 px-4 shadow w-fit">
                <span className="text-xs">اخبار</span>
              </div>
              <div className="max-w-[90%]">
                <span className="font-bold">{FirstPost.title}</span>
              </div>
              <div className="max-w-[80%]">
                <span className="text-xs line-clamp-2">
                  {FirstPost.summary}
                </span>
              </div>
              <div className="flex flex-row gap-2 w-fit">
                <Image src="/calendar.svg" alt="News" width={16} height={16} />
                <span className="text-xs">
                  {isoToJalali(FirstPost.published_date)}
                </span>
              </div>
              <div className="flex justify-end items-center">
                <div className="bg-[#ff5d00] rounded-xl shadow-xs p-4 cursor-pointer aspect-square max-h-12 hover:bg-[#ff5d60] w-fit">
                  <MdOutlineArrowBackIos className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //?Archive mode  */}
      <Archive data={NewsData || []} />
    </div>
  );
}

function Archive({ data }) {
  const router = useRouter();

  function handleClick(id) {
    router.push(`/news/${id}`);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex justify-between items-st flex-row  w-[80%]">
        <span className="flex justify-center items-center font-bold text-3xl">
          آرشیو مقالات
        </span>
        <div className="flex flex-row gap-5">
          <span className="hover:text-[#ff5d00] cursor-pointer">جدیدترین</span>
          <span className="hover:text-[#ff5d00] cursor-pointer">
            پر بازدید ترین
          </span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-15 my-20 w-[80%]">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center gap-2 rounded-2xl hover:shadow cursor-pointer"
            onClick={() => handleClick(item.id)}
          >
            <Image
              src={item.image ? item.image : fallbackImage}
              alt={item.title}
              width={300}
              height={100}
              className="rounded-xl w-full aspect-[16/10]"
            />
            <div className="flex flex-col w-full gap-5 p-2">
              <div className="bg-[#e7edf6] rounded-xl py-1 px-4 shadow w-fit">
                <span className="text-xs">اخبار</span>
              </div>
              <div>
                <span className="text-sm font-bold line-clamp-1">
                  {item.title}
                </span>
              </div>
              <div>
                <span className="text-xs line-clamp-2">{item.summary}</span>
              </div>
              <div className="flex flex-row gap-2">
                <Image src="/calendar.svg" alt="News" width={16} height={16} />
                <span className="text-xs">
                  {isoToJalali(item.published_date)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}