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
                <div className="bg-[#ff5d00] rounded-xl shadow p-4 cursor-pointer aspect-square max-h-12 hover:bg-[#ff5d60] w-fit">
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


function Archive() {
    // fallback for demo
  // if (!products || products.length === 0) {
  //   products = [
  //     { id: 1, title: "محصول 1", fat: 10, image: "/test.png" },
  //     {
  //       id: 2,
  //       title: "محصول 2",
  //       fat: 20,
  //       image: "/test.png",
  //     },
  //     {
  //       id: 3,
  //       title: "محصول 3",
  //       fat: 30,
  //       image: "/test.png",
  //     },
  //     {
  //       id: 4,
  //       title: "محصول 4",
  //       fat: 40,
  //       image: "/test.png",
  //     },
  //     {
  //       id: 5,
  //       title: "محصول 5",
  //       fat: 50,
  //       image: "/test.png",
  //     },
  //     {
  //       id: 6,
  //       title: "محصول 6",
  //       fat: 60,
  //       image: "/test.png",
  //     },
  //     {
  //       id: 7,
  //       title: "محصول 7",
  //       fat: 70,
  //       image: "/test.png",
  //     },
  //     {
  //       id: 8,
  //       title: "محصول 8",
  //       fat: 80,
  //       image: "/test.png",
  //     }
  //   ];
  // }
  return ( 
    <div className="flex justify-center">
      <div className="flex justify-between items-st flex-row  w-[80%] bg-amber-100">
          <span className="flex justify-center items-center font-bold text-3xl">
            آرشیو مقالات
          </span>
          <div className="flex flex-row gap-5">
            <span>جدیدترین</span>
            <span>پر بازدید ترین</span>
          </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        GRID
      </div>
    </div>
  );
}
