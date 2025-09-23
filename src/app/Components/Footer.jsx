import {
  BsWhatsapp,
  BsTelephone,
  BsPrinter,
  BsPatchCheck,
  BsInstagram,
} from "react-icons/bs";
import { FiYoutube, FiMail } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { GrMicrophone } from "react-icons/gr";
import Image from "next/image";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <footer className="flex flex-1 justify-center">
      <div className="flex flex-col md:p-20 p-5 relative mt-[260px]">
        <div className="absolute md:top-[-260px] top-[-50px] w-full left-0">
          <Image
            src="/milkSplash.png"
            alt="Footer Background"
            width={1920}
            height={500}
            className="bg-[#e7edf6]"
            // className="absolute top-0"
          />
        </div>
        <div className="flex md:flex-row flex-col flex-1 md:p-5 p-0 gap-20">
          <div className="flex flex-col flex-1 gap-10">
            <div className="flex flex-row gap-4">
              <div>
                <Image
                  src="/logo.png" // Replace with your logo path
                  alt="Logo"
                  // className="transition-all duration-300 ease-in-out"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex items-center">
                <span className="font-extrabold sm:text-2xl">
                  شرکت لبنیات و بستنی پاستوریزه پاک
                </span>
              </div>
            </div>
            <div className="flex">
              <span>
                مجموعه لبنی پاک به عنوان عضوی از گروه صنایع غذایی سینا در راستای
                ارتقاء سلامت جامعه و افزایش سرانه مصرف فرآورده های لبنی با اتکاء
                به بیش از نیم قرن تجربه، برخورداری از کارکنان مجرب، برند معتبر و
                تکنولوژی روز، فلسفه وجودی خود را تولید و عرضه محصولات متنوع و
                سالم با رعایت استانداردهای بهداشتی، کیفی و زیست محیطی دانسته و
                تلاش می کند تا با فعالیت در بازارهای ملی و فراملی رضایت مشتریان
                را توامان با منافع صاحبان سهام تامین نماید.
              </span>
            </div>
          </div>
          <div className="sm:flex hidden bg-[#F4F4F4] w-[2]"></div>
          <div className="flex flex-col gap-2 flex-1">
            <div>
              <span>راه های ارتباطی</span>
            </div>
            <div className="w-10 h-1 bg-amber-600 rounded-3xl"></div>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex flex-row gap-3 items-center">
                <SlLocationPin className="size-4" />
                <span className="text-shadow-2xs text-xs font-bold">
                  آدرس کارخانه: ایران، تهران، کیلومتر 3 بزرگراه فتح
                </span>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <FiMail className="size-4" />
                <span className="text-shadow-2xs text-xs font-bold">
                  صندوق پستي: 1387695811
                </span>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <BsTelephone className="size-4" />
                <span className="text-shadow-2xs text-xs font-bold">
                  تلفن گویا:  02160941000
                </span>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <GrMicrophone className="size-4" />
                <span className="text-shadow-2xs text-xs font-bold">
                  صدای مشتری:  02160946094
                </span>
              </div>
              {/* <div className="flex flex-row gap-3 items-center">
                <BsPatchCheck className="size-4" />
                <span className="text-shadow-2xs text-xs font-bold">
                  بازرسی(واتساپ):  09108062614
                </span>
              </div> */}
              <div className="flex flex-row gap-3 items-center">
                <BsPrinter className="size-4" />
                <span className="text-shadow-2xs text-xs font-bold">
                  نمابر:   66809535-009821
                </span>
              </div>
            </div>
          </div>
          <FooterNav />
        </div>
        <div className="bg-[#285caa] flex lg:flex-row flex-col mt-5 rounded-2xl p-5 justify-between">
          <div className="flex flex-row gap-2">
            <div className="bg-[#3969b1] border-[#567ebc] rounded-full p-1 border-3 cursor-pointer hover:bg-[#ff7023] hover:border-[#ff7023]   transition-colors duration-300">
              <BsWhatsapp className="text-white size-6" />
            </div>
            <div className="bg-[#3969b1] border-[#567ebc] rounded-full p-1 border-3 cursor-pointer hover:bg-[#ff7023] hover:border-[#ff7023]   transition-colors duration-300">
              <BsInstagram className="text-white size-6" />
            </div>
            <div className="bg-[#3969b1] border-[#567ebc] rounded-full p-1 border-3 cursor-pointer hover:bg-[#ff7023] hover:border-[#ff7023]  transition-colors duration-300">
              <FiYoutube className="text-white size-6" />
            </div>
          </div>
          <div className="flex justify-end items-center">
            <span className="text-white">
              تمامی حقوق مادی و معنوی این سایت متعلق به شرکت لبنیات پاک می باشد.
            </span>
          </div>
        </div>
        {/* <p>&copy; 2023 My Website</p> */}
      </div>
    </footer>
  );
}

export default Footer;
