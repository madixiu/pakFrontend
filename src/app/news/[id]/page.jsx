// app/components/NewsLayout.tsx

import Image from "next/image";
import { apiUrl } from "@/lib/api";
import { fallbackImage } from "@/lib/constant";
import { isoToJalali } from "@/lib/utils";

export default async function NewsLayout({params}) {
  let data = [];
  const id = await params.id;
  try {
    const res = await fetch(apiUrl(`/api/news/${id}/`), {
      // Optionally, add cache: "no-store" for fresh data
      cache: "no-store",
    });
    data = await res.json();
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
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-sm text-white">Travel</p>
            <h2 className="text-xl font-bold text-white shadow-xl">
             {data.title}
            </h2>
            <p className="text-xs text-gray-200 mt-2">
              {isoToJalali(data.published_date)}
            </p>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Article 1 */}
          <div className="rounded-lg border overflow-hidden shadow">
            <Image
              src="/images/car.jpg"
              alt="Car show"
              width={400}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <p className="text-sm text-gray-500">Business</p>
              <h3 className="font-semibold">
                Before New York Auto Show, Cars Take Their Own Star Turns
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Miracle Septimus · 1 min ago
              </p>
            </div>
          </div>

          {/* Article 2 */}
          <div className="rounded-lg border overflow-hidden shadow">
            <Image
              src="/images/oil.jpg"
              alt="Oil market"
              width={400}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <p className="text-sm text-gray-500">Politics</p>
              <h3 className="font-semibold">
                U.S. Risks Roiling Oil Markets in Trying to Tighten Sanctions
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Zain Dorwart · 5 min ago
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-auto flex flex-col gap-6">
        {/* Trending News */}
        <div className="rounded-lg border p-4 shadow">
          <h3 className="font-bold text-lg mb-3">Trending News</h3>
          <div className="flex flex-col gap-3">
            {[
              {
                category: "Sport",
                title:
                  "Tiger Woods, in a Stirring Return to the Top, Captures the Masters at 43",
              },
              {
                category: "Health",
                title: "10 Years After an Exercise Study, Benefits Persist",
              },
              {
                category: "Business",
                title:
                  "Buying a Tesla Seems Pretty Easy. But There Are a Few Things to Know.",
              },
              {
                category: "Food",
                title: "What to cook this week, Top 15 Breakfast.",
              },
              {
                category: "Sport",
                title: "Roger Federer’s 101 Titles: By the Numbers",
              },
              {
                category: "Health",
                title:
                  "Gene-Edited Babies: What a Chinese Scientist Told an American Mentor",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2 items-start">
                <div className="w-14 h-14 bg-gray-200 rounded-md"></div>
                <div>
                  <p className="text-xs text-gray-500">{item.category}</p>
                  <p className="text-sm font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Sections */}
        <div className="rounded-lg border p-4 shadow">
          <h3 className="font-bold text-lg mb-3">Trending Sections</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="flex justify-between">
              <span>Politics</span>{" "}
              <span className="text-gray-500">60,250 Views</span>
            </li>
            <li className="flex justify-between">
              <span>Business</span>{" "}
              <span className="text-gray-500">45,000 Views</span>
            </li>
            <li className="flex justify-between">
              <span>Sports</span>{" "}
              <span className="text-gray-500">24,500 Views</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
