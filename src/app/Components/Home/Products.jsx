import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { GoArrowUpLeft } from "react-icons/go";
import Image from "next/image";
import { ImgUrl } from "@/lib/api";
function Products({ data = [] }) {
  // Default to an empty array if data is not provided
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
              {/* <button className="bg-[#425a94] text-white max-h-12 px-5 py-3 rounded-2xl hover:bg-[#ff5d00] cursor-pointer shadow-xl">
                <div className="flex flex-row justify-center items-center gap-1">
                  <span>مشاهده همه</span>
                  <GoArrowUpLeft />
                </div>
              </button> */}
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
          {data.length > 0 ? ( // Check if data has items
            data.map((product) => (
              <div
                key={product.id}
                className="flex flex-col bg-white shadow hover:shadow-lg rounded-2xl w-60 cursor-pointer"
              >
                <div className="flex flex-1 p-2 justify-center items-center">
                  <Image
                    src={product.image ? ImgUrl(product.image) : fallbackImage}
                    alt={product.product_name}
                    width={300}
                    height={250}
                    className="bg-slate-50 rounded-xl h-60 w-auto"
                  />
                </div>
                <div className="flex flex-row justify-center m-3">
                  <div className="flex flex-col flex-1 gap-1">
                    <div className="flex flex-row justify-center items-center gap-1">
                      <span className="font-bold text-sm">{product.group}</span>
                      <span className="font-bold text-sm">
                        {product.subgroup}
                      </span>
                      <span className="text-sm">{product.feature}</span>
                    </div>
                  </div>
                </div>
                {/* <div className="flex flex-row justify-between m-3">
                  <div className="flex flex-col flex-1">
                    <span className="">{product.product_name}</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="bg-[#ff5d00] rounded-xl shadow p-4 cursor-pointer aspect-square max-h-12 hover:bg-[#ff5d60]">
                      <MdOutlineArrowBackIos className="text-white" />
                    </div>
                  </div>
                </div> */}
              </div>
            ))
          ) : (
            <div className="text-white">محصولی برای نمایش وجود ندارد.</div> // Message when no products are available
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
