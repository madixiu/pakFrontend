"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="flex flex-col bg-[#274181] w-full justify-center items-center py-20">
      <h2 className="text-white text-2xl font-extrabold mb-5">دسته بندی ها</h2>
      <div className="flex flex-row gap-2">
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
    <div
      className={`flex w-fit p-7 rounded-2xl hover:bg-[#ff5d00] cursor-pointer transition-colors duration-300 hover:shadow-xl ${
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
          // className="dark:invert"
        />
        <span className="font-bold text-white">{title}</span>
      </div>
    </div>
  );
}

const CategoryData = [
  { id: 1, title: "خامه", image: "/cream.svg", slug: "cream" },
  { id: 2, title: "شیر", image: "/milk.svg", slug: "milk" },
  { id: 3, title: "کره", image: "/butter.svg", slug: "butter" },
  { id: 4, title: "پنیر", image: "/cheese.svg", slug: "cheese" },
  { id: 5, title: "ماست", image: "/yogurt.svg", slug: "yogurt" },
  { id: 6, title: "دوغ", image: "/doogh.svg", slug: "doogh" },
];
