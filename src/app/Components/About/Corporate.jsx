"use client";
import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";

export default function Corporates() {
  const [selectedCity, setSelectedCity] = useState(0);


  const data = [
    {
      id:1,
      name: "شرکت پاک ساری",
      address: "مازندران، ساری، بعد از پل تجن، بلوار امام رضا(ع)، جنب هلال احمر.",
      phone: "0113328201112",
      fax: "01133281441",
      postalCode: "4818958916",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2106.4152281804554!2d53.08691189123628!3d36.56421321928177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f853f006882a339%3A0x15782c635f26e9f8!2z2LTYsdqp2Kog2YTYqNmG24zYp9iqINm-2KfaqQ!5e0!3m2!1sen!2suk!4v1758460289524!5m2!1sen!2suk"
      
    },
    {
      id:2,
      name: "شرکت پاک سنندج",
      address: "سنندج، میدان آزادی، خیابان سنندج – شهرک صنعتی شماره یک شرکت لبنیات پاستوریزه پاک آرا",
      phone: "087‌‌‍3‌3383293-5",
      fax: "9876543210",
      postalCode: "6616873651",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.006923368548!2d47.04612267607465!3d35.3058094505051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff996862ae6efcd%3A0xea34e7c5f396b8af!2z2LTYsdqp2Kog2YTYqNmG24zYp9iqINm-2KfaqSDYotix2Kcg2LPZhtmG2K_YrA!5e0!3m2!1sen!2suk!4v1758459471475!5m2!1sen!2suk"
    },
    {
      id:3,
      name: "شرکت پاک شهرکرد",
      address: "شهرکرد شهرک صنعتی بلوار کارآفرینان گلستان سوم شرکت پاک پی کد پستی",
      phone: "03833332003",
      fax: "03833332482",
      postalCode: "8813653745",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510.35686809471093!2d50.92486784146853!3d32.309948003272844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbef1e7fc42e83d%3A0xa7205c403d9ddd29!2z2LTYsdqp2Kog2b7Yp9qpINm-24w!5e0!3m2!1sen!2suk!4v1758459610317!5m2!1sen!2suk"
      
    }
  ]
  return (
    <div className="flex justify-center">
      <div className="bg-[#e7edf6] w-[70%] rounded-2xl my-20">
        <div className="flex flex-row gap-10 justify-center items-center mt-10">
          <span>نمایندگی های ما</span>
          <span className="text-2xl font-bold">شرکت های زیر مجموعه پاک</span>
        </div>
        <div className="flex flex-row justify-center gap-20 my-20">
          <div className={`flex flex-col items-center gap-2 hover:bg-white p-2 rounded-xl cursor-pointer ${selectedCity === 0 ? "bg-white" : ""}`} onClick={() => setSelectedCity(0)}>
            <div>
              <Image
                src={"/about/city1.jpg"}
                alt={"history image"}
                className="aspect-square object-cover rounded-full shadow-2xs"
                width={64}
                height={64}
              />
            </div>
            <div>
              <span>ساری</span>
            </div>
          </div>

          <div className={`flex flex-col items-center gap-2 hover:bg-white p-2 rounded-xl cursor-pointer ${selectedCity === 1 ? "bg-white" : ""}`} onClick={() => setSelectedCity(1)}>
            <div>
              <Image
                src={"/about/city2.jpg"}
                alt={"history image"}
                className="aspect-square object-cover rounded-full shadow-2xs"
                width={64}
                height={64}
              />
            </div>
            <div>
              <span>سنندج</span>
            </div>
          </div>

          <div className={`flex flex-col items-center gap-2 hover:bg-white p-2 rounded-xl cursor-pointer ${selectedCity === 2 ? "bg-white" : ""}`} onClick={() => setSelectedCity(2)}>
            <div>
              <Image
                src={"/about/city3.jpg"}
                alt={"history image"}
                className="aspect-square object-cover rounded-full shadow-2xs"
                width={64}
                height={64}
              />
            </div>
            <div>
              <span>شهرکرد</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row bg-[#285caa] p-10 rounded-2xl mb-10 w-[75%] shadow-2xl">
            <div className="flex flex-col gap-5 w-[60%]">
              <div>
                <span className="text-white font-bold">{data[selectedCity].name}</span>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex items-center justify-center bg-neutral-100 aspect-square lg:h-12 md:h-6 h-4 rounded-full">
                  <SlLocationPin className="md:h-4 h-2" />
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-white text-sm">آدرس:</span>
                  </div>
                  <div className="w-[80%]">
                    <span className="text-white text-sm">
                      {data[selectedCity].address}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex items-center justify-center bg-neutral-100 aspect-square lg:h-12 md:h-6 h-4 rounded-full">
                  <BsTelephone className="md:h-4 h-2" />
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-white text-sm">شماره تماس:</span>
                  </div>
                  <div>
                    <span className="text-white text-sm">
                      {data[selectedCity].phone}
                    </span>
                  </div>
                  {/* <div>
                    <span className="text-white text-sm">
                      سایت فروش: 33336100-009838
                    </span>
                  </div> */}
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex items-center justify-center bg-neutral-100 aspect-square lg:h-12 md:h-6 h-4 rounded-full">
                  <BsTelephone className="md:h-4 h-2" />
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-white text-sm">فکس:</span>
                  </div>
                  <div className="">
                    <span className="text-white text-sm">
                      {data[selectedCity].fax}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex items-center justify-center bg-neutral-100 aspect-square lg:h-12 md:h-6 h-4 rounded-full">
                  <BsTelephone className="md:h-4 h-2" />
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-white text-sm">کد پستی:</span>
                  </div>
                  <div className="">
                    <span className="text-white text-sm">{data[selectedCity].postalCode}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[40%] justify-end items-center">
              <div className="aspect-square bg-slate-50 rounded-2xl shadow-lg p-2">
                <iframe
                  src={data[selectedCity].map}
                  width={"100%"}
                  height={"100%"}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-square"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
