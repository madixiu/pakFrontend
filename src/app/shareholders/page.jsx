import BreadCrumb from "../Components/BreadCrumb";
import { FiDownload } from "react-icons/fi";
function Shareholders() {
  const BreadCrumbData = ["خانه", "امور مجامع و سهام"];
  const data = [
    {
      year: "1403",
      items: [
        {
          title: "گزارش سالانه هیئت مدیره به مجمع عمومی عادی صاحبان سهام",
          link: "http://fastcdn.pro/filegallery/pakdairy.com/اطلاعیه-ها/گزارش هیئت مدیره، تفسیری، صورت مالی و پایداری 1403/گزارش-هیئت-مدیره-1403-12-30.pdf",
        },
        {
          title: "گزارش تفسیری مدیریت سال مالی",
          link: "http://fastcdn.pro/filegallery/pakdairy.com/اطلاعیه-ها/گزارش هیئت مدیره، تفسیری، صورت مالی و پایداری 1403/تفسیری-(16).pdf",
        },
        {
          title: "صورت‌های مالی تلفیقی و جداگانه",
          link: "http://fastcdn.pro/filegallery/pakdairy.com/اطلاعیه-ها/گزارش هیئت مدیره، تفسیری، صورت مالی و پایداری 1403/صورت-مالی-1403-12-30.pdf",
        },
        {
          title: "گزارش حسابرسی صورت‌های مالی",
          link: "http://fastcdn.pro/filegallery/pakdairy.com/اطلاعیه-ها/گزارش هیئت مدیره، تفسیری، صورت مالی و پایداری 1403/حسابرسی-1403-12-30.pdf",
        },
      ],
    },
    {
      year: "1402",
      items: [
        {
          title: "صورت مالی نهایی شرکت پاک",
          link: "https://uploadkon.ir/uploads/a37702_24صورت-مالی-نهایی-شرکت-پاک-سال-1402.pdf",
        },
        {
          title: "گزارش تفسیری مدیریت شرکت",
          link: "https://uploadkon.ir/uploads/763702_24گزارش-تفسیری-سال-1402.pdf",
        },
        {
          title: "آگهی دعوت به مجمع عمومی عادی سالیانه",
          link: "https://uploadkon.ir/uploads/e2f202_24آگهی-دعوت-به-مجمع-عمومی-عادی-سالیانه.pdf",
        },
        {
          title: "گزارش فعالیت و وضع عمومی",
          link: "https://uploadkon.ir/uploads/5d5402_24گزارش-فعالیت-و-وضع-عمومی-به-مجمع-عمومی-عادی-صاحبان-سهام.pdf",
        },
      ],
    },
  ];
  return (
    <div>
      <BreadCrumb path={BreadCrumbData} />
      <div className="mx-2 sm:mx-6 md:mx-10 py-8 my-8 sm:py-12 md:py-15">
        <h1 className="text-right text-2xl sm:text-3xl font-bold text-gray-800">
          امور مجامع و سهامداران
        </h1>
        <div className="mt-10 sm:mt-16 md:mt-20">
          {data.map((yearData) => (
            <div key={yearData.year}>
              <h2 className="text-base sm:text-lg font-semibold mt-6">
                اطلاعات مالی سال {yearData.year}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 p-2 sm:p-6 md:p-10 gap-3 sm:gap-5">
                {yearData.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block no-underline"
                  >
                    <div className="relative flex justify-between items-center border border-gray-100 p-4 sm:p-5 shadow rounded-2xl w-full sm:w-[90%] md:w-[70%] cursor-pointer overflow-hidden group">
                      {/* Background fill element */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-[#3d5797] transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-600 ease-in-out z-0"></div>
                      {/* Content */}
                      <span className="relative z-10 group-hover:text-white transition-colors duration-300 text-xs sm:text-base">
                        {item.title}
                      </span>
                      <FiDownload className="relative z-10 group-hover:text-white transition-colors duration-300 text-lg sm:text-xl" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#e7edf6] py-10">
        <div className="mx-2 sm:mx-6 md:mx-10 py-8 sm:py-12 md:py-15">
          <h2 className="text-lg sm:text-xl font-semibold mt-6">
            اعضای هیئت مدیره
          </h2>
          <div className="rounded-2xl overflow-x-auto shadow-xl mt-8 sm:mt-15">
            <table className="w-full border-collapse text-xs sm:text-sm min-w-[600px]">
              <thead className="border border-gray-300 rounded-t-2xl shadow">
                <tr>
                  <th className="text-right p-2 sm:p-3 border-b border-gray-300">
                    نام
                  </th>
                  <th className="text-right p-2 sm:p-3 border-b border-gray-300">
                    سمت
                  </th>
                  <th className="text-right p-2 sm:p-3 border-b border-gray-300">
                    تحصیلات
                  </th>
                  <th className="text-right p-2 sm:p-3 border-b border-gray-300">
                    سوابق کاری
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="p-2 sm:p-3 border-b border-gray-200">
                    رضا عاصم نخجوانی
                  </td>
                  <td className="p-2 sm:p-3 border-b border-gray-200">رئیس</td>
                  <td className="p-2 sm:p-3 border-b border-gray-200">
                    کارشناسی
                  </td>
                  <td className="p-2 sm:p-3 border-b border-gray-200">
                    مدیریت عاملی ایران خودرو دیزل، گروه بهمن، سرمایه گذاری بانک
                    پارسیان، فرهنگیان و ...
                  </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="p-2 sm:p-3 border-b border-gray-200">
                    غلامرضا مافی
                  </td>
                  <td className="p-2 sm:p-3 border-b border-gray-200">عضو</td>
                  <td className="p-2 sm:p-3 border-b border-gray-200">
                    کارشناسی
                  </td>
                  <td className="p-2 sm:p-3 border-b border-gray-200">
                    عضو جامعه حسابرسان داخلی ایران، انجمن حسابداران خبره،
                    کمیته‌های حسابرسی و ریسک و ...
                  </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="p-2 sm:p-3">پرویز نوبهاری شبستری</td>
                  <td className="p-2 sm:p-3">عضو</td>
                  <td className="p-2 sm:p-3">کارشناسی ارشد</td>
                  <td className="p-2 sm:p-3">
                    مدیرعامل و عضو هیات مدیره موسسه حسابرسی و خدمات مالی آگاه
                    اندیش
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shareholders;
