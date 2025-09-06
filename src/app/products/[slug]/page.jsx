
import Category from "../../Components/Home/Category";
import BreadCrumb from "../../Components/BreadCrumb";
import Image from "next/image";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { apiUrl } from "@/lib/api";
import { fallbackImage } from '@/lib/constant';

// Server component: receives params from Next.js
export default async function Products({ params }) {

  
  // const slug = params.slug;
  const { slug } = await params;
  const slugMap = {
    milk: 1,
    yogurt: 2,
    cream: 3,
    butter: 4,
    cheese: 5,
    powder: 6,
    doogh: 7,
    icecream: 8,
    curd: 9
  };
  const id = slugMap[slug] || null;

  let products = [];
  if (id) {
    try {
      const res = await fetch(apiUrl(`/api/products/categoryv2/${id}/`), {
        // Optionally, add cache: "no-store" for fresh data
        cache: "no-store",
      });
      products = await res.json();
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }

  // fallback for demo
  if (!products || products.length === 0) {
    products = [
      { id: 1, title: "محصول 1", fat: 10, image: "/test.png" },
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
  }

  var BreadCrumbData = ["خانه", "محصولات"];
  // BreadCrumbData = BreadCrumbData.push(slug)
  return (
    <div className="flex flex-col">
      <BreadCrumb path={BreadCrumbData} />
      <Category />
      <div className="flex justify-center items-center my-10">
        <div className="grid grid-cols-4 gap-10">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col bg-white shadow hover:shadow-lg rounded-2xl w-60">
              <div className="flex flex-1 p-15 justify-center items-center">
                <Image
                  src={product.image ? product.image : fallbackImage}
                  alt={product.product_name}
                  width={100}
                  height={120}
                  className="max-h-50 w-auto"
                />
              </div>
              <div className="flex flex-row justify-between m-3">
                <div className="flex flex-col flex-1 gap-1">
                  <div className="flex flex-row gap-2">
                    
                    <span className="font-bold text-xs">{product.group}</span>
                    <span className="font-bold text-xs">{product.subgroup}</span>
                    <span className="text-xs">{product.feature}</span>

                  </div>

                  <span className="text-xs">چربی: {product.fat}</span>
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
