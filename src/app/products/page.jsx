import Category from "../Components/Home/Category";
import BreadCrumb from "../Components/BreadCrumb";
import Image from "next/image";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { fallbackImage } from "@/lib/constant";
export default function Products() {
  const BreadCrumbData = ["خانه", "محصولات"];
  const test = [
    {
      id: 1,
      title: "محصول 1",
      fat: 10,
      image: "/test.png",
    },
    {
      id: 2,
      title: "محصول 2",
      fat: 20,
      image: "/test.png",
    },
    {
      id: 3,
      title: "محصول 3",
      fat: 30,
      image: "/test.png",
    },
    {
      id: 4,
      title: "محصول 4",
      fat: 40,
      image: "/test.png",
    },
    {
      id: 5,
      title: "محصول 5",
      fat: 50,
      image: "/test.png",
    },
    {
      id: 6,
      title: "محصول 6",
      fat: 60,
      image: "/test.png",
    },
    {
      id: 7,
      title: "محصول 7",
      fat: 70,
      image: "/test.png",
    },
    {
      id: 8,
      title: "محصول 8",
      fat: 80,
      image: "/test.png",
    }
  ];
  return (
    <div className="flex flex-col">
      <BreadCrumb path={BreadCrumbData} />
      <Category />
      <div className="flex justify-center items-center my-10">
        <div className="grid grid-cols-4 gap-10">
          {test.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white shadow hover:shadow-lg rounded-2xl w-60"
            >
              <div className="flex flex-1 p-15 justify-center items-center">
                <Image
                  src={product.image ? product.image : fallbackImage}
                  alt={product.product_name}
                  width={100}
                  height={120}
                  className="max-h-30 w-auto"
                />
              </div>
              <div className="flex flex-row justify-between m-3">
                <div className="flex flex-col flex-1">
                  <span className="font-bold">{product.product_name}</span>
                  {/* <span>چربی: {product.fat}</span> */}
                </div>
                <div className="flex flex-col">
                  <div className="bg-[#e7edf6] rounded-xl shadow p-4 cursor-pointer aspect-square max-h-12 hover:bg-[#b7edf3]">
                    <MdOutlineArrowBackIos className="text-black" />
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
