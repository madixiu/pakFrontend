import Image from "next/image";

function About() {
  return (
    <div className="flex flex-row py-15 bg-[#e7edf6]">
      <div className="flex flex-col flex-1 justify-center items-center mx-10">
        <div className="items-start w-full mb-5">
          <span className="font-light text-sm">درباره ما</span>
        </div>
        <div className="items-start w-full">
          <span className="text-3xl font-extrabold">شرکت لبنیات و بستنی</span>
        </div>
        <div className="items-start w-full">
          <span className="text-3xl font-bold">پاستوریزه پاک</span>
        </div>
        <div className="mt-5" dir="rtl">
          <p className="text-justify leading-10 text-gray-800">
            شرکت لبنیات پاستوریزه پاک در سال 1338 تحت لیسانس شرکت فرموست آمریکا
            و با نام تجاری پاک در تهران تأسیس گردید. سپس با خرید کارخانه کانادا
            "فراست" در سال ۱۳۴۹ و "الدورادو" در سال ۱۳۵۱ واحد بستنی خود را ایجاد
            کرد. همچنین با خرید کارخانه‌های پاک ساری، پاک شهرکرد و پاک سنندج،
            پوشش جغرافیایی خود را درکشور وسعت بخشیده و هم اکنون در قالب گروه
            لبنیات پاک و با رویکرد امنیت غذایی جامعه، ایجاد اشتغال، توسعه کمی و
            کیفی بازار، نوآوری و تنوع در محصولات، حفظ محیط زیست و در نهایت جلب
            رضایت و اعتماد مشتریان، در مسیر توسعه و خدمت رسانی گام بر می‌دارد.
            گروه لبنیات پاک با بیش از ۶۰ سال سابقه، تولید کننده انواع محصولات
            لبنی و بستنی به صورت پاستوریزه و استریلیزه می‌باشد.
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center">
        <Image
          src="/image1.png"
          alt="Description of the image"
          width={400}
          height={400}
          className="rounded-4xl"
        />
      </div>
    </div>
  );
}

export default About;
