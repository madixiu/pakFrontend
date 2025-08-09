import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { GoArrowUpLeft } from "react-icons/go";
import Image from "next/image";
function Products() {
  const ProductsExample = [
    {
      id: 1,
      name: "ماست یونانی پاک",
      fat: "۴٪",
      image: "/Home/Products/yogurt.png",
    },
    {
      id: 2,
      name: "خامه صبحانه",
      fat: "۳۵٪",
      image: "/Home/Products/cream.png",
    },
    {
      id: 3,
      name: "پنیر پیتزا",
      fat: "۲۵٪",
      image: "/Home/Products/cheese.png",
    },
    {
      id: 4,
      name: "کره",
      fat: "۸۰٪",
      image: "/Home/Products/butter.png",
    },
  ];
  return (
    <div className="flex mx-32">
      <div className="bg-[#274181] px-15 py-20 flex flex-col w-full rounded-3xl">
        <div className="flex">
          <div className="flex flex-col flex-1">
            <span className="text-white">محصولات ما</span>
            <span className="text-white font-extrabold text-3xl">
              تنوعی بی‌نظیر و کیفیتی پایدار
            </span>
          </div>
          <div className="flex flex-1 justify-end items-center">
            <div className="gap-3 flex flex-row ">
              <button className="bg-[#425a94] text-white max-h-12 px-5 py-3 rounded-2xl hover:bg-[#ff5d00] cursor-pointer shadow-xl">
                <div className="flex flex-row justify-center items-center gap-1">
                  <span>مشاهده همه</span>
                  <GoArrowUpLeft />
                </div>
              </button>
              <div className="bg-white rounded-xl shadow p-4 cursor-pointer aspect-square max-h-12 hover:bg-neutral-200">
                <MdOutlineArrowForwardIos />
              </div>
              <div className="bg-white rounded-xl shadow p-4 cursor-pointer aspect-square max-h-12 hover:bg-neutral-200">
                <MdOutlineArrowBackIos />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-15 justify-center gap-5 h-80">
          {ProductsExample.map((product) => (
            <div key={product.id} className="flex flex-col bg-white shadow-xl rounded-2xl w-60">
              <div className="flex flex-1 p-15 justify-center items-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={120}
                  className="max-h-30 w-auto"
                />
              </div>
              <div className="flex flex-row justify-between m-3">
                <div className="flex flex-col flex-1">
                  <span className="font-bold">{product.name}</span>
                  <span>چربی: {product.fat}</span>
                </div>
                <div className="flex flex-col">
                  <div className="bg-[#ff5d00] rounded-xl shadow p-4 cursor-pointer aspect-square max-h-12 hover:bg-[#ff5d60]">
                    <MdOutlineArrowBackIos className="text-white"/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
