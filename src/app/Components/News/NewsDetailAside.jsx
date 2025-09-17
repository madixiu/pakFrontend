"use client"

import Image from "next/image";
import { ImgUrl } from "@/lib/api";
import { fallbackImage } from "@/lib/constant";
import { useRouter } from "next/navigation";
function NewsDetailAside({ recentNews }) {
  const router = useRouter()
  function handleClick(id) {
    router.push(`/news/${id}`);
  }
  return ( 
    <div>
      <h3 className="font-bold text-lg mb-3">آخرین اخبار</h3>
      <div className="flex flex-col gap-3">
        {recentNews.map((item) => (
          <div key={item.id} className="flex gap-2 items-center justify-start  hover:shadow rounded-2xl cursor-pointer py-5"  onClick={() => handleClick(item.id)}>
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
              <p className="text-sm text-clip line-clamp-2">{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
   );
}

export default NewsDetailAside;