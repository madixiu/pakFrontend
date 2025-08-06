import Image from "next/image";
function CategoryCard() {
  
  return ( 
    <div className="bg-yellow-400 flex w-fit p-5 rounded-2xl">
      <Image
        src="/butter.svg"
        alt="Category Image"
        width={100}
        height={100}

        className="dark:invert"

      />
    </div>
   );
  }
  
  
//   <ButterIcon1 color="#ff0000" width={200} height={200} className="dark:invert" />
// const ButterIcon1 = ({ color = "#3D5797", width = 300, height = 200 }) => (
//   <svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
//     <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
//   </svg>
// );
export default CategoryCard;