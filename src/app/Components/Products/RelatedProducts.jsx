"use client"
import Image from "next/image";
import { fallbackImage } from "@/lib/constant";
import { useRouter } from "next/navigation";
import { ImgUrl } from "@/lib/api";

export default function RelatedProducts({data}) {

    const router = useRouter();
  
    const handleProductClick = (id,slug) => {
      router.push(`/products/${slug}/${id}`);
    };
  // const ProductsExample = [
  //   {
  //     id: 1,
  //     name: "ماست یونانی پاک",
  //     fat: "۴٪",
  //     image: "/Home/Products/yogurt.png",
  //   },
  //   {
  //     id: 2,
  //     name: "خامه صبحانه",
  //     fat: "۳۵٪",
  //     image: "/Home/Products/cream.png",
  //   },
  //   {
  //     id: 3,
  //     name: "پنیر پیتزا",
  //     fat: "۲۵٪",
  //     image: "/Home/Products/cheese.png",
  //   },
  //   {
  //     id: 4,
  //     name: "کره",
  //     fat: "۸۰٪",
  //     image: "/Home/Products/butter.png",
  //   },
  // ];
  return (
    <div className="flex mx-32">
      <div className="px-15 py-20 flex flex-col w-full rounded-3xl">
        <div className="flex">
          <div className="flex flex-col flex-1">
            <span className="font-bold">محصولات مرتبط</span>

          </div>

        </div>
        <div className="flex mt-15 justify-center gap-5 h-80">
          {data.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white shadow hover:shadow-lg rounded-2xl w-60 cursor-pointer"
              onClick={() => handleProductClick(product.id,product.group)}
            >
              <div className="flex flex-1 p-2 justify-center items-center rounded-xl">
                <Image
                  className="bg-slate-50 rounded-xl h-60 w-auto "
                  src={product.image ? ImgUrl(product.image) : fallbackImage}
                  alt={product.product_name}
                  width={300}
                  height={250}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}