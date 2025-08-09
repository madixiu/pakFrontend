import Image from "next/image";
function New() {
  return (
    <div className="flex flex-row gap-10 w-full justify-center items-center p-10 mt-20">
      <Image
        src={"/Home/New products/newProd1.jpg"}
        alt={"history image"}
        className="object-cover rounded-3xl shadow-l cursor-pointer hover:shadow-2xl"
        height={100}
        width={500}
      />
      <Image
        src={"/Home/New products/newProd2.jpg"}
        alt={"history image"}
        className="object-cover rounded-3xl shadow-l cursor-pointer hover:shadow-2xl"
        height={200}
        width={500}
      />
    </div>
  );
}

export default New;
