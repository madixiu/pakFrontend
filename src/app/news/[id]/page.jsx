// app/components/NewsLayout.tsx

import Image from "next/image";
import { apiUrl, ImgUrl } from "@/lib/api";
import { fallbackImage } from "@/lib/constant";
import { isoToJalali } from "@/lib/utils";
// import HTMLReactParser from "html-react-parser";
import parse from "html-react-parser";
import NewsDetailAside from "@/app/Components/News/NewsDetailAside";

export default async function NewsLayout({ params }) {
  let data = [];
  let recentNews = [];
  const id = await params.id;
  try {
    const res = await fetch(apiUrl(`/api/news/${id}/`), {
      // Optionally, add cache: "no-store" for fresh data
      cache: "no-store",
    });
    data = await res.json();
    recentNews = data.recent_news;
    data = data.news;
    // let breadcrumpTitle = data.product.group + " " + data.product.feature;
    // BreadCrumbData.push(breadcrumpTitle);
  } catch (error) {
    console.error("Error fetching product data:", error);
  }

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 p-4 justify-center">
      {/* Main Content */}
      <div className="flex flex-col gap-4 lg:w-[50%]">
        {/* Featured Article */}
        <div className="relative rounded-lg overflow-hidden shadow">
          <Image
            src={data.image ? data.image : fallbackImage}
            alt="Featured Article"
            width={800}
            height={400}
            className="w-full aspect-[16/9] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
            {/* <p className="text-sm text-white">Travel</p> */}
            <h2 className="text-xl font-bold text-white shadow-xl">
              {data.title}
            </h2>
            <p className="text-xs text-gray-200 mt-2 shadow-xl">
              {isoToJalali(data.published_date)}
            </p>
          </div>
        </div>

        {/* Article Grid */}
        <div className="flex justify-center">
          {/* Article 1 */}
          <div className="rounded-lg  overflow-hidden shadow-xs mt-10 w-full leading-10">
            {parse(data.content)}
          </div>

          {/* Article 2 */}
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-[30%] flex">
        <NewsDetailAside recentNews={recentNews} />
      </div>
      {/* <aside className="w-full lg:w-[30%] flex flex-col gap-6">
        <div className="rounded-xl p-4 shadow border border-slate-50">
          <h3 className="font-bold text-lg mb-3">آخرین اخبار</h3>
          <div className="flex flex-col gap-3">
            {recentNews.map((item) => (
              <div
                key={item.id}
                className="flex gap-2 items-center justify-start  hover:shadow rounded-2xl cursor-pointer py-5"
              >
                <div className="w-38 aspect-[16/10] bg-gray-200 rounded-md ms-2">
                  <Image
                    src={item.image ? ImgUrl(item.image) : fallbackImage}
                    alt={item.title}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col w-[70%] gap-2">
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="text-sm text-clip line-clamp-2">
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside> */}
    </div>
  );
}
