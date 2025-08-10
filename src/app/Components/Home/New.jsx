import Image from "next/image";
import { GoArrowUpLeft } from "react-icons/go";

function New() {
  return (
    <div className="flex flex-row gap-10 w-full justify-center items-center p-10 mt-30">
      <div className="relative">
        <div className="absolute">
          <div className="flex flex-col mx-10 mt-15 gap-2">
            <span className="text-white">ماست پرچرب</span>
            <span className="text-white font-bold text-4xl">همزده</span>
          </div>
          <div className="mx-10 mt-20">
            <div className="bg-white rounded-xl shadow p-4 cursor-pointer hover:bg-neutral-200 max-h-12 max-w-12">
              <GoArrowUpLeft />
            </div>
          </div>
        </div>
        <Image
          src={"/Home/New products/newProd1.jpg"}
          alt={"history image"}
          className="object-cover rounded-3xl shadow-l cursor-pointer hover:shadow-2xl"
          height={100}
          width={600}
        />
      </div>
      <div className="relative">
        <div className="absolute">
          <div className="flex flex-col mx-10 mt-15 gap-2">
            <span className="text-white">ماست سبزی</span>
            <span className="text-white font-bold text-4xl">دلال</span>
          </div>
          <div className="mx-10 mt-20">
            <div className="bg-white rounded-xl shadow p-4 cursor-pointer hover:bg-neutral-200 max-h-12 max-w-12">
              <GoArrowUpLeft />
            </div>
          </div>
        </div>
        <Image
          src={"/Home/New products/newProd2.jpg"}
          alt={"history image"}
          className="object-cover rounded-3xl shadow-l cursor-pointer hover:shadow-2xl"
          height={200}
          width={600}
        />
      </div>
    </div>
  );
}

export default New;
