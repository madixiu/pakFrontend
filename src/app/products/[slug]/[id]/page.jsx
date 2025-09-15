import { fallbackImage } from "@/lib/constant";
import Image from "next/image";
import BreadCrumb from "@/app/Components/BreadCrumb";
import { apiUrl } from "@/lib/api";
import { GoArrowUpLeft } from "react-icons/go";
import RelatedProducts from "@/app/Components/Products/RelatedProducts";

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
      let breadcrumpTitle = data.product.group + " " + data.product.feature;
      BreadCrumbData.push(breadcrumpTitle);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }

  return (
    <div>
      <BreadCrumb path={BreadCrumbData} />
      {/* //? product detail section */}
      <div className="flex justify-center">
        <div className="flex flex-row w-[70%] items-center my-10 border p-10 rounded-2xl border-slate-200">
          <div className="border border-slate-100 shadow rounded-xl hover:shadow-2xs">
            <Image
              src={data.product.image ? data.product.image : fallbackImage}
              height={100}
              width={300}
              alt="pic"
              className="w-[300px] aspect-square rounded-xl"
            />
          </div>
          <div className="flex flex-col mx-5 justify-start h-full">
            <div>
              <div className="flex flex-row gap-2">
                <span className="font-bold text-3xl">{data.product.group}</span>
                <span className="font-bold text-2xl">
                  {data.product.feature}
                </span>
                <span className="font-bold text-2xl">
                  {data.product.packaging}
                </span>
              </div>
            </div>
            <div className="mt-auto mb-5">
              <span className="text-xl">ویژگی ها:</span>
            </div>
            {data.product.features && data.product.features.length > 0 && (
              <div className="flex flex-row">
                <span>وزن:</span>
                <span>{data.product.weight}</span>
              </div>
            )}
            {data.product.packaging && data.product.packaging.length > 0 && (
              <div className="flex flex-row">
                <span>بسته بندی:</span>
                <span>{data.product.packaging}</span>
              </div>
            )}
            <div
              id="BuyButton"
              className="flex flex-row bg-[#f17213] py-4 px-5 rounded-xl justify-between items-center hover:bg-[#f2934b] cursor-pointer mt-auto max-w-64"
            >
              <div className="mx-10">
                <span className="text-white font-bold">خرید از دیجیکالا</span>
              </div>
              <GoArrowUpLeft className="text-white size-6" />
            </div>
          </div>
        </div>
      </div>
      {/* //? description section  */}
      <div className="flex justify-center my-15">
        <div className="flex flex-col w-[70%]  border-y-1 border-slate-200 py-15">
          <span className="font-bold">توضیحات</span>
          <span className="text-justify leading-10 mt-5">
            شیر یک مایع مغذی و سفیدرنگ است که توسط پستانداران تولید میشود و
            عمدتاً به عنوان منبع اصلی تغذیه برای نوزادان پستانداران قبل از
            توانایی هضم غذاهای دیگر به کار میرود. شیر گاو رایجترین نوع شیر مصرفی
            توسط انسانهاست. این نوشیدنی سرشار از کلسیم، فسفر، ویتامینهای گروه B
            (مخصوصاً B2 و B12) و ویتامین D است که برای سلامت استخوانها و
            دندانها، رشد و ترمیم بدن ضروری میباشد. شیر معمولاً به صورت پاستوریزه
            یا استریلیزه شده برای از بین بردن باکتریهای مضر عرضه میگردد و در
            انواع مختلفی همچون پرچرب، کمچرب و بدون چرب در دسترس است. از شیر برای
            تولید طیف وسیعی از محصولات لبنی مانند پنیر، ماست، کره و بستنی نیز
            استفاده میشود.
          </span>
        </div>
      </div>

      {/* //? RelatedProducts  */}
      <RelatedProducts data={data.related_products} />
    </div>
  );
}
