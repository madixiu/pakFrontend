import React from "react";

export default function MajamehSurat() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10 bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-gray-100 p-3 rounded text-sm shadow">
        
        <ol className="flex gap-2 text-blue-600">
          
          <li>
            
            <a href="/fa" className="hover:underline">
              صفحه نخست
            </a>
            <span className="mx-2">›</span>
          </li>
          <li>
            
            <a href="/fa/صفحه/غپاک" className="hover:underline">
              امور مجامع و سهامداران
            </a>
          </li>
        </ol>
      </nav>
      {/* Title */}
      <h1 className="text-center text-3xl font-bold text-gray-800">
        امور مجامع و سهامداران
      </h1>
      {/* Section: Financial Reports */}
      {[
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
      ].map((section, idx) => (
        <div key={idx}>
          <div className="bg-blue-600 text-white py-3 px-4 rounded-lg text-center shadow">
            <h2 className="text-xl font-semibold">
              اطلاعات مالی سال {section.year}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-800 mb-3">
                  {item.title}
                </h4>
                <a
                  href={item.link}
                  className="inline-block text-blue-600 font-bold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  دانلود ↢
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Section: Online Broadcast */}
      <div className="bg-blue-600 text-white py-3 px-4 rounded-lg text-center shadow">
        <h2 className="text-xl font-semibold">پخش آنلاین مجمع عمومی</h2>
      </div>
      <p className="text-center text-gray-700 mt-4">
        جلسه مجمع عمومی عادی سالیانه برای سال مالی منتهی به <b>1402/12/29</b> در
        تاریخ <b>13 مرداد 1403</b> ساعت 9 صبح برگزار می‌شود. <br />
        لینک مشاهده:
        <a
          href="https://kianstream.com/pak"
          className="text-blue-600 hover:underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://kianstream.com/pak
        </a>
      </p>
      {/* Section: Extraordinary Meeting */}
      <div className="bg-blue-600 text-white py-3 px-4 rounded-lg text-center shadow mt-10">
        <h2 className="text-xl font-semibold">مجمع عمومی فوق‌العاده</h2>
      </div>
      <p className="text-center text-gray-700 mt-4">
        زمان برگزاری: <b>1403/05/13</b> ساعت 11 صبح در تهران، کیلومتر 3 بزرگراه
        شهید متوسلیان (فتح) میدان شیر.
      </p>
      <p className="text-center mt-4">
        پخش آنلاین:
        <a
          href="https://kianstream.com/pak"
          className="text-blue-600 hover:underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://kianstream.com/pak
        </a>
      </p>
      {/* Section: Board Members */}
      <div className="bg-blue-600 text-white py-3 px-4 rounded-lg text-center shadow mt-10">
        <h2 className="text-xl font-semibold">اعضای هیئت مدیره</h2>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse text-sm shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3">نام</th>
              <th className="border p-3">سمت</th>
              <th className="border p-3">تحصیلات</th>
              <th className="border p-3">سوابق کاری</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border p-3">رضا عاصم نخجوانی</td>
              <td className="border p-3">رئیس</td>
              <td className="border p-3">کارشناسی</td>
              <td className="border p-3">
                مدیریت عاملی ایران خودرو دیزل، گروه بهمن، سرمایه گذاری بانک
                پارسیان، فرهنگیان و ...
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border p-3">غلامرضا مافی</td>
              <td className="border p-3">عضو</td>
              <td className="border p-3">کارشناسی</td>
              <td className="border p-3">
                عضو جامعه حسابرسان داخلی ایران، انجمن حسابداران خبره، کمیته‌های
                حسابرسی و ریسک و ...
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border p-3">پرویز نوبهاری شبستری</td>
              <td className="border p-3">عضو</td>
              <td className="border p-3">کارشناسی ارشد</td>
              <td className="border p-3">
                مدیرعامل و عضو هیات مدیره موسسه حسابرسی و خدمات مالی آگاه اندیش
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
