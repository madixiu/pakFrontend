import { GoArrowUpLeft } from "react-icons/go";
function Banner() {
  return (
    <div className="relative w-full">
      {/* YOUR EXACT IMG TAG - UNTOUCHED */}
      <img
        src="/banner.jpg"
        alt="Banner Image"
        width="100%"
        style={{ display: "block", aspectRatio: "2/1" }} // ← YOUR ORIGINAL RATIO
        className="object-cover" // (optional, prevents stretch)
      />

      {/* Overlay Content */}
      <div id="bannerContent" className="absolute top-0 right-0 w-[600px] h-full flex items-center justify-center p-4">
        <div className="text-right absolute right-56">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow-lg leading-20">
            شیر پرچرب و کم چرب فراپاستوریزه
          </h1>
          <p className="text-white mb-4 drop-shadow-md max-w-md mx-auto">
            Your subtitle
          </p>
          <button className="bg-white text-black px-5 py-3 rounded-2xl hover:bg-red-700">
            <div className="flex flex-row justify-center items-center gap-1">
              <span>مشاهده</span>
              <GoArrowUpLeft />

            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;