import Category from "../../Components/Home/Category";
import BreadCrumb from "../../Components/BreadCrumb";
import Image from "next/image";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { apiUrl } from "@/lib/api";
import { fallbackImage } from "@/lib/constant";
import ProductsGrid from "@/app/Components/Products/ProductsGrid";

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
    curd: 9,
  };

//! Temporary breadcrump slug
const slugPersian = {
  1: "شیر",
  2: "ماست",
  3: "خامه",
  4: "کره",
  5: "پنیر",
  6: "پودری",
  7: "دوغ",
  8: "بستنی",
  9: "کشک"
};


  const id = slugMap[slug] || null;
  const PersianSlug = slugPersian[id] || null

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
      },
    ];
  }

  var BreadCrumbData = ["خانه", "محصولات"];
  BreadCrumbData.push(PersianSlug)
  // BreadCrumbData = BreadCrumbData.push(slug)
  return (
    <div className="flex flex-col bg-slate-50">
      <BreadCrumb path={BreadCrumbData} />
      <Category />
      <ProductsGrid data={products} slug={slug} />
    </div>
  );
}
