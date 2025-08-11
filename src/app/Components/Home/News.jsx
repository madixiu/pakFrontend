import { GoArrowUpLeft } from "react-icons/go";
import { BiCalendar } from "react-icons/bi";

function News() {
  const data = {
    news: [
      {
        id: 1,
        title: "فواید شیر غنی‌شده برای سلامتی کودکان",
        description:
          "شیر غنی‌شده پاک با ویتامین‌ها و مواد معدنی، انتخابی ایده‌آل برای رشد و سلامت کودکان است. در این ...",
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
        description: "از پنیرهای سنتی تا مدرن، پاک تنوعی بی‌نظیر ارائه می‌دهد. در این مقاله، جدیدترین محصولات پنیری ما را بشناسید ...",
        date: "۲۱ فروردین ۱۴۰۴",
      },
    ],
  };
  return (
    <div className="bg-[#e7edf6] my-20">
      <div className="mx-40">
        <div className="flex flex-row  py-20">
          <div className="flex flex-1 flex-col">
            <span className="text-black">مقالات ما</span>
            <span className="text-black font-extrabold text-3xl">
              اخبــــــار و مطالب خواندنی
            </span>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-white text-black px-5 py-3 rounded-2xl hover:bg-neutral-200 cursor-pointer">
              <div className="flex flex-row justify-center items-center gap-1">
                <span>مشاهده</span>
                <GoArrowUpLeft />
              </div>
            </button>
          </div>
        </div>
        {/* ******************************************************** */}
        <div className="flex flex-row flex-1">
          <div className="bg-amber-300 flex-1 flex flex-row gap-2">
            <div>col</div>
            <div>
              <div>row</div>
              <div>row</div>
              <div>row</div>
            </div>
          </div>
          <div className="bg-white w-[2]"></div>
          <div className="flex flex-col gap-10 p-5 flex-1">
            {data.blog.map((item) => (
              <div className="flex flex-col gap-2">
                <div>
                  <span className="font-bold">{item.title}</span>
                </div>
                <div>
                  <span className="text-sm">{item.description}</span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <BiCalendar />
                  <span className="text-xs">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
