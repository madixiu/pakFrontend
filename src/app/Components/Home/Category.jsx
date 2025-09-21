"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function Category() {
  const pathname = usePathname();
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="flex flex-col bg-[#274181] w-full justify-center items-center py-10 sm:py-20 relative">
      <h2 className="text-white text-2xl font-extrabold mb-5">دسته بندی ها</h2>
      <div className="hidden sm:flex flex-row gap-2">
        {CategoryData.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            image={category.image}
            slug={category.slug}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 sm:hidden gap-2">
        {CategoryData.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            image={category.image}
            slug={category.slug}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </div>
      <div className={`${pathname === "/" ? "" : "hidden"}`}>

      <Image
        src="/drop1.png"
        alt="Description of the image"
        width={500}
        height={500}
        className={`absolute right-[-2%] top-[-34%] ${
          pathname === "/" ? "" : "hidden"
        }
        hidden w-0 aspect-[2/1] sm:w-[300px] sm:block md:w-[400px] md:block lg:w-[500px]
        `}
      />
      <Image
        src="/drop2.png"
        alt="Description of the image"
        width={250}
        height={500}
        className={`absolute left-[0] bottom-[-50%] rotate-[-0deg] ${
          pathname === "/" ? "" : "hidden"
        }
        
         hidden w-0 aspect-[1/1.2] sm:w-[150px] sm:block md:w-[150px] md:block lg:w-[250px] h-auto
        `}
      />
      </div>
    </div>
  );
}

function CategoryCard({
  title,
  image,
  slug,
  selectedCategory,
  setSelectedCategory,
}) {
  const router = useRouter();
  const pathname = usePathname(); // e.g., "/products/yogurt"
  const segments = pathname.split("/").filter((segment) => segment !== ""); // Split and remove empty strings
  const lastSegment = segments[segments.length - 1]; // "yogurt"

  const handleClick = () => {
    setSelectedCategory(slug);

    // if (pathname == "/")
    router.push(`/products/${slug}`);
    return;
  };

  return (
    <div>
      <div
        className={`flex w-fit p-7 rounded-2xl lg:hover:bg-[#ff5d00] cursor-pointer transition-colors duration-300 hover:shadow-xl ${
          lastSegment === slug ? " bg-[#ff5d00]" : "bg-[#3d5797]"
        }`}
        onClick={handleClick}
      >
        <div className="flex flex-col justify-center items-center">
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="aspect-square w-[60px] sm:w-[100px]"
          />
          <span className="font-bold text-white">{title}</span>
        </div>
      </div>
    </div>
  );
}

const CategoryData = [
  { id: 1, title: "شیر", image: "/milk.svg", slug: "milk" },
  { id: 2, title: "خامه", image: "/cream.svg", slug: "cream" },
  { id: 3, title: "کره", image: "/butter.svg", slug: "butter" },
  { id: 4, title: "پنیر", image: "/cheese.svg", slug: "cheese" },
  { id: 5, title: "ماست", image: "/yogurt.svg", slug: "yogurt" },
  { id: 6, title: "دوغ", image: "/doogh.svg", slug: "doogh" },
  { id: 7, title: "بستنی", image: "/ice-cream.svg", slug: "icecream" },
  { id: 8, title: "کشک", image: "/curd.svg", slug: "curd" },
];
