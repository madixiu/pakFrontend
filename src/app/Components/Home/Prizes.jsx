import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import Image from "next/image";
function Prizes() {
  const Certificates = [
    {
      id: 1,
      src: "/Home/Certificates/cert1.png",
      alt: "گواهینامه 1",
    },
    {
      id: 2,
      src: "/Home/Certificates/cert2.png",
      alt: "گواهینامه 2",
    },
    {
      id: 3,
      src: "/Home/Certificates/cert3.png",
      alt: "گواهینامه 3",
    },
    {
      id: 4,
      src: "/Home/Certificates/cert4.png",
      alt: "گواهینامه 4",
    },
    {
      id: 5,
      src: "/Home/Certificates/cert5.png",
      alt: "گواهینامه 5",
    },
  ];
  return (
    <div className="my-20 mx-40">
      <div className="flex flex-row">
        <div className="flex flex-1 flex-col">
          <span className="text-black">افتخارات ما</span>
          <span className="text-black font-extrabold text-3xl">
            جوایــــــز و گواهینامه ها
          </span>
        </div>
        <div className="flex flex-1 justify-end items-center">
          <div className="gap-3 flex flex-row ">
            <div className="bg-[#e7edf6] rounded-xl shadow p-4 cursor-pointer aspect-square max-h-12 hover:bg-neutral-200">
              <MdOutlineArrowForwardIos />
            </div>
            <div className="bg-[#e7edf6] rounded-xl shadow p-4 cursor-pointer aspect-square max-h-12 hover:bg-neutral-200">
              <MdOutlineArrowBackIos />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row p-5 justify-around">
        {Certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="flex flex-col justify-center items-center gap-4 border p-5 rounded-2xl border-neutral-200  cursor-pointer hover:shadow"
          >
            <Image
              src={certificate.src}
              alt={certificate.alt}
              className="object-cover shadow-l"
              height={200}
              width={200}
            />
            <span className="text-black">{certificate.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prizes;
