"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { fallbackImage } from "@/lib/constant";

function ProductsGrid({ data, slug }) {
  // Destructure props correctly
  const router = useRouter();

  const handleProductClick = (id) => {
    router.push(`/products/${slug}/${id}`);
  };

  return (
    <div className="flex justify-center items-center my-10 ">
      <div className="grid grid-cols-5 gap-10">
        {data.map(
          (
            product // Use data instead of products
          ) => (
            <div
              key={product.id}
              className="flex flex-col bg-white shadow hover:shadow-lg rounded-2xl w-68 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="flex flex-1 p-2 justify-center items-center">
                <Image
                  src={product.image ? product.image : fallbackImage}
                  alt={product.product_name}
                  width={300}
                  height={250}
                  className="bg-slate-50 rounded-xl h-68 w-auto"
                />
              </div>
              <div className="flex flex-row justify-center m-3">
                <div className="flex flex-col flex-1 gap-1">
                  <div className="flex flex-row justify-center items-center gap-1">
                    <span className="font-bold text-sm">{product.group}</span>
                    <span className="font-bold text-sm">
                      {product.subgroup}
                    </span>
                    <span className="text-sm font-bold">{product.feature}</span>
                    <span className="text-xs">{product.weight_volume}</span>

                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ProductsGrid;
