export default function BreadCrumb({ path }) {
  return (
    <div className="bg-[#e7edf6] py-3 px-4 sm:py-5 sm:px-10 md:px-20 lg:px-40 xl:px-80 text-xs sm:text-sm rounded-b-2xl w-full overflow-x-auto whitespace-nowrap">
      {path.map((item, index) => (
        <span key={index}>
          {item}
          {index < path.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
}
