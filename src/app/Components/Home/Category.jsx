import Image from "next/image";
// import CategoryCard from "./Home/CategoryCard";
function Category() {
  return (
    <div className="flex flex-col bg-[#274181] w-full justify-center items-center py-10">
      <h2 className="text-white text-2xl font-extrabold mb-5">دسته بندی ها</h2>
      <div className="flex flex-row gap-2">
        {CategoryData.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;

function CategoryCard({ title, image }) {
  return (
    <div className="bg-[#3d5797] flex w-fit p-7 rounded-2xl hover:bg-[#ff5d00] cursor-pointer transition-colors duration-500">
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
  { id: 1, title: "خامه", image: "/cream.svg" },
  { id: 2, title: "شیر", image: "/milk.svg" },
  { id: 3, title: "کره", image: "/butter.svg" },
  { id: 4, title: "پنیر", image: "/cheese.svg" },
  { id: 5, title: "ماست", image: "/yogurt.svg" },
  { id: 6, title: "دوغ", image: "/doogh.svg" },
];
