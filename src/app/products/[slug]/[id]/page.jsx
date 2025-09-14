import { fallbackImage } from "@/lib/constant";
import Image from "next/image";
import BreadCrumb from "@/app/Components/BreadCrumb";
import { apiUrl } from "@/lib/api";

export default async function Product({ params }) {
  const { slug, id } = await params;

  var BreadCrumbData = ["خانه", "محصولات"];

  // const slugMap = {
  //   milk: 1,
  //   yogurt: 2,
  //   cream: 3,
  //   butter: 4,
  //   cheese: 5,
  //   powder: 6,
  //   doogh: 7,
  //   icecream: 8,
  //   curd: 9,
  // };

  // //! Temporary breadcrump slug
  // const slugPersian = {
  //   1: "شیر",
  //   2: "ماست",
  //   3: "خامه",
  //   4: "کره",
  //   5: "پنیر",
  //   6: "پودری",
  //   7: "دوغ",
  //   8: "بستنی",
  //   9: "کشک",
  // };

  // const category = slugMap[slug] || null;
  // const PersianSlug = slugPersian[category] || null;
  // BreadCrumbData.push(PersianSlug)
  let data = [];
  if (id)
  try {
    const res = await fetch(apiUrl(`/api/products/${id}/`), {
      // Optionally, add cache: "no-store" for fresh data
      cache: "no-store",
    });
    data = await res.json();
    let breadcrumpTitle = data.product.group + " " + data.product.feature
    BreadCrumbData.push(breadcrumpTitle)

  } catch (error) {
    console.error("Error fetching product data:", error);
  }

  return (
    <div>
      <BreadCrumb path={BreadCrumbData} />
      {/* //? product detail section */}
      <div className="flex flex-row justify-center">
        <div>
          <Image src={fallbackImage} height={100} width={100} alt="pic" />
        </div>
        <div></div>
      </div>
    </div>
  );
}
