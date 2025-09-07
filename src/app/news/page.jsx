import BreadCrumb from "../Components/BreadCrumb";
import Image from "next/image";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
export default function News() {
  return (
    <div>
      <BreadCrumb path={["خانه", "اخبار"]} />
      {/* //? Main News Div */}
      <div className="flex justify-center flex-col items-center">
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
            src="/newsTest.png"
            alt="News"
            width={500}
            height={300}
            className="rounded-2xl"
          />
          <div className="absolute left-[100px] transition-transform duration-300 ease-in-out hover:-translate-x-[50px]">
            <div className="flex flex-col p-5 bg-white shadow-2xl rounded-2xl gap-5 justify-around h-[80%]">
              <div className="bg-[#e7edf6] rounded-xl py-1 px-4 shadow w-fit">
                <span className="text-xs">اخبار</span>
              </div>
              <div>
                <span className="font-bold">
                  فواید شیر غنی‌شده برای سلامتی کودکان
                </span>
              </div>
              <div className="max-w-[90%]">
                <span className="text-xs">
                  شیر غنی‌شده پاک با ویتامین‌ها و مواد معدنی، انتخابی ایده‌آل
                  برای رشد و سلامت کودکان است. در این ...
                </span>
              </div>
              <div className="flex flex-row gap-2">
                <Image src="/calendar.svg" alt="News" width={16} height={16} />
                <span className="text-xs">۲۱ فروردین ۱۴۰۴</span>
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
      <Archive />
    </div>
  );
}

async function Archive() {
  const news = [
    {
      id: 1,
      title: "خبر 1",
      summary: 10,
      image: "/newsTest.png",
      date: "۲۱ فروردین ۱۴۰۴",
    },
    {
      id: 2,
      title: "خبر 2",
      summary: 20,
      image: "/newsTest.png",
      date: "۲۱ فروردین ۱۴۰۴",
    },
    {
      id: 3,
      title: "خبر 3",
      summary: 30,
      image: "/newsTest.png",
      date: "۲۱ فروردین ۱۴۰۴",
    },
    {
      id: 4,
      title: "خبر 4",
      summary: 40,
      image: "/newsTest.png",
      date: "۲۱ فروردین ۱۴۰۴",
    },
    {
      id: 5,
      title: "خبر 5",
      summary: 50,
      image: "/newsTest.png",
      date: "۲۱ فروردین ۱۴۰۴",
    },
    {
      id: 6,
      title: "خبر 6",
      summary: 60,
      image: "/newsTest.png",
      date: "۲۱ فروردین ۱۴۰۴",
    },
    {
      id: 7,
      title: "خبر 7",
      summary: 70,
      image: "/newsTest.png",
      date: "۲۱ فروردین ۱۴۰۴",
    },
    {
      id: 8,
      title: "خبر 8",
      summary: 80,
      image: "/newsTest.png",
      date: "۲۱ فروردین ۱۴۰۴",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex justify-between items-st flex-row  w-[80%]">
        <span className="flex justify-center items-center font-bold text-3xl">
          آرشیو مقالات
        </span>
        <div className="flex flex-row gap-5">
          <span className="hover:text-[#ff5d00] cursor-pointer">جدیدترین</span>
          <span className="hover:text-[#ff5d00] cursor-pointer">پر بازدید ترین</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 my-20 w-[80%]">
        {news.map((item) => (
          <div className="flex flex-col justify-center items-center gap-5 rounded-2xl hover:shadow cursor-pointer">
            <Image src={item.image} alt={item.title} width={300} height={120} className="rounded-xl w-full"/>
            <div className="flex flex-col w-full gap-3 p-2">
              <div className="bg-[#e7edf6] rounded-xl py-1 px-4 shadow w-fit">
                <span className="text-xs">اخبار</span>
              </div>
              <div>
                <span className="text-sm font-bold">{item.title}</span>
              </div>
              <div>
                <span className="text-xs">{item.summary}</span>
              </div>
              <div className="flex flex-row gap-2">
                <Image src="/calendar.svg" alt="News" width={16} height={16} />
                <span className="text-xs">۲۱ فروردین ۱۴۰۴</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
